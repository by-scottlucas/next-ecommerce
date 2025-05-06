import './ProductImageGallery.css';

import { clsx } from 'clsx';

import { ProductImageGalleryProps } from './models/product-image-gallery';

export function ProductImageGallery({ images, selectedImage, onSelect }: ProductImageGalleryProps) {
    return (
        <div className="product-image-grid">
            <div className="product-main-image">
                <img
                    src={images[selectedImage]}
                    alt={`Imagem ${selectedImage + 1}`}
                    className="product-thumbnail-image"
                />
            </div>

            <div className="thumbnails-grid">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => onSelect(index)}
                        className={clsx("product-thumbnail-button", {
                            "product-thumbnail-selected": selectedImage === index,
                        })}
                        title={`Ver imagem ${index + 1}`}
                    >
                        <img
                            src={image}
                            alt={`Miniatura ${index + 1}`}
                            className="product-thumbnail-image"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
