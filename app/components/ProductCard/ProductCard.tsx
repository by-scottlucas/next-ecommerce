import { ProductProps } from '@/app/models/Product';
import './ProductCard.css';

import Image from 'next/image';
import Link from 'next/link';
import {  toast } from "sonner"
import { useCart } from '@/app/contexts/CartContext';
import { useCallback } from 'react';

export default function ProductCard(props: ProductProps) {
    const { addItem } = useCart();

    const formatCurrencyBRL = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    const handleAddToCart = useCallback(() => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1,
            stock: props.stock,
            image: props.images[0],
        };

        addItem(item);
        toast.success(`${props.name} adicionado ao carrinho.`);
    }, [addItem, props]);

    return (
        <div className="product-card">
            <Link href={String(props.link)}>
                <Image
                    width={1000}
                    height={1000}
                    src={props.images[0]}
                    alt={props.name || ''}
                    priority
                />
            </Link>

            <div className="px-5 pb-5">
                <Link href={String(props.link)}>
                    <h5 className="product-title">{props.name}</h5>
                </Link>
                <span className="product-price">
                    {formatCurrencyBRL(props.price)}
                </span>
            </div>

            <button onClick={handleAddToCart} className="add-cart-button">
                Adicionar ao Carrinho
            </button>
        </div>
    );
};
