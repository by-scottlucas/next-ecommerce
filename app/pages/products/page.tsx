'use client';

import './ProductsPage.css';

import Header from '@/app/components/Header/Header';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import ProductFilters from '@/app/components/ProductFilters/ProductFilters';
import Searchbar from '@/app/components/Searchbar/Searchbar';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useFilteredProducts } from '@/app/hooks/useFilteredProducts';
import { prepareProductData } from '@/app/utils/prepareProductData';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
    const { translations } = useLanguage();
    const products = translations.productsPage.products;

    const { uniqueColors, brands, categories, prices } = prepareProductData(products);
    const highestPrice = prices[prices.length - 1] || 0;

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [maxPrice, setMaxPrice] = useState<number>(highestPrice);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProducts = useFilteredProducts(products, {
        category: selectedCategory,
        brand: selectedBrand,
        color: selectedColor,
        maxPrice,
        searchTerm,
    });

    useEffect(() => {
        setSelectedCategory(null);
        setSelectedBrand(null);
        setSelectedColor(null);
        setMaxPrice(highestPrice);
    }, [translations]);

    return (
        <div className="products-container">
            <Header />

            <div className="content-page">
                <div className="products-header">
                    <h2 className="products-header-title">
                        {translations.productsPage.titlePage}
                    </h2>
                    <Searchbar setSearchTerm={setSearchTerm} />
                </div>

                <div className="products-content">
                    <ProductFilters
                        colors={uniqueColors}
                        brands={brands}
                        categories={categories}
                        prices={prices}
                        products={products}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                    />

                    {filteredProducts.length > 0 ? (
                        <section className="products-cards">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </section>
                    ) : (
                        <div className="not-found-container">
                            <span className="text-black">
                                {translations.productsPage.productsNotFound}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
