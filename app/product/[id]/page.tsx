// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Product from "@/components/product-view/Product";

// export default function Home() {
//   return (
//     <div className="flex bg-gray-100 w-full mx-auto flex-col">
//       <div className="fixed top-0 w-full z-50">
//         <Header />
//       </div>
//       <div className="pt-35" />
//       <Product />
//       <div className="bottom-0 w-full">
//         <Footer />
//       </div>
//     </div>
//   );
// }

import { notFound } from "next/navigation";
import Image from "next/image";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  description?: string;
  basePrice: number;
  images: { imageUrl: string }[];
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
    );
    console.log("Fetched product data:", res.data);
    return res.data.product; // ✅ Important!
  } catch (error) {
    console.error("Failed to fetch product", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={product.images?.[0]?.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-md object-contain"
        />
        <div>
          <p className="text-gray-700 text-xl font-semibold mb-2">
            ₹ {Number(product.basePrice).toFixed(2)}
          </p>
          <p className="text-gray-600">
            {product.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";
// import React from "react";
// import { Star } from "lucide-react";

// function Product() {
//   return (
//     <div className=" flex justify-center items-center align- w-2/3 mx-auto py-2 relative">
//       <div>
//         <div className="p-10">
//           <Image
//             src={"/images/Ford.png"}
//             alt="Product Image"
//             width={600}
//             height={600}
//             className="object-contain"
//           />
//         </div>
//         <div>
//           <div className="flex justify-center items-center gap-4">
//             <div className="flex flex-row gap-2">
//               <div className="rounded-lg border-1 bg-white border-red-400 cursor-pointer">
//                 <Image
//                   src={"/images/Ford.png"}
//                   alt="Product Image"
//                   width={80}
//                   height={80}
//                 />
//               </div>
//               <div className="rounded-lg border-1 bg-white border-gray-400 cursor-pointer">
//                 <Image
//                   src={"/images/Ford.png"}
//                   alt="Product Image"
//                   width={80}
//                   height={80}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Product Details Section */}
//       <div className="flex flex-col justify-center items-start gap-4 p-10">
//         <div className="flex flex-col gap-2">
//           <h1 className="text-3xl font-bold">Ford 2020</h1>
//           <div className="flex flex-row gap-2">
//             <p className="text-gray-500">Brand</p>
//             <p>Ziaomi</p>
//           </div>
//           <div className="flex items-center mb-2">
//             <span className="text-gray-500 pr-2">Rated:</span>
//             <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />

//             <span className="text-xs text-gray-500 ml-1">(50)</span>
//           </div>
//           <h2 className="text-2xl text-pink-500 font-bold">$1000</h2>
//           <p className="text-gray-500">Stock Available</p>
//           <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-2">
//             Add to Cart
//           </button>
//           <div className="flex text-sm mt-4">
//             <span className="text-gray-500 pr-2">Sold By:</span>
//             <p className="text-black">Mobile Store</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;
