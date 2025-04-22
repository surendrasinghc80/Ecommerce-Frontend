import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

function CartView() {
  const { cart, removeFromCart, total, incrementQuantity, decrementQuantity } =
    useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  return (
    <div className="flex flex-row h-full w-full basis-[70%]">
      <div className="flex-1 overflow-y-auto py-2">
        {cart.map((product: CartItem) => (
          <div
            key={product.id}
            className="p-4 bg-white rounded-md mb-5 border-1 shadow-md"
          >
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="relative h-30 w-30 flex-shrink-0">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  height={80}
                  width={80}
                  className="object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm">{product.name}</h3>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-row ">
                  <div className="flex pr-5">
                    <p className="text-xs text-gray-500 mt-1 mr-2">size: </p>
                    <p className="text-xs text-gray-500 mt-1">{product.size}</p>
                  </div>
                  <div className="flex">
                    <p className="text-xs text-gray-500 mt-1 mr-2">color: </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.color}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-medium text-rose-500">
                    {formatPrice(product.basePrice)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrementQuantity(product)}
                      className="p-1 border rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center">{product.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(product)}
                      className="p-1 border rounded-md hover:bg-gray-100 cursor-pointer"
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
      <div className="basis-[30%] bg-white p-4 ml-5 mt-2 border-1 rounded-md shadow-md">
        <div className="flex justify-between pb-4 border-b ">
          <p className="text-gray-500">Total:</p>
          <p className="font-semibold text-lg text-gray-700">
            {" "}
            {formatPrice(total)}
          </p>
        </div>
        <div className="border-b">
          <div className="flex pt-4 items-center">
            <p className="font-semibold">Additional Comments</p>
            <Badge className="bg-rose-300 text-gray-100 rounded-sm ml-2">
              Note
            </Badge>
          </div>
          <div className="mt-2 pt-4">
            <Textarea placeholder="Type your message here." />
            <div className="pt-4">
              <Input className="p-2 text-lg" placeholder="Voucher" />
            </div>
            <div className="pt-4 pb-8">
              <Button
                variant={"outline"}
                className="w-full border-rose-400 hover:bg-rose-500 hover:text-gray-100 text-rose-400 rounded-sm cursor-pointer transition duration-400"
              >
                Apply Voucher
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5">
          <p className="font-semibold">Shipping Estimates</p>
          <p className="font-normal pt-4 pb-2 pl-1">Country</p>
          <div className="pb-4 w-full">
            <Select>
              <SelectTrigger className="w-[340px] cursor-pointer ">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Categories</SelectLabel> */}
                  <SelectItem className="cursor-pointer" value="fashion">
                    Fashion
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="bike">
                    Bike
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="gift">
                    Gifts
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="music">
                    Music
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="pet">
                    Pet
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <p className="font-normal pb-2 pl-1">State</p>
          <div className="pb-4 w-full">
            <Select>
              <SelectTrigger className="w-[340px] cursor-pointer ">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Categories</SelectLabel> */}
                  <SelectItem className="cursor-pointer" value="fashion">
                    Fashion
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="bike">
                    Bike
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="gift">
                    Gifts
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="music">
                    Music
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="pet">
                    Pet
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <p className="font-normal pb-2 pl-1">Zip Code</p>
          <Input className="p-2" placeholder="3100" />
        </div>
      </div>
    </div>
  );
}

export default CartView;
