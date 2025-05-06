export interface ProductImageGalleryProps {
    images: string[];
    selectedImage: number;
    onSelect: (index: number) => void;
}