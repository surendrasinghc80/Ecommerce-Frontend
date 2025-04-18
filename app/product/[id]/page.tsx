"use client";
<<<<<<< HEAD

=======
import { useEffect, useState } from "react";
>>>>>>> 29d0bab161baed1c0326d0c5603a279af6635664
import { notFound } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductActions from "@/components/product-view/ProductActions";

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
    <div className="flex flex-row justify-center items-start w-full gap-4 p-10">
      {/* Image Gallery */}
      <div className="flex flex-col gap-4 items-center">
        <div className=" fle gap-2">
          {filteredImages.map((img, index) => (
            <Image
              key={index}
              src={img.imageUrl}
              alt={`${product.name} - ${selectedColor}`}
              width={100}
              height={100}
              onClick={() => setSelectedImage(img.imageUrl)}
              className="cursor-pointer rounded-md border border-gray-200 hover:border-black transition-all"
            />
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="flex-shrink-0">
        <Image
          src={selectedImage || "/placeholder.svg"}
          alt={`${product.name} - selected`}
          width={550}
          height={550}
          className="object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Product Controls */}
      <div className="max-w-md">
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
