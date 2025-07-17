import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  heading: string;
  subHeading: string;
  sale: string;
}

function Banner() {
  const products: Product[] = [
    {
      id: 1,
      name: "Silver High Neck Sweater",
      imageSrc: "/images/banner-18.jpg",
      heading: "NEW ARRIVALS",
      subHeading: "SKI CLOTHES SALE",
      sale: "Up to 35% Off",
    },
    {
      id: 2,
      name: "Yellow Casual Sweater",
      imageSrc: "/images/banner-19.jpg",
      heading: "BEST SELLER",
      subHeading: "TRENDING WOMEN’S",
      sale: "SUNGLASSES",
    },
    {
      id: 3,
      name: "Denim Blue Jeans",
      imageSrc: "/images/banner-20.jpg",
      heading: "NEW ARRIVALS",
      subHeading: "NEW LATEST BAG",
      sale: "COLLECTION",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-6 p-4 sm:p-8 w-full mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[30%] xl:w-[30%] overflow-hidden rounded shadow"
        >
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-2 left-5 sm:left-6 text-left">
            <div className={product.id === 2 ? "text-white" : "text-zinc-900 mb-2 "}>
              <p className="text-sm sm:text-base font-normal">{product.heading}</p>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold pt-1">
                {product.subHeading}
              </h1>
              <p className="text-sm sm:text-base">{product.sale}</p>
              <Button
                variant="ghost"
                className="mt-3 px-3 py-1 text-sm sm:text-base font-medium"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
