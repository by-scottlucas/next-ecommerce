'use client';

import './CartPage.css';
import { toast } from "sonner";
import Header from '@/app/components/Header/Header';
import { useCart } from '@/app/contexts/CartContext';
import EmptyCart from './components/EmptyCart/EmptyCart';
import CartItem from './components/CartItem/CartItem';
import CartSummary from './components/CartSummary/CartSummary';

export default function CartPage() {
    const { cartItems, clearCart } = useCart();

    const handleClearCart = () => {
        clearCart();
        toast.success("Carrinho esvaziado com sucesso");
    }

    if (cartItems.length === 0) {
        return (
            <>
                <Header />
                <div className="cart-container">
                    <EmptyCart />
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="cart-container">
                <div className="cart-header">
                    <h1 className="cart-title">Seu Carrinho</h1>
                    <button onClick={handleClearCart} className="cart-clear-btn">
                        Limpar carrinho
                    </button>
                </div>

                <div className="cart-content">
                    <div className="cart-items">
                        <div className="cart-items-box">
                            {cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <CartSummary />
                    </div>
                </div>
            </div>
        </>
    );
}
