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
    <div className="flex flex-row p-8 mx-auto">
      {products.map((product) => (
        <div className="m-5 relative " key={product.id}>
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.name}
            width={620} // Adjust as needed
            height={620} // Adjust as needed
            className="object-contain"
          />
          <div className="absolute top-5 left-5">
            {product.id === 2 ? (
              <div className="text-gray-100">
                <p className="font-normal text-sm">{product.heading}</p>
                <h1 className=" font-semibold text-3xl pt-3">
                  {product.subHeading}
                </h1>
                <p>{product.sale}</p>
              </div>
            ) : (
              <div className="text-zinc-900">
                <p className="font-normal text-sm">{product.heading}</p>
                <h1 className="font-semibold text-3xl pt-3 ">
                  {product.subHeading}
                </h1>
                <p>{product.sale}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner2;
