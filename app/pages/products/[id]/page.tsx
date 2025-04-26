"use client";
import Header from "@/app/components/Header/Header";
import "./ProductPage.css";
import { useState } from "react";
import QuantitySelector from "@/app/components/QuantitySelector/QuantitySelector";

export default function ProductPage() {
    const product = {
        name: "Professional Laptop XPS",
        price: "$1,999",
        description:
            "Experience unparalleled performance with our latest Professional Laptop XPS. Featuring a stunning 4K display, powerful processor, and all-day battery life. Perfect for professionals who demand the best in portability and performance.",
        images: [
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
        ],
        specs: [
            { label: "Processor", value: "Intel Core i9" },
            { label: "RAM", value: "32GB DDR4" },
            { label: "Storage", value: "1TB NVMe SSD" },
            { label: "Display", value: '15.6" 4K UHD' },
            { label: "Graphics", value: "NVIDIA RTX 4080" },
            { label: "Battery", value: "Up to 12 hours" },
        ],
    };

    const [selectedImage, setSelectedImage] = useState(0);

    const handleAddToCart = () => { };

    return (
        <>
            <Header />
            <div className="product-container">
                <main className="product-content">
                    <div className="product-grid">
                        <div className="product-image-grid">
                            <div className="product-main-image">
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="thumbnails-grid">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`product-thumbnail-button ${selectedImage === index ? "product-thumbnail-selected" : ""}`}
                                        title={`View image ${index + 1}`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="object-cover w-full h-full"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="product-info">
                            <div>
                                <h1 className="product-title">{product.name}</h1>
                                <p className="product-price">{product.price}</p>
                                <p className="product-description">{product.description}</p>
                            </div>

                            <div className="product-info-bottom">
                                <div className="quantity-box">
                                    <div className="stock-info">
                                        <h3 className="stock-label">Quantidade</h3>
                                        <span className="stock-quantity">(15 disponíveis)</span>
                                    </div>

                                    <QuantitySelector />
                                </div>

                                <div className="buttons-group mt-4">
                                    <button onClick={handleAddToCart} className="add-to-cart-button product-button">
                                        <i className="bi bi-cart-plus text-lg"></i>
                                        Adicionar ao Carrinho
                                    </button>

                                    <button onClick={handleAddToCart} className="add-to-favorites-button product-button">
                                        <i className="bi bi-heart text-lg"></i>
                                        Adicionar aos Favoritos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};