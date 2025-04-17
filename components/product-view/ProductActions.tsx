// components/ProductActions.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { AddToCartFilledButton } from "@/components/AddToCartButton";
import { Minus, Plus, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  gender: string;
  brandName: string;
  basePrice: number;
  rating?: number;
  reviewCount?: number;
  images: { imageUrl: string }[];
  variants: {
    color: string;
    size: string;
    priceOverride: string;
  }[];
}

export default function ProductActions({ product }: { product: any }) {
  const { cart, incrementQuantity, decrementQuantity } = useCart();
  const cartItem = cart.find(
    (item: { id: string | number }) => item.id === product.id
  );

  return (
    <div className="flex flex-col gap-4 px-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>
      <h2 className="text-2xl text-pink-500 font-bold">
        ₹ {Number(product.basePrice).toFixed(2)}
      </h2>
      <div className="flex items-center mb-2">
        <span className="text-gray-500 pr-2">Rated:</span>
        <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
        <span className="text-xs text-gray-500 ml-1">(50)</span>
      </div>

      {cartItem ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrementQuantity(product.id)}
            className="p-1 border rounded-md hover:bg-gray-100"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="w-6 text-center">{cartItem.quantity}</span>
          <button
            onClick={() => incrementQuantity(product.id)}
            className="p-1 border rounded-md hover:bg-gray-100"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <AddToCartFilledButton product={product} />
      )}
    </div>
  );
}
