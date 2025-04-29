"use client";
import './ProductPage.css';

import Header from '@/app/components/Header/Header';
import { useProduct } from '@/app/hooks/useProduct';
import { useState } from 'react';

import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import ColorSelector from './components/ColorSelector/ColorSelector';
import ProductDetailsTabs from './components/ProductDetailsTabs/ProductDetailsTabs';
import { ProductImageGallery } from './components/ProductImageGallery/ProductImageGallery';
import QuantitySelector from './components/QuantitySelector/QuantitySelector';

export default function ProductPage() {
    const product = useProduct();
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);

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

                                        <QuantitySelector stock={product.stock ?? 0} />
                                    </div>

                                    <div className="buttons-group mt-4">
                                        <button className="add-to-cart-button product-button">
                                            <i className="bi bi-cart-plus text-lg"></i>
                                            Adicionar ao Carrinho
                                        </button>
                                        <button className="add-to-favorites-button product-button">
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
