import { Color, ProductProps } from "./Product";

export interface ProductFiltersProps {
    colors: Color[];
    brands: string[];
    categories: string[];
    prices: number[];
    products: ProductProps[];
    selectedCategory: string | null;
    setSelectedCategory: (value: string | null) => void;
    selectedBrand: string | null;
    setSelectedBrand: (value: string | null) => void;
    selectedColor: string | null;
    setSelectedColor: (value: string | null) => void;
    maxPrice: number;
    setMaxPrice: (value: number) => void;
}