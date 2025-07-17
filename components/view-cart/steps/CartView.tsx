import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import FallbackImage from "@/components/FallbackImage";

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
    <div className="flex flex-col lg:flex-row h-full w-full gap-4">
      {/* Cart Items */}
      <div className="w-full lg:w-2/3 overflow-y-auto py-2">
        {cart.map((product: CartItem) => (
          <div
            key={product.id}
            className="p-4 bg-white rounded-md mb-5 border shadow-sm"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Product Image */}
              <div className="relative h-32 w-full sm:w-32 flex-shrink-0">
                <FallbackImage
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
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

                <div className="flex flex-wrap text-xs text-gray-500 mt-1 gap-4">
                  <p>Size: {product.size}</p>
                  <p>Color: {product.color}</p>
                </div>

                <div className="flex justify-between items-center mt-3 flex-wrap gap-2">
                  <p className="font-medium text-rose-500">
                    {formatPrice(product.basePrice)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrementQuantity(product)}
                      className="p-1 border rounded hover:bg-gray-100"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-6 text-center">{product.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(product)}
                      className="p-1 border rounded hover:bg-gray-100"
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

      {/* Summary / Sidebar */}
      <div className="w-full lg:w-1/3 bg-white p-4 border rounded-md shadow-sm">
        <div className="flex justify-between pb-4 border-b">
          <p className="text-gray-500">Total:</p>
          <p className="font-semibold text-lg text-gray-700">
            {formatPrice(total)}
          </p>
        </div>

        {/* Additional Comments */}
        <div className="border-b mt-4">
          <div className="flex items-center">
            <p className="font-semibold">Additional Comments</p>
            <Badge className="bg-rose-300 text-white ml-2">Note</Badge>
          </div>
          <div className="mt-4">
            <Textarea placeholder="Type your message here." />
            <Input className="mt-4 p-2 text-base" placeholder="Voucher" />
            <Button
              variant="outline"
              className="mt-4 w-full border-rose-400 text-rose-400 hover:bg-rose-500 hover:text-white"
            >
              Apply Voucher
            </Button>
          </div>
        </div>

        {/* Shipping Section */}
        <div className="pt-5">
          <p className="font-semibold mb-4">Shipping Estimates</p>

          <div className="mb-4">
            <p className="mb-1 text-sm">Country</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="bike">Bike</SelectItem>
                  <SelectItem value="gift">Gifts</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="pet">Pet</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <p className="mb-1 text-sm">State</p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="bike">Bike</SelectItem>
                  <SelectItem value="gift">Gifts</SelectItem>
                  <SelectItem value="music">Music</SelectItem>
                  <SelectItem value="pet">Pet</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="mb-1 text-sm">Zip Code</p>
            <Input placeholder="3100" className="p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartView;
