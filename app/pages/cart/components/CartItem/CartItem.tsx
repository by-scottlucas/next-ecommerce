'use client';

import './CartItem.css';

import QuantitySelector from '@/app/components/QuantitySelector/QuantitySelector';
import { X } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

import { CartItemProps } from './models/cart-item';
import { useCart } from '@/app/contexts/CartContext';
import { formatCurrencyBRL } from '@/app/utils/utils';

export default function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCart();

    const handleQuantityChange = (value: number) => {
        updateQuantity(item.id, value);
    };

    const handleDeleteItem = () => {
        removeItem(item.id);
        toast.success(`${item.name} removido do carrinho.`);
    }

    const subtotal = (item.price * item.quantity).toFixed(2);

    return (
        <div className="cart-item-container">
            <div className="cart-item-info">
                <div className="cart-item-image">
                    <Image
                        width={300}
                        height={300}
                        alt={item.name}
                        src={item.image}
                        className="cart-item-img"
                        priority
                    />
                </div>

                <div className="cart-item-details">
                    <h3 className="cart-item-title">
                        {item.name}
                    </h3>
                    <p className="cart-item-price">
                        {formatCurrencyBRL(item.price)}
                    </p>
                </div>
            </div>

            <div className="cart-item-actions">
                <QuantitySelector
                    stock={item.stock}
                    onChange={handleQuantityChange}
                    initialQuantity={item.quantity}
                />

                <div className="cart-subtotal">
                    {formatCurrencyBRL(Number(subtotal))}
                </div>

                <button
                    type='button'
                    aria-label='Remover'
                    onClick={handleDeleteItem}
                    className="cart-remove-button"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
}
