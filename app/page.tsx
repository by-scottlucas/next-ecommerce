import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <main className="bg-white h-dvh">
      <Header locale={"pt-BR"} />
      <BannerCarousel />
    </main>
  );
}
