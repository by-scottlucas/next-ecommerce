import "./ProductFilters.css";

type ProductFiltersProps = {
    categories: string[];
    colors: string[];
    brands: string[];
    colorMap: Record<string, string>;
};

export default function ProductFilters({ categories, colors, brands, colorMap }: ProductFiltersProps) {
    return (
        <aside className="sidebar">
            <div className="filters-card">
                <h5 className="filters-card-title">Filtros</h5>

                <div className="filter-box">
                    <h6 className="filter-title">Categoria</h6>
                    <div className="filter-options">
                        {categories.map((category) => (
                            <label key={category} className="block">
                                <input type="checkbox" className="checkbox-input" />
                                {category}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="filter-box">
                    <h6 className="filter-title">Cor</h6>
                    <div className="flex gap-2">
                        {colors.map((color) => (
                            <span
                                key={color}
                                className={`color-input ${colorMap[color] || "bg-gray-400"}`}
                                title={color.charAt(0).toUpperCase() + color.slice(1)}
                            ></span>
                        ))}
                    </div>
                </div>

                <div className="filter-box">
                    <h6 className="filter-title">Marca</h6>
                    <div className="filter-options">
                        {brands.map((brand) => (
                            <label key={brand} className="block">
                                <input type="checkbox" className="checkbox-input" />
                                {brand}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="filter-box">
                    <h6 className="filter-title">Preço</h6>
                    <input type="range" min="0" max="500" className="w-full" />
                    <div className="text-xs text-gray-500 mt-1">Até R$500</div>
                </div>

                <button className="apply-filter-btn">Aplicar Filtros</button>
            </div>
        </aside>
    );
}
