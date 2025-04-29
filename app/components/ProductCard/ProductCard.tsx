import './ProductCard.css';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard(props: ProductProps) {
    const formatCurrencyBRL = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

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
                    {props.price}
                </span>
            </div>

            <Link href={String(props.link)} className="add-cart-button">
                Adicionar ao Carrinho
            </Link>
        </div>
    );
};