import { useState } from "react";
import "./ProductFilters.css";

type Product = {
    category: string;
    brand: string;
    color: string;
    price: number;
};

type ProductFiltersProps = {
    colors: string[];
    brands: string[];
    categories: string[];
    colorMap: Record<string, string>;
    prices: number[];
    products: Product[];
    selectedCategory: string | null;
    setSelectedCategory: (value: string | null) => void;
    selectedBrand: string | null;
    setSelectedBrand: (value: string | null) => void;
    selectedColor: string | null;
    setSelectedColor: (value: string | null) => void;
    maxPrice: number;
    setMaxPrice: (value: number) => void;
};

export default function ProductFilters(props: ProductFiltersProps) {
    const minPrice = props.prices[0];
    const [tempMaxPrice, setTempMaxPrice] = useState(props.maxPrice);

    const applyFilters = () => {
        props.setMaxPrice(tempMaxPrice);
    };

    return (
        <aside className="sidebar">
            <div className="filters-card">
                <h5 className="filters-card-title">Filtros</h5>

                <div className="filter-box">
                    <h6 className="filter-title">Categoria</h6>
                    <div className="filter-options">
                        <label className={`filter-item ${props.selectedCategory === null ? "selected" : ""}`} onClick={() => props.setSelectedCategory(null)}>
                            Todos ({props.products.length})
                        </label>
                        {props.categories.map(category => {
                            const count = props.products.filter(p => p.category === category).length;
                            return (
                                <label
                                    key={category}
                                    className={`filter-item ${props.selectedCategory === category ? "selected" : ""}`}
                                    onClick={() => props.setSelectedCategory(props.selectedCategory === category ? null : category)}
                                >
                                    {category} ({count})
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className="filter-box">
                    <h6 className="filter-title">Cor</h6>
                    <div className="flex gap-2 items-center flex-wrap">
                        {props.colors.map(color => (
                            <span
                                key={color}
                                title={color}
                                className={`color-input ${props.colorMap[color]} ${props.selectedColor === color ? "selected" : ""}`}
                                onClick={() => props.setSelectedColor(props.selectedColor === color ? null : color)}
                            ></span>
                        ))}
                    </div>
                </div>

                <div className="filter-box">
                    <h6 className="filter-title">Marca</h6>
                    <div className="filter-options">
                        <label
                            className={`filter-item ${props.selectedBrand === null ? "selected" : ""}`}
                            onClick={() => props.setSelectedBrand(null)}
                        >
                            Todas ({props.products.length})
                        </label>
                        {props.brands.map(brand => {
                            const count = props.products.filter(p => p.brand === brand).length;
                            return (
                                <label
                                    key={brand}
                                    className={`filter-item ${props.selectedBrand === brand ? "selected" : ""}`}
                                    onClick={() => props.setSelectedBrand(props.selectedBrand === brand ? null : brand)}
                                >
                                    {brand} ({count})
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className="filter-box">
                    <h6 className="filter-title">Preço</h6>
                    <input
                        type="range"
                        min={minPrice}
                        max={props.prices[props.prices.length - 1]}
                        value={tempMaxPrice}
                        onChange={(e) => setTempMaxPrice(Number(e.target.value))}
                        className="input-price"
                    />
                    <div className="text-sm text-gray-500 mt-1">
                        Até R$ {tempMaxPrice.toFixed(2)}
                    </div>
                    <button onClick={applyFilters} className="apply-filter-btn">
                        Aplicar Filtros
                    </button>
                </div>
            </div>
        </aside>
    );
}
