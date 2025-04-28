'use client';

import Image from "next/image";

import "./BannerCarousel.css";

import { useCallback, useEffect, useRef, useState } from 'react';

interface Slide {
    image: string;
    label?: string;
}

interface BannerCarouselProps {
    slidesData: Slide[];
}

export default function BannerCarousel({ slidesData }: BannerCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startAutoSlide = useCallback(() => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = window.setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 5000);
    }, [slidesData.length]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, [startAutoSlide]);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
        startAutoSlide();
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
        startAutoSlide();
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
        startAutoSlide();
    };

    return (
        <div className="carousel-container">
            <div className="carousel-image-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="carousel-image-box">
                        <Image
                            width={1900}
                            height={580}
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            <div className="carousel-indicators-container">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                        className={`carousel-indicators-button ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>

            <button type="button" onClick={prevSlide} className="carousel-control-button left-3 md:left-10" aria-label="Prev Button">
                <span className="carousel-control-content">
                    <i className="bi bi-chevron-left"></i>
                </span>
            </button>

            <button type="button" onClick={nextSlide} className="carousel-control-button right-3 md:right-10" aria-label="Next Button">
                <span className="carousel-control-content">
                    <i className="bi bi-chevron-right"></i>
                </span>
            </button>
        </div>
    );
}
