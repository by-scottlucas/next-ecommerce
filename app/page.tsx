import Banner from './components/Banner/Banner';
import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Benefits from './components/Benefits/Benefits';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductsCarousel from './components/ProductsCarousel/ProductsCarousel';
import data from './data/locales/pt-BR.json';

export default function Home() {
  const locale = "pt-BR";
  return (
    <main className="bg-white">
      <Header locale={locale} />
      <BannerCarousel
        slidesData={data.bannerCarousel.slides}
      />
      <Categories
        locale={locale}
        cardsData={data.categoriesCards}
      />
      <ProductsCarousel
        locale={locale}
        sectionKey='productsCarousel'
        products={data.productsCarousel.products}
      />
      <div className='banner-container'>
        <Banner
          width={1280}
          height={720}
          image={data.bannerImage.image}
          label={data.bannerImage.label}
        />
      </div>
      <ProductsCarousel
        locale={locale}
        sectionKey="headphones"
        products={data.headphones.products}
      />
      <div className='banner-container flex flex-col md:flex-row md:justify-center gap-7'>
        {data.banners.map((banner, index) => (
          <div key={index} className='w-full'>
            <Banner
              width={550}
              height={365}
              image={banner.image}
              label={banner.label}
            />
          </div>
        ))}
      </div>
      <Benefits locale={locale} benefitsProps={data.benefitsCards} />
      <Footer locale={locale} footerData={data.footer[0]} />
    </main>
  );
}
