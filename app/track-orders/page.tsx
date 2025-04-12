import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dashboard } from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex bg-gray-100 w-full mx-auto flex-col">
      <Header />
      <Dashboard />
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
