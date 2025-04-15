import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Product from "@/components/product-view/Product";

export default function Home() {
  return (
    <div className="flex bg-gray-100 w-full mx-auto flex-col">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-35" />
      <Product />
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
