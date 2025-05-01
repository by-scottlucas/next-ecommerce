import './Header.css';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';

export default function Header() {
    const { translations } = useLanguage();
    const { promoText, navLinks, logo } = translations.header;
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = useCallback(() => setMenuIsOpen(prev => !prev), []);

    return (
        <nav className="header-container">
            <div className='header-promo'>
                <span className='text-white font-semibold'>{promoText}</span>
            </div>

            <div className="header-content">
                <button
                    type="button"
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar"
                    className="header-burger-button"
                    aria-controls="navbar"
                    aria-label='Menu Button'
                    aria-expanded={menuIsOpen ? "true" : "false"}
                >
                    <i className="bi bi-list text-black" aria-hidden="true"></i>
                </button>

                <a href="#" className="header-brand">
                    <Image
                        width={158}
                        height={110}
                        src={logo}
                        alt="TechPoint"
                        className="header-logo"
                        priority
                    />
                </a>

                <div className='header-actions'>
                    <button type="button" aria-label="Ver carrinho" className="header-cart-button">
                        <ShoppingCart className="header-cart-icon" />
                        <span className="header-cart-badge">2</span>
                    </button>

                    <div className={`header-items ${menuIsOpen ? "open" : "close"}`} id="navbar">
                        <ul className="header-list">
                            {navLinks.map((navItem, index) => (
                                <li key={index}>
                                    <a href={navItem.link} className="header-link">
                                        {navItem.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
