'use client';

import './ProductPage.css';

import Header from '@/app/components/Header/Header';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useProduct } from '@/app/hooks/useProduct';
import { useProductState } from '@/app/hooks/useProductState';

import ProductDetailsTabs from './components/ProductDetailsTabs/ProductDetailsTabs';
import { ProductImageGallery } from './components/ProductImageGallery/ProductImageGallery';
import ProductInfo from './components/ProductInfo/ProductInfo';

export default function ProductPage() {
    const { translations } = useLanguage();
    const product = useProduct();
    const {
        isFavorite, setIsFavorite,
        selectedImage, setSelectedImage,
        selectedColor, setSelectedColor,
        quantity, setQuantity
    } = useProductState(product);

    return (
        <>
            <Header />
            {!product ? (
                <div className="product-not-found">
                    <h1>{translations.productPage.productNotFound}</h1>
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

                            <ProductInfo
                                product={product}
                                isFavorite={isFavorite}
                                selectedColor={selectedColor}
                                quantity={quantity}
                                setIsFavorite={setIsFavorite}
                                setSelectedColor={setSelectedColor}
                                setQuantity={setQuantity}
                            />
                        </div>

                        <ProductDetailsTabs product={product} />
                    </main>
                </div>
            )}
        </>
    );
}