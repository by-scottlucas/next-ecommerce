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
      <ProductsCarousel products={data.productsCarousel.bestSellers} locale={locale} />
    </main>
  );
}
