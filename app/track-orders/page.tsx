import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dashboard } from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex bg-gray-100 w-full mx-auto flex-col">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="pt-35" />
      <Dashboard />

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
