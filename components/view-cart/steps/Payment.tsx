import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/context/CartContext";
import { ArrowRight, Minus, Plus } from "lucide-react";

export interface CartItem {
  id: number;
  name: string;
  basePrice: number;
  imageUrl: string;
  quantity: number;
  size: number;
  color: string;
}

function Payment() {
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
    <div className="flex flex-row gap-4 p-4">
      <div className="basis-[70%]">
        <div>
          <p className="font-semibold pb-2 text-lg">
            Select a delivery address
          </p>
          <div className="pt-4 border-1 p-4 bg-white rounded-md shadow-md">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2 pb-2 border-b">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="compact"
                  id="r1"
                />
                <div>
                  <Label htmlFor="r3" className="font-semibold font-md pb-2">
                    Surendra Singh
                  </Label>
                  <p className="font-normal text-gray-600 text-sm">
                    23475 Glacier View Dr, Eagle River, Alaska 99577, USA
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="Address"
                  id="r2"
                />
                <div>
                  <Label htmlFor="r3" className="font-semibold font-md pb-2">
                    Aman Sharma
                  </Label>
                  <p className="font-normal text-gray-600 text-sm">
                    3448 lle De France St #242, Fort Wainwright, Alaska 99703,
                    USA
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="pt-4">
          <p className="font-semibold pb-2 text-lg">Choose a Payment Method</p>
          <div className="pt-4 border-1 p-4 bg-white rounded-md shadow-md">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2 pb-2">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="compact"
                  id="r1"
                />
                <div className="flex items-center justify-center space-x-2">
                  <Image
                    src={"/images/Mastercard-Logo.png"}
                    alt="Mastercard"
                    width={30}
                    height={30}
                  />
                  <Label htmlFor="r3" className="font-semibold font-md">
                    Debit/Credit Card
                  </Label>
                </div>
              </div>
              <div className="px-10 border-b pb-5">
                <div className="pb-3">
                  <Label className="text-sm text-gray-600 font-semibold">
                    Name
                  </Label>
                  <Input className="p-2 text-lg rounded-sm" />
                </div>
                <div className="pb-3">
                  <Label className="text-sm text-gray-600 font-semibold">
                    Card Number*
                  </Label>
                  <Input className="p-2 text-lg rounded-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="pb-3">
                    <Label className="text-sm text-gray-600 font-semibold">
                      Expiry Date*
                    </Label>
                    <Input className="p-2 text-lg rounded-sm" />
                  </div>
                  <div className="pb-3">
                    <Label className="text-sm text-gray-600 font-semibold">
                      CVV
                    </Label>
                    <Input className="p-2 text-lg rounded-sm" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-normal text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Save this card for future payments.
                  </label>
                </div>
              </div>
              <div className="flex items-center space-x-2 pb-2">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="google-pay"
                  id="r2"
                />
                <div className="flex items-center justify-center space-x-2">
                  <Image
                    src={"/images/Google-pay-logo.png"}
                    alt="Mastercard"
                    width={30}
                    height={30}
                  />
                  <Label htmlFor="r3" className="font-semibold font-md">
                    Google Pay
                  </Label>
                </div>
              </div>
            </RadioGroup>
            <div className="pb-3 px-10">
              <Label className="text-sm text-gray-600 font-semibold">
                UPI ID
              </Label>
              <Input className="p-2 text-lg rounded-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[30%]">
        <div>
          <p className="font-semibold pb-2 text-lg">Order Summary</p>
          <div className="flex-1 overflow-y-auto py-2 border-1 shadow-md bg-white rounded-md p-5">
            {cart.map((product: CartItem) => (
              <div key={product.id} className="border-b p-2">
                <div className="flex gap-2">
                  {/* Product Image */}
                  <div className="relative h-25 w-20 flex-shrink-0">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      height={60}
                      width={60}
                      className="object-cover rounded-md border-1"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      {/* <button
                        onClick={() => removeFromCart(product)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button> */}
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
                      <div className="flex">
                        <div>
                          <p className="font-normal text-sm mr-2 text-gray-600">
                            Qty:
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
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
              </div>
            ))}
            <div className="bg-stone-200 rounded-md mt-4 p-4">
              <p className="font-medium text-sm pb-4 text-gray-800">
                Price Details ({cart.length} items)
              </p>
              <div>
                {cart.map((product: CartItem) => (
                  <div
                    key={`${product.id}-${product.color}-${product.size}`}
                    className="flex justify-between font-normal text-sm text-gray-600"
                  >
                    <div className="flex">
                      <span className="mr-1">{product.quantity}</span>
                      <span>x</span>
                      <p className="ml-1">{product.name}</p>
                    </div>
                    <div>
                      <span>
                        {formatPrice(product.quantity * product.basePrice)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-semibold text-sm text-gray-600 mt-2">
                <p>Delivery Charges</p>
                <p className="text-green-500">Free Delivery</p>
              </div>
              <div className="flex justify-between font-semibold text-sm text-gray-800 mt-2 pt-2">
                <p>Total Amount</p>
                <p>{formatPrice(total)}</p>
              </div>
            </div>
            <div className="pt-2 pb-8">
              <Button className="w-full hover:bg-green-500 hover:text-gray-10 rounded-sm border-green-500 cursor-pointer transition duration-400">
                Proceed to pay
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
