'use client';

import './ProductsCarousel.css';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  image: string;
  title: string;
  price: number;
  link: string;
  labelButton: string;
}

interface ProductsCarouselProps {
  products: Product[];
  sectionKey: string;
}

export default function ProductsCarousel({ products, sectionKey }: ProductsCarouselProps) {
  const { translations }: any = useLanguage();
  const sectionTranslations = translations[sectionKey];

  const [itemsToShow, setItemsToShow] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const headerTitle = sectionTranslations?.headerTitle;
  const headerButton = sectionTranslations?.headerButton;
  const labelButton = sectionTranslations?.labelButton;

  const updateItemsToShow = () => {
    let count = 1;

    if (window.innerWidth < 768) {
      count = 1;
    } else if (window.innerWidth < 1024) {
      count = 2;
    } else {
      count = 4;
    }

    setItemsToShow(Math.min(count, products.length));
    setCardIndex(0);
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, [products.length]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [itemsToShow]);

  const maxCardIndex = Math.max(0, products.length - itemsToShow);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      setCardIndex((prev) => (prev < maxCardIndex ? prev + 1 : 0));
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  const goToIndex = (index: number) => {
    setCardIndex(index);
    resetAutoSlide();
  };

  const goToPrev = () => {
    setCardIndex((prev) => (prev > 0 ? prev - 1 : maxCardIndex));
    resetAutoSlide();
  };

  const goToNext = () => {
    setCardIndex((prev) => (prev < maxCardIndex ? prev + 1 : 0));
    resetAutoSlide();
  };

  return (
    <div className="products-carousel-container">
      <div className="container-header">
        <h2 className="container-title">{headerTitle}</h2>
        <a href="#" className="container-button">{headerButton}</a>
      </div>

      <div className="carousel-box relative">
        <button onClick={goToPrev} className="carousel-arrow left" aria-label="Prev Button">
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="products-carousel-wrapper">
          <div className="products-carousel-content"
            style={{
              transform: `translateX(-${(100 / products.length) * cardIndex}%)`,
              width: `${(products.length * 100) / itemsToShow}%`,
            }}
          >
            {products.map((product, index) => (
              <ProductCard key={index}{...product} />
            ))}
          </div>
        </div>

        <button onClick={goToNext} className="carousel-arrow right" aria-label="Next Button">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      {maxCardIndex > 0 && (
        <div className="carousel-indicators">
          {Array.from({ length: maxCardIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`indicator-circle ${cardIndex === index ? "active" : "deactive"}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
