"use client";

import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CartItem {
  id: number;
  name: string;
  basePrice: number;
  imageUrl: string;
  quantity: number;
  size: number;
  color: string;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, total, incrementQuantity, decrementQuantity } =
    useCart();
  // console.log("====Cart======", cart);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out w-full sm:w-96 md:w-[400px] lg:w-[25%] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 flex items-center justify-between border-b">
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              <span className="font-medium">
                Cart ({cart.length} item{cart.length !== 1 ? "s" : ""})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-2">
            {cart.map((product: CartItem) => (
              <div key={product.id} className="p-4 border-b">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      height={60}
                      width={60}
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      <button
                        onClick={() => removeFromCart(product)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex flex-row ">
                      <div className="flex pr-5">
                        <p className="text-xs text-gray-500 mt-1 mr-2">
                          size:{" "}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {product.size}
                        </p>
                      </div>
                      <div className="flex">
                        <p className="text-xs text-gray-500 mt-1 mr-2">
                          color:{" "}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {product.color}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <p className="font-medium text-rose-500">
                        ₹ {product.basePrice}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrementQuantity(product)}
                          className="p-1 border rounded-md hover:bg-gray-100"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => incrementQuantity(product)}
                          className="p-1 border rounded-md hover:bg-gray-100"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t p-4 space-y-4">
            <Button
              className="w-full bg-rose-500 hover:bg-rose-600 text-white"
              size="lg"
            >
              Checkout Now (₹{total})
            </Button>
            <Link
              href="/cart"
              className="w-full text-center text-gray-500 hover:text-gray-700"
            >
              <Button
                variant="outline"
                className="w-full border-gray-300"
                size="lg"
              >
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
