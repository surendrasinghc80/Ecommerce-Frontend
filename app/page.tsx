import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";
import CategoryNavigation from "@/components/CategoryNavigation";
import PromotionalBanner from "@/components/PromotionalBanner";
import CarouselItems from "@/components/CarouselItems";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import CategoryAndItems from "@/components/CategoryAndItems";
import Gifts from "@/components/Gifts";

export default function Home() {
  return (
    <div className="flex bg-gray-100 w-full mx-auto flex-col">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-5">
        <HeroSection />
      </div>
      <Featured />
      <CategoryNavigation />
      <PromotionalBanner />
      <CarouselItems />
      <Banner />
      <CarouselItems />
      <Banner2 />
      <CategoryAndItems />
      <Gifts />
    </div>
  );
}
