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
    <div className="flex flex-row p-8 mx-auto">
      {products.map((product) => (
        <div className="m-5 relative " key={product.id}>
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.name}
            width={1280}
            height={1000}
            className="object-contain"
          />
          <div className="absolute flex flex-col align-middle justify-center inset-0 text-center">
            <div className="justify-center flex">
              <p className="font-bold text-zinc-800 justify-center text-4xl">
                {product.heading}
              </p>
              <span className="text-pink-500 text-bold text-4xl ml-2 mr-2">
                {product.off}
              </span>
              <span className="font-bold text-zinc-800 justify-center text-4xl">
                {product.last}
              </span>
            </div>
            <div>
              <h1 className="font-normal text-zinc-800 text-lg ">
                {product.subHeading}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gifts;
