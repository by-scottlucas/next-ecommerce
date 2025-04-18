import Banner from './components/Banner/Banner';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import ProductsCarousel from './components/ProductsCarousel/ProductsCarousel';
import data from './data/locales/pt-BR.json';

export default function Home() {
  const locale = "pt-BR";
  return (
    <main className="bg-white">
      <Header locale={locale} />
      <BannerCarousel slidesData={data.bannerCarousel.slides} />
      <Categories cardsData={data.categoriesCards} locale={locale} />
      <ProductsCarousel
        locale={locale}
        sectionKey='productsCarousel'
        products={data.productsCarousel.products}
      />
      <Banner image={data.bannerImage.image} label={data.bannerImage.label} />
      <ProductsCarousel
        locale={locale}
        sectionKey="headphones"
        products={data.headphones.products}
      />
    </main>
  );
}
