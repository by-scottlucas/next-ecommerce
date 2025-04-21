import './ProductsPage.css';

import Header from '@/app/components/Header/Header';
import ProductCard from '@/app/components/ProductCard/ProductCard';
import ProductFilters from '@/app/components/ProductFilters/ProductFilters';
import Searchbar from '@/app/components/Searchbar/Searchbar';
import { getTranslation } from '@/app/utils/i18n';

import data from '../../data/locales/pt-BR.json';

const products = data.productsPage.products;

const getUniqueValues = (array: any[], key: string) => {
    return [...new Set(array.map(item => item[key]))];
};

export default function ProductsPage() {
    const locale = "pt-BR";
    const translations = getTranslation(locale);

    const colors = getUniqueValues(products, "color");
    const brands = getUniqueValues(products, "brand");
    const categories = getUniqueValues(products, "category");

    const colorMap: Record<string, string> = {
        preto: "bg-black",
        branco: "bg-white",
        azul: "bg-blue-500",
        vermelho: "bg-red-500",
        verde: "bg-green-500",
        laranja: "bg-orange-500",
    };

    return (
        <div className="products-container">
            <Header locale={locale} />
            <div className="content-page">
                <div className="products-header">
                    <h2 className="products-header-title">
                        {translations.productsPage.titlePage}
                    </h2>
                    <Searchbar />
                </div>

                <div className="products-content">
                    <ProductFilters
                        categories={categories}
                        colors={colors}
                        brands={brands}
                        colorMap={colorMap}
                    />

                    <section className="products-cards">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                productLink={"#"}
                                labelButton={"Adicionar ao carrinho"}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}
