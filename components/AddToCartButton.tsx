"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/button";
import { Plus, ShoppingBag } from "lucide-react";

// Default style button
export function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      brandName: product.brandName, //newly added
      size: product.size, //newly added
      color: product.color, //newly added
      description: product.description, //newly added
      priceOverride: product.priceOverride, //newly added
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
      <ShoppingBag className="h-5 w-5 mr-2" />
      Add To Cart
    </Button>
  );
}

// Alternate filled-style button
export function AddToCartFilledButton({
  product,
  selectedColor,
  selectedSize,
}: {
  product: any;
  selectedColor: string | null;
  selectedSize: string | null;
}) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const cartItem = {
      id: product,
      name: product.name,
      basePrice: product.basePrice,
      size: selectedSize,
      color: selectedColor,
      imageUrl: product.images?.[0]?.imageUrl || "/placeholder.svg",
    };
    addToCart(cartItem);
  };

  return (
    <Button
      className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-2"
      onClick={handleAdd}
    >
      <ShoppingBag className="h-5 w-5 mr-2" />
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
      size={"iconSm"}
    >
      <Plus className="h-5 w-5" />
    </Button>
  );
}
