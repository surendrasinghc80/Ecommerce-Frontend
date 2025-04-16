"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

// Default style button
export function AddToCartButton({ product }: { product: any }) {
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

// Alternate filled-style button
export function AddToCartFilledButton({ product }: { product: any }) {
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
      className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
      onClick={handleAdd}
    >
      Add To Cart
    </Button>
  );
}

export function WishlistButton({ product }: { product: any }) {
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
      className="hover:bg-pink-600 bg-white cursor-pointer border-1 border-pink-200 hover:border-pink-600 border-solid hover:text-white text-pink-600"
      onClick={handleAdd}
    >
      <Plus className="h-5 w-5" />
    </Button>
  );
}
