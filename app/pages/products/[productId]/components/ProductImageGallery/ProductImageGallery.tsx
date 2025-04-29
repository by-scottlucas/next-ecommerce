import "./ProductImageGallery.css";

export function ProductImageGallery({ images, selectedImage, onSelect }: {
    images: string[];
    selectedImage: number;
    onSelect: (index: number) => void;
}) {
    return (
        <div className="product-image-grid">
            <div className="product-main-image">
                <img src={images[selectedImage]} alt={`Imagem ${selectedImage + 1}`} className="w-full h-full object-cover" />
            </div>
            <div className="thumbnails-grid">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={`product-thumbnail-button ${selectedImage === index ? "product-thumbnail-selected" : ""}`}
                        title={`Ver imagem ${index + 1}`}
                    >
                        <img src={image} alt={`Miniatura ${index + 1}`} className="object-cover w-full h-full" />
                    </button>
                ))}
            </div>
        </div>
    );
}
