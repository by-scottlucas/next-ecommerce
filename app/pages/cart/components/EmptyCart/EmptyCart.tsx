import './EmptyCart.css';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function EmptyCart() {
    const { translations } = useLanguage();

    return (
        <div className="empty-cart-container">
            <div className="empty-cart-icon-wrapper">
                <ShoppingCart size={64} className="empty-cart-icon" />
            </div>

            <h2 className="empty-cart-title">
                {translations.emptyCartComponent.title}
            </h2>

            <p className="empty-cart-message">
                {translations.emptyCartComponent.description}
            </p>

            <Link href={"/pages/products"} className="empty-cart-button">
                {translations.emptyCartComponent.viewProductsButton}
            </Link>
        </div>
    );
}
