import Image from "next/image";

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  heading: string;
  subHeading: string;
  sale: string;
}

function Banner2() {
  const products: Product[] = [
    {
      id: 1,
      name: "Watch",
      imageSrc: "/images/watch.png",
      heading: "Final Reduction",
      subHeading: "Sale up to 20% Off",
      sale: "Only From $270.00",
    },
    {
      id: 2,
      name: "Amazon Home",
      imageSrc: "/images/amazon-home.png",
      heading: "Weekend Sale",
      subHeading: "Fine Smart Speaker",
      sale: "Starting at $185.00",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 py-8 mx-auto w-full">
      {products.map((product) => (
        <div
          className="relative flex-1 min-w-[300px] max-w-full"
          key={product.id}
        >
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.name}
            width={620}
            height={620}
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="absolute top-2 left-5">
            <div className={product.id === 2 ? "text-white" : "text-zinc-900"}>
              <p className="text-sm font-normal">{product.heading}</p>
              <h1 className="text-2xl sm:text-3xl font-semibold pt-2">
                {product.subHeading}
              </h1>
              <p className="text-sm pt-1">{product.sale}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner2;
