import "./ProductCard.css";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    image: string;
    title: string;
    price: number;
    link: string;
    labelButton: string;
}

export default function ProductCard(props: ProductCardProps) {
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
                    src={props.image}
                    alt={props.title}
                    priority
                />
            </Link>

            <div className="px-5 pb-5">
                <Link href={String(props.link)}>
                    <h5 className="product-title">{props.title}</h5>
                </Link>
                <span className="product-price">
                    {formatCurrencyBRL(props.price)}
                </span>
            </div>

            <Link href={String(props.link)} className="add-cart-button">
                {props.labelButton}
            </Link>
        </div>
    );
};