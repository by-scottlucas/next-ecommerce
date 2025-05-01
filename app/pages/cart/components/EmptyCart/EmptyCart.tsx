import './EmptyCart.css';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function EmptyCart() {
    return (
        <div className="empty-cart-container">
            <div className="empty-cart-icon-wrapper">
                <ShoppingCart size={64} className="empty-cart-icon" />
            </div>
            
            <h2 className="empty-cart-title">
                Seu carrinho está vazio
            </h2>
            <p className="empty-cart-message">
                Parece que você ainda não adicionou nada ao seu carrinho.
                Comece a comprar para encontrar produtos incríveis!
            </p>
            
            <Link href={"/pages/products"} className="empty-cart-button">
                Procurar produtos
            </Link>
        </div>
    );
}
