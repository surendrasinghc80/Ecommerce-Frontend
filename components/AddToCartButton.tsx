"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  const handleAdd = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      basePrice: product.basePrice,
      imageUrl: product.images?.[0]?.imageUrl || "/placeholder.svg",
    };
    addToCart(cartItem);
  };

  return (
    <Button
      variant="outline"
      className="w-full border-gray-300 hover:bg-black hover:text-gray-100 cursor-pointer transition duration-300"
      onClick={handleAdd}
    >
      Add To Cart
    </Button>
  );
}
