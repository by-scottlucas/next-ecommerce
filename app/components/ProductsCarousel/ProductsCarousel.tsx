"use client";

import './ProductsCarousel.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { getTranslation } from '../../utils/i18n';

interface Product {
  image: string;
  title: string;
  price: number;
}

interface ProductsCarouselProps {
  products: Product[];
  locale: string;
  sectionKey: string;
}

export default function ProductsCarousel({ products, locale, sectionKey }: ProductsCarouselProps) {
  const translations: any = getTranslation(locale);
  const sectionTranslations = translations[sectionKey];

  const [itemsToShow, setItemsToShow] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const headerTitle = sectionTranslations?.headerTitle;
  const headerButton = sectionTranslations?.headerButton;
  const addCartButton = sectionTranslations?.addCartButton;

  const updateItemsToShow = () => {
    let count = 1;

    if (window.innerWidth < 768) {
      count = 1;
    } else if (window.innerWidth < 1024) {
      count = 2;
    } else {
      count = 4;
    }

    // Nunca mostrar mais cards do que produtos disponíveis
    setItemsToShow(Math.min(count, products.length));
    setCardIndex(0); // resetar índice
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

  const formatCurrencyBRL = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="products-carousel-container">
      <div className="container-header">
        <h2 className="container-title">{headerTitle}</h2>
        <a href="#" className="container-button">{headerButton}</a>
      </div>

      <div className="carousel-box relative">
        <button onClick={goToPrev} className="carousel-arrow left">
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="products-carousel-wrapper">
          <div
            className="products-carousel-content"
            style={{
              transform: `translateX(-${(100 / products.length) * cardIndex}%)`,
              width: `${(products.length * 100) / itemsToShow}%`,
            }}
          >
            {products.map((card, index) => (
              <div key={index} className="product-card">
                <Link href="#">
                  <Image
                    width={1000}
                    height={1000}
                    src={card.image}
                    alt={card.title}
                    priority
                  />
                </Link>

                <div className="px-5 pb-5">
                  <Link href="#">
                    <h5 className="product-title">{card.title}</h5>
                  </Link>
                  <span className="product-price">{formatCurrencyBRL(card.price)}</span>
                </div>

                <Link href="#" className="add-cart-button">
                  {addCartButton}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToNext} className="carousel-arrow right">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      {maxCardIndex > 0 && (
        <div className="carousel-indicators">
          {Array.from({ length: maxCardIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`indicator-circle ${cardIndex === index ? "active" : "deactive"}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}