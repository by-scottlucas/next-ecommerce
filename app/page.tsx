"use client";

import Banner from './components/Banner/Banner';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import BannersSection from './components/BannersSection/BannersSection';
import Benefits from './components/Benefits/Benefits';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductsCarousel from './components/ProductsCarousel/ProductsCarousel';
import { useLanguage } from './contexts/LanguageContext';

export default function HomePage() {
  const { translations: data } = useLanguage();

  return (
    <main className="bg-gray-50">
      <Header />
      <BannerCarousel slidesData={data.bannerCarousel.slides} />
      <Categories categoriesData={data.categoriesCards} />

      <ProductsCarousel
        sectionKey={data.productsCarousel.sectionKey}
        products={data.productsCarousel.products}
      />

      <section className="banner-section">
        <Banner
          image={data.bannerImage.image}
          label={data.bannerImage.label}
        />
      </section>

      <ProductsCarousel
        sectionKey={data.headphones.sectionKey}
        products={data.headphones.products}
      />

      <section className='banner-section banners-section'>
        <BannersSection bannersData={data.banners} />
      </section>

      <Benefits benefitsData={data.benefitsCards} />
      <Footer footerData={data.footer} />
    </main>
  );
}
