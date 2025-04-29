'use client';

import './ProductsPage.css';

import Header from '@/app/components/Header/Header';
import LanguageSelector from '@/app/components/LanguageSelector/LanguageSelector';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import ProductFilters from '@/app/components/ProductFilters/ProductFilters';
import Searchbar from '@/app/components/Searchbar/Searchbar';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Color, ProductProps } from '@/app/models/Product';
import { getUniqueColors, getUniqueValues, parsePrice } from '@/app/utils/products.utils';
import { useEffect, useState } from 'react';


export default function ProductsPage() {
    const { translations } = useLanguage();
    const productsData: ProductProps[] = translations?.productsPage?.products || [];

    const uniqueColors: Color[] = getUniqueColors(productsData);
    const brands: string[] = getUniqueValues(productsData, 'brand').filter(Boolean) as string[];
    const categories: string[] = getUniqueValues(productsData, 'category').filter(Boolean) as string[];

    const prices: number[] = productsData
        .map(p => parsePrice(p.price))
        .filter((price): price is number => typeof price === 'number')
        .sort((a, b) => a - b);

    const colorMap: Record<string, string> = translations?.productsPage?.colorMap || {};

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [maxPrice, setMaxPrice] = useState<number>(prices[prices.length - 1] || 0);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filterProps = {
        colors: uniqueColors,
        brands,
        categories,
        colorMap,
        prices,
        products: productsData,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        selectedColor,
        setSelectedColor,
        maxPrice,
        setMaxPrice,
    };

    const filteredProducts = productsData.filter(product => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const productPrice = parsePrice(product.price);
        const productColorName = product.colors[0]?.name;

        return (
            matchesSearchTerm &&
            (!selectedCategory || product.category === selectedCategory) &&
            (!selectedBrand || product.brand === selectedBrand) &&
            (!selectedColor || productColorName === selectedColor) &&
            productPrice <= maxPrice
        );
    });

    useEffect(() => {
        if (translations?.productsPage) {
            setSelectedCategory(null);
            setSelectedBrand(null);
            setSelectedColor(null);

            const currentPrices = translations.productsPage.products
                .map(p => parsePrice(p.price))
                .filter((price): price is number => typeof price === 'number')
                .sort((a, b) => a - b);

            setMaxPrice(currentPrices[currentPrices.length - 1] || 0);
        }
    }, [translations]);

    return (
        <div className="products-container">
            <Header />
            <LanguageSelector />
            <div className="content-page">
                <div className="products-header">
                    <h2 className="products-header-title">
                        {translations?.productsPage?.titlePage}
                    </h2>
                    <Searchbar setSearchTerm={setSearchTerm} />
                </div>

                <div className="products-content">
                    <ProductFilters {...filterProps} />

                    {filteredProducts.length > 0 ? (
                        <section className="products-cards">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </section>
                    ) : (
                        <div className="not-found-container">
                            <span className="text-black">Nenhum produto encontrado</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
