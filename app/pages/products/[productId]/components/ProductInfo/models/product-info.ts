import { Color, ProductProps } from "@/app/models/Product";

export interface ProductInfoProps {
    product: ProductProps;
    isFavorite: boolean;
    selectedColor: Color | null;
    quantity: number;
    setIsFavorite: (value: boolean) => void;
    setSelectedColor: (color: Color) => void;
    setQuantity: (quantity: number) => void;
}