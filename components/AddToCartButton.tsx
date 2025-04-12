"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";

export default function AddToCartButton({ item }: { item: any }) {
  const { addToCart } = useCart();

  return (
    <Button
      variant="outline"
      className="w-full border-gray-300 hover:bg-black hover:text-gray-100 cursor-pointer"
      onClick={() => addToCart(item)}
    >
      Add To Cart
    </Button>
  );
}
