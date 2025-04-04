"use client";
import { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { Star, Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageSrc: string;
}

function CategoryAndItems() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    {
      id: "1",
      name: "Silver High Neck Sweater",
      price: 210.0,
      rating: 4,
      reviewCount: 225,
      imageSrc: "/images/IMG-20250331-WA0003.png",
    },
    {
      id: "2",
      name: "Yellow Casual Sweater",
      price: 110.0,
      rating: 4,
      reviewCount: 156,
      imageSrc: "/images/IMG-20250331-WA0002.png",
    },
    {
      id: "3",
      name: "Denim Blue Jeans",
      price: 140.0,
      rating: 4,
      reviewCount: 741,
      imageSrc: "/images/IMG-20250331-WA0004.png",
    },
    {
      id: "4",
      name: "Black White Sweater",
      price: 180.0,
      rating: 4,
      reviewCount: 123,
      imageSrc: "/images/IMG-20250331-WA0001.png",
    },
    {
      id: "5",
      name: "Red Summer Dress",
      price: 95.0,
      rating: 5,
      reviewCount: 89,
      imageSrc: "/images/IMG-20250331-WA0003.png",
    },
    {
      id: "6",
      name: "Blue Formal Shirt",
      price: 75.0,
      rating: 4,
      reviewCount: 162,
      imageSrc: "/images/IMG-20250331-WA0002.png",
    },
    {
      id: "7",
      name: "Leather Jacket",
      price: 250.0,
      rating: 5,
      reviewCount: 203,
      imageSrc: "/images/IMG-20250331-WA0004.png",
    },
    {
      id: "8",
      name: "White Sneakers",
      price: 120.0,
      rating: 4,
      reviewCount: 178,
      imageSrc: "/images/IMG-20250331-WA0001.png",
    },
  ];

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
      <div className="flex w-full">
        <div className="pr-10 pl-10 bg-white mr-4 border-1 rounded-sm  ">
          <div>
            <h1 className="font-semibold text-2xl p-2 pl-0  mb-5">
              Men&apos;s Fashion
            </h1>
          </div>
          <div className="text-sm text-zinc-800">
            <h1 className="m-1 hover:text-pink-500 cursor-pointer ">
              Wireless Speakers
            </h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer ">Tablet</h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">Tablet</h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">
              Smartphone
            </h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">Laptop</h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">iMac</h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">
              Game Controller
            </h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">Drone</h1>
            <h1 className="m-1 hover:text-pink-500 cursor-pointer">Apple</h1>
          </div>
          <h1 className="m-1 pt-10 text-zinc-800 cursor-pointer hover:text-pink-500">
            Browse All
          </h1>
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
              <div className="w-full h-48 relative group mb-4 cursor-pointer">
                <Image
                  src={product.imageSrc || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                <div className="absolute opacity-0 right-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <button onClick={() => handleOpenDialog(product)}>
                    <Eye className="h-7 w-7 p-1" />
                  </button>
                  <Heart className="h-7 w-7 p-1" />
                </div>
              </div>

              <h3 className="text-gray-700 text-center mb-2">{product.name}</h3>
              <p className="font-medium text-gray-900 mb-2">
                ${product.price.toFixed(2)}
              </p>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">
                  ({product.reviewCount})
                </span>
              </div>

              <Button
                variant="outline"
                className="w-full border-gray-300 hover:bg-black hover:text-gray-100 cursor-pointer"
              >
                Add To Cart
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Product Quick View Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] text-pink-600">
          {selectedProduct && (
            <>
              <DialogHeader>
                {/* <DialogTitle>{selectedProduct.name}</DialogTitle> */}
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedProduct.imageSrc || "/placeholder.svg"}
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
                            i < selectedProduct.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        ({selectedProduct.reviewCount} reviews)
                      </span>
                    </div>
                    <p className="text-2xl text-pink-600 font-bold">
                      ${selectedProduct.price.toFixed(2)}
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
                    <span className="text-gray-600  pr-2">Sold By:</span>
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

export default CategoryAndItems;
