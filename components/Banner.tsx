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
      subHeading: "SKI ClOTHES SALE",
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
    <div className="flex flex-row p-8 mx-auto">
      {products.map((product) => (
        <div className="m-5 relative " key={product.id}>
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.name}
            width={400} // Adjust as needed
            height={400} // Adjust as needed
            className="object-contain"
          />
          <div className="absolute top-5 left-5">
            {product.id === 2 ? (
              <div className="text-gray-100">
                <p className="font-normal text-sm">{product.heading}</p>
                <h1 className=" font-normal text-2xl pt-3">
                  {product.subHeading}
                </h1>
                <p>{product.sale}</p>
                <Button className="w-18 " variant="ghost">
                  Shop Now
                </Button>
              </div>
            ) : (
              <div className="text-zinc-900">
                <p className="font-normal text-sm">{product.heading}</p>
                <h1 className="font-normal text-2xl pt-3 ">
                  {product.subHeading}
                </h1>
                <p>{product.sale}</p>
                <Button className="-left-0 w-18 text-thin" variant="ghost">
                  Shop Now
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
