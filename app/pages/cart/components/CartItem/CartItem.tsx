'use client';

import './CartItem.css';
import { toast } from "sonner";
import QuantitySelector from '@/app/components/QuantitySelector/QuantitySelector';
import { X } from 'lucide-react';
import Image from 'next/image';

import { CartItem as CartItemType, useCart } from '../../../../contexts/CartContext';

interface CartItemProps {
    item: CartItemType;
}

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
                        src={item.image}
                        alt={item.name}
                        className="cart-item-img"
                        priority
                    />
                </div>
                <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.name}</h3>
                    <p className="cart-item-price">R$ {item.price}</p>
                </div>
            </div>

            <div className="cart-item-actions">
                <QuantitySelector
                    stock={item.stock}
                    onChange={handleQuantityChange}
                    initialQuantity={item.quantity}
                />

                <div className="cart-subtotal">R$ {subtotal}</div>

                <button onClick={handleDeleteItem} className="cart-remove-button">
                    <X size={18} />
                    <span className="sr-only">Remover</span>
                </button>
            </div>
        </div>
    );
}
