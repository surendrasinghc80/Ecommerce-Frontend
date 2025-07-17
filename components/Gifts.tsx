"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  heading: string;
  off: string;
  last: string;
  subHeading: string;
}

function Gifts() {
  const products: Product[] = [
    {
      id: 1,
      name: "Watch",
      imageSrc: "/images/Screenshot-1.png",
      heading: "GIFT",
      off: "50% OFF",
      last: "PERFECT STYLES",
      subHeading: "Only until the end of this week. Terms and conditions apply",
    },
  ];

  return (
    <div className="w-full py-8 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
        {products.map((product) => (
          <div className="relative w-full md:w-[90%] lg:w-[80%]" key={product.id}>
            <Image
              src={product.imageSrc || "/placeholder.svg"}
              alt={product.name}
              fill
              className="w-full h-full object-cover rounded-lg"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <div className="flex flex-wrap justify-center items-center mb-2">
                <p className="font-bold text-zinc-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {product.heading}
                </p>
                <span className="text-pink-500 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-2">
                  {product.off}
                </span>
                <span className="font-bold text-zinc-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {product.last}
                </span>
              </div>
              <h1 className="text-zinc-800 text-sm sm:text-base md:text-lg font-normal max-w-xl">
                {product.subHeading}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gifts;
