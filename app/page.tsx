"use client";

import Banner from './components/Banner/Banner';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Benefits from './components/Benefits/Benefits';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import ProductsCarousel from './components/ProductsCarousel/ProductsCarousel';
import { useLanguage } from './contexts/LanguageContext';

export default function HomePage() {
  const { locale, translations: data } = useLanguage();

  return (
    <main className="bg-gray-50">
      <LanguageSelector />
      <Header />
      <BannerCarousel slidesData={data.bannerCarousel.slides} />
      <Categories cardsData={data.categoriesCards} />
      <ProductsCarousel sectionKey='productsCarousel' products={data.productsCarousel.products} />

      <div className='banner-container'>
        <Banner width={1280} height={720} image={data.bannerImage.image} label={data.bannerImage.label} />
      </div>

      <ProductsCarousel sectionKey="headphones" products={data.headphones.products} />

      <div className='banner-container flex flex-col md:flex-row md:justify-center gap-7'>
        {data.banners.map((banner, index) => (
          <div key={index} className='w-full'>
            <Banner width={550} height={365} image={banner.image} label={banner.label} />
          </div>
        ))}
      </div>

      <Benefits benefitsProps={data.benefitsCards} />
      <Footer footerData={data.footer} />
    </main>
  );
}
