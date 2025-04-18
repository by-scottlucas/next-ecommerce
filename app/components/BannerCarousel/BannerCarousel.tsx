'use client';

import Image from "next/image";

import "./BannerCarousel.css";

import { useEffect, useRef, useState } from 'react';

interface Slide {
    image: string;
    label?: string;
}

interface BannerCarouselProps {
    slidesData: Slide[];
}

export default function BannerCarousel({ slidesData }: BannerCarouselProps) {
    const slides = slidesData;
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const startAutoSlide = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = window.setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
    };

    useEffect(() => {
        startAutoSlide();

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
        startAutoSlide();
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        startAutoSlide();
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        startAutoSlide();
    };

    return (
        <div className="carousel-container">
            <div className="carousel-image-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-image-box">
                        <Image
                            width={1900}
                            height={580}
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            priority
                        />
                    </div>
                ))}
            </div>

            <div className="carousel-indicators-container">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                        className={`carousel-indicators-button ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>

            <button onClick={prevSlide} className="carousel-control-button left-3 md:left-10" aria-label="Prev Button">
                <span className="carousel-control-content">
                    <i className="bi bi-chevron-left"></i>
                </span>
            </button>

            <button onClick={nextSlide} className="carousel-control-button right-3 md:right-10" aria-label="Next Button">
                <span className="carousel-control-content">
                    <i className="bi bi-chevron-right"></i>
                </span>
            </button>
        </div>
    );
}
