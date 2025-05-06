import { useState } from "react";

export function useProductState(product: any) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
    const [quantity, setQuantity] = useState(1);

    return {
        isFavorite, setIsFavorite,
        selectedImage, setSelectedImage,
        selectedColor, setSelectedColor,
        quantity, setQuantity,
    };
}