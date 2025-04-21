import "./ProductCard.css";
import Image from "next/image";
import Link from "next/link";

interface Product {
    image: string;
    title: string;
    price: number;
    productLink: string;
    labelButton: string;
}

export default function ProductCard({ image, title, price, productLink, labelButton }: Product) {
    const formatCurrencyBRL = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    return (
        <div className="product-card">
            <Link href={productLink}>
                <Image
                    width={1000}
                    height={1000}
                    src={image}
                    alt={title}
                    priority
                />
            </Link>

            <div className="px-5 pb-5">
                <Link href={productLink}>
                    <h5 className="product-title">{title}</h5>
                </Link>
                <span className="product-price">{formatCurrencyBRL(price)}</span>
            </div>

            <Link href={productLink} className="add-cart-button">
                {labelButton}
            </Link>
        </div>
    );
};