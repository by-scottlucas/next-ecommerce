"use client";

import './ProductPage.css';
import { toast } from "sonner"
import Header from '@/app/components/Header/Header';
import { useProduct } from '@/app/hooks/useProduct';
import { useState } from 'react';

import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import ColorSelector from './components/ColorSelector/ColorSelector';
import ProductDetailsTabs from './components/ProductDetailsTabs/ProductDetailsTabs';
import { ProductImageGallery } from './components/ProductImageGallery/ProductImageGallery';
import QuantitySelector from '../../../components/QuantitySelector/QuantitySelector';
import { useCart } from '@/app/contexts/CartContext';

export default function ProductPage() {
    const product = useProduct();
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    const handleAddToCart = () => {
        if (!product) return;

        addItem({
            id: product.id,
            name: product.name,
            image: product.images[0],
            price: product.price,
            quantity,
            stock: product.stock as number,
        });

        toast.success(`${product.name} adicionado ao carrinho.`);
    };

    const handleAddToFavorites = () => {
        const newValue = !isFavorite;
        setIsFavorite(newValue);

        if (newValue) {
            toast.success(`${product!.name} adicionado aos favoritos.`);
        } else {
            toast.success(`${product!.name} removido dos favoritos.`);
        }
    };


    return (
        <>
            <Header />

            {!product ? (
                <div className="product-not-found">
                    <h1>Produto não encontrado</h1>
                </div>
            ) : (
                <div className="product-container">
                    <main className="product-content">
                        <div className="product-grid">
                            <ProductImageGallery
                                images={product.images}
                                selectedImage={selectedImage}
                                onSelect={setSelectedImage}
                            />

                            <div className="product-info">
                                <div>
                                    <h1 className="product-title">{product.name}</h1>
                                    <p className="product-price">{product.price}</p>
                                    {product.originalPrice && <p className="line-through">{product.originalPrice}</p>}
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
                                            <h3 className="stock-label">Quantidade</h3>
                                            <span className="stock-quantity">({product.stock ?? 0} disponíveis)</span>
                                        </div>

                                        <QuantitySelector
                                            stock={product.stock ?? 0}
                                            onChange={setQuantity}
                                        />
                                    </div>

                                    <div className="buttons-group mt-4">
                                        <button
                                            className="add-to-cart-button product-button"
                                            onClick={handleAddToCart}
                                        >
                                            <i className="bi bi-cart-plus text-lg"></i>
                                            Adicionar ao Carrinho
                                        </button>
                                        <button
                                            className={`product-button ${isFavorite ? 'favorited' : 'add-to-favorites-button'}`}
                                            onClick={handleAddToFavorites}
                                        >
                                            <i className="bi bi-heart text-lg"></i>
                                            Adicionar aos Favoritos
                                        </button>

                                    </div>

                                    <AdditionalInfo />
                                </div>
                            </div>
                        </div>

                        <ProductDetailsTabs product={product} />
                    </main>
                </div>
            )}
        </>
    );
}
