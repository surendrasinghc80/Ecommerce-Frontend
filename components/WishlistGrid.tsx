"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye, Minus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WishlistButton } from "@/components/AddToCartButton";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  inStock: boolean;
}

export function WishlistGrid() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const products: Product[] = [
    {
      id: 1,
      name: "Silver High Neck Sweater",
      price: 210.0,
      rating: 4,
      reviewCount: 225,
      image: "/images/IMG-20250331-WA0003.png",
      category: "Accessories",
      inStock: true,
    },
    {
      id: 2,
      name: "Yellow Casual Sweater",
      price: 110.0,
      rating: 4,
      reviewCount: 156,
      image: "/images/IMG-20250331-WA0002.png",
      category: "Accessories",
      inStock: false,
    },
    {
      id: 3,
      name: "Denim Blue Jeans",
      price: 140.0,
      rating: 4,
      reviewCount: 741,
      image: "/images/IMG-20250331-WA0004.png",
      category: "Accessories",
      inStock: true,
    },

    {
      id: 4,
      name: "Black White Sweater",
      price: 180.0,
      rating: 4,
      reviewCount: 123,
      image: "/images/IMG-20250331-WA0001.png",
      category: "Accessories",
      inStock: false,
    },
    {
      id: 5,
      name: "Silver High Neck Sweater",
      price: 95.0,
      rating: 5,
      reviewCount: 89,
      image: "/images/IMG-20250331-WA0003.png",
      category: "Accessories",
      inStock: true,
    },
    {
      id: 6,
      name: "Yellow Casual Sweater",
      price: 75.0,
      rating: 4,
      reviewCount: 162,
      image: "/images/IMG-20250331-WA0002.png",
      category: "Accessories",
      inStock: true,
    },
    {
      id: 7,
      name: "Denim Blue Jeans",
      price: 250.0,
      rating: 5,
      reviewCount: 203,
      image: "/images/IMG-20250331-WA0004.png",
      category: "Accessories",
      inStock: false,
    },
    {
      id: 8,
      name: "Black White Sweater",
      price: 120.0,
      rating: 4,
      reviewCount: 178,
      image: "/images/IMG-20250331-WA0001.png",
      category: "Accessories",
      inStock: true,
    },
  ];

  const handleOpenDialog = (product: Product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-30 ">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="w-full h-48 relative group mb-4 cursor-pointer">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />
            <div className="absolute opacity-0 right-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 mr-2">
              <button onClick={() => handleOpenDialog(product)}>
                <Eye className="h-7 w-7 p-1" />
              </button>
              <Heart className="h-7 w-7 p-1 text-red-600 fill-red-600" />
            </div>
          </div>
          <CardContent className="p-4 pb-0">
            <div className="flex flex-row justify-between h-full">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {product.name}
                </h3>
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
                <p className="font-semibold text-gray-900">{product.price}</p>
                <p
                  className={`text-sm ${
                    product.inStock ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <div>
                {product.inStock === true && product.id === product.id ? (
                  <div className="items-end">
                    <div className="flex flex-col gap-2 justify-items-end items-center">
                      <Button
                        size="iconSm"
                        className="hover:bg-pink-600 bg-white cursor-pointer border-1 border-pink-200 hover:border-pink-600 border-solid hover:text-white text-pink-600"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <p>2</p>
                      <WishlistButton product={product} />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] text-pink-600">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle></DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                <div className="relative h-64 w-full">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
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
