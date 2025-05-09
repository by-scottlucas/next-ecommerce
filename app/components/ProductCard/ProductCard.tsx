import './ProductCard.css';

import { useCart } from '@/app/contexts/CartContext';
import { ProductProps } from '@/app/models/Product';
import { formatCurrencyBRL } from '@/app/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { toast } from 'sonner';

export default function ProductCard(props: ProductProps) {
    const { addItem } = useCart();

    const handleAddToCart = useCallback(() => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1,
            stock: props.stock!,
            image: props.images[0],
        };

        addItem(item);
        toast.success(`${props.name} adicionado ao carrinho.`);
    }, [addItem, props]);

    return (
        <div className="product-card">
            <Link href={props.link} >
                <Image
                    width={1000}
                    height={1000}
                    src={props.images[0]}
                    alt={props.name}
                    priority
                />

                <div className="px-5 pb-5">
                    <h5 className="product-title">
                        {props.name}
                    </h5>
                    <span className="product-price">
                        {formatCurrencyBRL(props.price)}
                    </span>
                </div>
            </Link>

            <button onClick={handleAddToCart} className="add-cart-button">
                Adicionar ao Carrinho
            </button>
        </div>
    );
};
