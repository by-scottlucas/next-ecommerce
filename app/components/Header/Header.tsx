"use client";

import './Header.css';

import { useCallback, useState } from 'react';

import { getTranslation } from '../../utils/i18n';
import Image from 'next/image';

interface LanguageProps {
    locale: string;
}

export default function Header({ locale }: LanguageProps) {
    const translations = getTranslation(locale);
    const { promoText, navLinks, logo } = translations.header;
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuIsOpen((prev) => !prev);
    }, []);

    return (
        <nav className="nav-container">
            <div className='promo-box'>
                <span className='font-semibold'>
                    {promoText}
                </span>
            </div>

            <div className="nav-content">
                <a href="#" className="nav-brand-box">
                    <Image
                        width={158}
                        height={110}
                        src={logo}
                        alt="TechPoint"
                        className="nav-logo"
                    />
                </a>

                <button
                    type="button"
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar"
                    className="burger-menu-button"
                    aria-controls="navbar"
                    aria-label='Menu Button'
                    aria-expanded={menuIsOpen ? "true" : "false"}
                >
                    <i className="bi bi-list text-black"></i>
                </button>

                <div className={`nav-items-box ${menuIsOpen ? "open" : "close"}`} id="navbar">
                    <ul className="nav-list">
                        {navLinks.map((navItem, index) => (
                            <li key={index}>
                                <a href={navItem.link} className="nav-item">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
