import { notFound } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import ProductActions from "@/components/product-view/ProductActions";

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
  // const { incrementQuantity, decrementQuantity, cart, removeFromCart, total } =
  //   useCart();

  return (
    <div className="flex flex-row justify-center items-center w-full py-10">
      <div className="p-10">
        <Image
          src={product.images?.[0]?.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <div>
        {/* Client component that uses useCart */}
        <ProductActions product={product} />
      </div>
    </div>
  );
}
