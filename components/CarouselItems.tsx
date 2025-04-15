"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AddToCartButton from "./AddToCartButton";
import axios from "axios";

interface Product {
  id: string;
  name: string;
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

function CarouselItems() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleOpenDialog = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 4 >= products.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return Math.max(0, products.length - 4);
      }
      return prevIndex - 1;
    });
  };

  // Calculate visible products based on currentIndex
  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  // If we have fewer than 4 products at the end, wrap around
  if (visibleProducts.length < 4) {
    const neededProducts = 4 - visibleProducts.length;
    const wrappedProducts = products.slice(0, neededProducts);
    visibleProducts.push(...wrappedProducts);
  }

  return (
    <div className="w-2/3 mx-auto py-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-medium text-gray-800">Deals Of The Day</h2>
        <Link href="/" className="text-sm text-black hover:text-pink-500">
          More Products
        </Link>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-8 z-10">
        <button
          onClick={prevSlide}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-8 z-10">
        <button
          onClick={nextSlide}
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md"
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-md shadow-sm flex flex-col items-center border hover:border-black"
          >
            <div className="w-full h-90 relative group mb-4 cursor-pointer">
              <Image
                src={product.images?.[0]?.imageUrl || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
              <div className="absolute opacity-0 top-2 right-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={() => handleOpenDialog(product)}>
                  <Eye className="h-7 w-7 p-1" />
                </button>
                <Heart className="h-7 w-7 p-1" />
              </div>
            </div>

            <h3 className="text-gray-700 text-center mb-2">{product.name}</h3>
            <p className="font-medium text-gray-900 mb-2">
              ₹ {Number(product.basePrice).toFixed(2)}
            </p>
            <AddToCartButton item={product} />
          </div>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] text-pink-600">
          {selectedProduct && (
            <>
              <DialogHeader />
              <VisuallyHidden>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </VisuallyHidden>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4 px-4">
                <div className="relative h-120 w-full">
                  <Image
                    src={
                      selectedProduct.images?.[0]?.imageUrl ||
                      "/placeholder.svg"
                    }
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-3xl text-black mb-2">
                      {selectedProduct.name}
                    </h3>
                    <div className="flex m-5 ml-0">
                      <p className="text-gray-600">Band:</p>{" "}
                      <span className="text-md text-black pl-2">Ziaomi</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-gray-600 pr-2">Rated:</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (selectedProduct.rating || 0)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({selectedProduct.reviewCount ?? 0} reviews)
                      </span>
                    </div>
                    <p className="text-2xl text-pink-600 font-bold">
                      ₹ {Number(selectedProduct.basePrice).toFixed(2)}
                    </p>
                    <span className="text-sm text-gray-600 mb-5">
                      Stock Available
                    </span>
                  </div>
                  <div className="space-y-3 m-5 ml-0 w-25">
                    <Button className="w-full bg-pink-600 cursor-pointer text-white">
                      Add To Cart
                    </Button>
                  </div>
                  <div className="flex text-sm ">
                    <span className="text-gray-600 pr-2">Sold By:</span>
                    <p className=" text-black">Mobile Store</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CarouselItems;
