"use client";

import { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { AddToCartFilledButton } from "@/components/AddToCartButton";
import { Minus, Plus, Star } from "lucide-react";
import { Button } from "../ui/button";

interface Product {
  id: string;
  name: string;
  description?: string;
  gender: string;
  brandName: string;
  basePrice: number;
  rating?: number;
  reviewCount?: number;
  images: { imageUrl: string; color: string }[];
  variants: {
    color: string;
    size: string;
    stock: number;
    priceOverride: string;
  }[];
}

interface Props {
  product: Product;
  selectedColor: string | null;
  selectedSize: string | null;
  selectedImage: string | null;
  setSelectedColor: (color: string) => void;
  setSelectedSize: (size: string) => void;
  setSelectedImage: (url: string) => void;
}

export default function ProductActions({
  product,
  selectedColor,
  selectedSize,
  setSelectedColor,
  setSelectedSize,
  setSelectedImage,
}: Props) {
  const { cart, incrementQuantity, decrementQuantity } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  // Selected variant for pricing, stock, etc.
  const selectedVariant = useMemo(() => {
    return product.variants.find(
      (v) => v.color === selectedColor && v.size === selectedSize
    );
  }, [selectedColor, selectedSize, product.variants]);

  const cartItem = cart.find(
    (item: { id: string; variant?: string }) =>
      item.id === product.id &&
      (!selectedVariant || item.variant === `${selectedColor}-${selectedSize}`)
  );

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedSize("");
    const img = product.images.find((img) => img.color === color);
    setSelectedImage(img?.imageUrl || "/placeholder.svg");
  };

  const sizesForColor = useMemo(() => {
    return product.variants
      .filter((v) => v.color === selectedColor)
      .map((v) => v.size);
  }, [selectedColor, product.variants]);

  return (
    <div className="flex flex-col gap-4 px-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>

      <h2 className="text-2xl text-pink-500 font-bold">
        {formatPrice(
          selectedVariant
            ? Number(selectedVariant.priceOverride)
            : Number(product.basePrice)
        )}
      </h2>

      <div className="flex items-center mb-2">
        <span className="text-gray-500 pr-2">Rated:</span>
        <Star className="fill-yellow-400 text-yellow-400 w-4 h-4" />
        <span className="text-xs text-gray-500 ml-1">
          ({product.reviewCount || product.rating})
        </span>
      </div>

      {/* Color Picker */}
      <div className="flex gap-2">
        {Array.from(new Set(product.variants.map((v) => v.color))).map(
          (color) => (
            <Button
              key={color}
              variant={"outline"}
              onClick={() => handleColorChange(color)}
              className={`border-gray-300 hover:bg-black hover:text-white ${
                selectedColor === color
                  ? "bg-white text-black border-black"
                  : "bg-gray-100"
              }`}
            >
              {color}
            </Button>
          )
        )}
      </div>

      {/* Size Picker */}
      {selectedColor && (
        <div className="flex gap-2 mt-2">
          {sizesForColor.map((size) => (
            <Button
              key={size}
              variant={"outline"}
              onClick={() => setSelectedSize(size)}
              className={`border-gray-300 hover:bg-black hover:text-white ${
                selectedSize === size
                  ? "bg-white text-black border-black"
                  : "bg-gray-100"
              }`}
            >
              {size}
            </Button>
          ))}
        </div>
      )}

      {/* Stock Display */}
      {selectedVariant && (
        <p className="text-sm text-gray-500">
          In Stock:{" "}
          <span className="font-semibold">{selectedVariant.stock}</span>
        </p>
      )}

      {/* Cart Interaction */}
      {cart.find((item: { id: string | number }) => item.id === product.id) ? (
        <div className="flex items-center justify-around gap-2 w-full">
          <button
            onClick={() => decrementQuantity(product)}
            className="p-1 border rounded-md hover:bg-gray-100"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="w-6 text-center">
            {
              cart.find(
                (item: { id: string | number; quantity: number }) =>
                  item.id === product.id
              )?.quantity
            }
          </span>
          <button
            onClick={() => incrementQuantity(product)}
            className="p-1 border rounded-md hover:bg-gray-100"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      ) : (
        <AddToCartFilledButton
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
      )}
    </div>
  );
}
