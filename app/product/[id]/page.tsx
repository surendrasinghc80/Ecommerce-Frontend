"use client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
// import Image from "next/image";
import axios from "axios";
import ProductActions from "@/components/product-view/ProductActions";
import FallbackImage from "@/components/FallbackImage";

interface Product {
  id: string;
  name: string;
  basePrice: number;
  description?: string;
  gender?: string;
  brandName?: string;
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

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
    );
    return res.data.product;
  } catch (error) {
    console.error("Failed to fetch product", error);
    return null;
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    getProduct(params.id).then((data) => {
      if (data) {
        setProduct(data);
        const defaultColor = data.variants[0]?.color;
        setSelectedColor(defaultColor);
        setSelectedImage(
          data.images.find((img) => img.color === defaultColor)?.imageUrl ||
          data.images[0]?.imageUrl
        );
      } else {
        notFound();
      }
    });
  }, [params.id]);

  if (!product) return null;

  // Filter images based on selected color
  const filteredImages = product.images.filter(
    (img) => img.color === selectedColor
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-start mt-10 w-full gap-6 p-4 md:p-10">
      {/* Image Gallery */}
      <div className="flex md:flex-col gap-4 items-center md:items-start justify-center md:justify-start md:w-24 overflow-x-auto">
        {filteredImages.map((img, index) => (
          <FallbackImage
            key={index}
            src={img.imageUrl}
            alt={`${product.name} - ${selectedColor}`}
            width={80}
            height={80}
            onClick={() => setSelectedImage(img.imageUrl)}
            className="cursor-pointer rounded-md border-gray-200 hover:border-stone-600 transition-all border m-1"
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-full md:w-auto flex justify-center">
        <FallbackImage
          src={selectedImage || "/placeholder.svg"}
          alt={`${product.name} - selected`}
          width={400}
          height={400}
          className="object-contain rounded-lg shadow-md border"
        />
      </div>

      {/* Product Controls */}
      <div className="w-full md:max-w-md mt-6 md:mt-0">
        <ProductActions
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          setSelectedColor={setSelectedColor}
          setSelectedSize={setSelectedSize}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}
