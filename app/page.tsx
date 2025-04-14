import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <main className="bg-white">
      <Header locale={"pt-BR"} />
      <BannerCarousel />
      <Categories />
    </main>
  );
}
