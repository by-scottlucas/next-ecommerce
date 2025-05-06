'use client';

import './ProductInfo.css';

import QuantitySelector from '@/app/components/QuantitySelector/QuantitySelector';
import { useCart } from '@/app/contexts/CartContext';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { formatCurrencyBRL } from '@/app/utils/utils';
import { toast } from 'sonner';

import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import ColorSelector from '../ColorSelector/ColorSelector';
import { ProductInfoProps } from './models/product-info';

export default function ProductInfo({
    product,
    isFavorite,
    selectedColor,
    quantity,
    setIsFavorite,
    setSelectedColor,
    setQuantity,
}: ProductInfoProps) {
    const { translations } = useLanguage();
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            quantity,
            stock: product.stock!,
        });

        toast.success(`${product.name} adicionado ao carrinho.`);
    };

    const handleAddToFavorites = () => {
        const newValue = !isFavorite;
        setIsFavorite(newValue);

        toast.success(
            `${product.name} ${newValue ? 'adicionado aos' : 'removido dos'} favoritos.`
        );
    };

    return (
        <div className="product-info">
            <div>
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">{formatCurrencyBRL(product.price)}</p>
                {product.originalPrice && (
                    <p className="line-through">
                        {formatCurrencyBRL(product.originalPrice)}
                    </p>
                )}
                <p className="product-description">{product.description}</p>
            </div>

            {product.colors && (
                <ColorSelector
                    colors={product.colors}
                    selectedColor={selectedColor}
                    onColorSelect={setSelectedColor}
                />
            )}

            <div className="product-info-bottom">
                <div className="quantity-box">
                    <div className="stock-info">
                        <h3 className="stock-label">{translations.productPage.quantityLabel}</h3>
                        <span className="stock-quantity">
                            ({product.stock ?? 0} disponiveis)
                        </span>
                    </div>

                    <QuantitySelector stock={product.stock ?? 0} onChange={setQuantity} />
                </div>

                <div className="buttons-group mt-4">
                    <button className="add-to-cart-button product-button" onClick={handleAddToCart}>
                        <i className="bi bi-cart-plus text-lg"></i>
                        {translations.productPage.addToCartButton}
                    </button>
                    <button
                        className={`product-button ${isFavorite ? 'favorited' : 'add-to-favorites-button'}`}
                        onClick={handleAddToFavorites}
                    >
                        <i className="bi bi-heart text-lg"></i>
                        {translations.productPage.addToFavoriteButton}
                    </button>
                </div>

                <AdditionalInfo />
            </div>
        </div>
    );
}
