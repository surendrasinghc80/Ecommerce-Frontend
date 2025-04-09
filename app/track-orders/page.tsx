import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Order from "@/components/order/Order";

export default function Home() {
  return (
    <div className="flex bg-gray-100 w-full mx-auto flex-col">
      <Header />
      <Order />
      //Here we will add the other components like user info, order, wishlist,
      {/* support, address, payment etc. with the case switch statement. Also use (usePathname) */}
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
