"use client";

import './ProductsPage.css';

import Header from '@/app/components/Header/Header';
import LanguageSelector from '@/app/components/LanguageSelector/LanguageSelector';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import ProductFilters from '@/app/components/ProductFilters/ProductFilters';
import Searchbar from '@/app/components/Searchbar/Searchbar';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const getUniqueValues = (array: any[], key: string) => {
    return [...new Set(array.map(item => item[key]))];
};

export default function ProductsPage() {
    const { translations } = useLanguage();
    const products = translations.productsPage.products;

    const colors = getUniqueValues(products, "color");
    const brands = getUniqueValues(products, "brand");
    const categories = getUniqueValues(products, "category");
    const prices = [...products.map(p => p.price)].sort((a, b) => a - b);

    const colorMap: Record<string, string> = translations.productsPage.colorMap;
    const colorLabels: Record<string, string> = translations.productsPage.colorLabels;

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [maxPrice, setMaxPrice] = useState<number>(prices[prices.length - 1]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const filterProps = {
        colors,
        brands,
        prices,
        categories,
        colorMap,
        colorLabels,
        products,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        selectedColor,
        setSelectedColor,
        maxPrice,
        setMaxPrice,
    };

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());

        return (
            matchesSearchTerm &&
            (!selectedCategory || product.category === selectedCategory) &&
            (!selectedBrand || product.brand === selectedBrand) &&
            (!selectedColor || product.color === selectedColor) &&
            product.price <= maxPrice
        );
    });

    useEffect(() => {
        setSelectedCategory(null);
        setSelectedBrand(null);
        setSelectedColor(null);
        setMaxPrice(prices[prices.length - 1]);
    }, [translations]);

    return (
        <div className="products-container">
            <Header />
            <LanguageSelector />
            <div className="content-page">
                <div className="products-header">
                    <h2 className="products-header-title">
                        {translations.productsPage.titlePage}
                    </h2>
                    <Searchbar setSearchTerm={setSearchTerm} />
                </div>

                <div className="products-content">
                    <ProductFilters {...filterProps} />

                    {filteredProducts.length > 0 ? (
                        <section className="products-cards">
                            {filteredProducts.map((product, index) => (
                                <ProductCard key={index} {...product} />
                            ))}
                        </section>
                    ) : (
                        <div className='not-found-container'>
                            <span className='text-black'>
                                Nenhum produto encontrado
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
