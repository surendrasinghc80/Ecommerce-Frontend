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
  const { cart, total, incrementQuantity, decrementQuantity } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  return (
    <div className="flex flex-col lg:flex-row font-poppins gap-4 p-4">
      {/* Left Column */}
      <div className="w-full lg:w-[70%] space-y-6">
        {/* Delivery Address */}
        <div>
          <p className="font-semibold pb-2 text-lg">Select a delivery address</p>
          <div className="pt-4 border p-4 bg-white rounded-md shadow-md">
            <RadioGroup defaultValue="comfortable" className="space-y-4">
              {[{
                id: "r1",
                name: "Surendra Singh",
                address: "23475 Glacier View Dr, Eagle River, Alaska 99577, USA"
              }, {
                id: "r2",
                name: "Aman Sharma",
                address: "3448 lle De France St #242, Fort Wainwright, Alaska 99703, USA"
              }].map(({ id, name, address }) => (
                <div key={id} className="flex items-start space-x-2 border-b pb-2 last:border-none">
                  <RadioGroupItem className="cursor-pointer mt-1" value={id} id={id} />
                  <div>
                    <Label htmlFor={id} className="font-semibold">{name}</Label>
                    <p className="text-sm text-gray-600">{address}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <p className="font-semibold pb-2 text-lg">Choose a Payment Method</p>
          <div className="pt-4 border p-4 bg-white rounded-md shadow-md space-y-4">
            <RadioGroup defaultValue="comfortable" className="space-y-4">
              {/* Card Option */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem className="cursor-pointer" value="card" id="card" />
                <div className="flex items-center space-x-2">
                  <Image src="/images/Mastercard-Logo.png" alt="Mastercard" width={30} height={30} />
                  <Label htmlFor="card" className="font-semibold">Debit/Credit Card</Label>
                </div>
              </div>

              <div className="space-y-3 px-2 sm:px-10">
                <div>
                  <Label className="text-sm font-semibold text-gray-600">Name</Label>
                  <Input placeholder="SURENDRA SINGH" className="p-2 text-base" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-600">Card Number*</Label>
                  <Input placeholder="4242 4242 4242 4242" className="p-2 text-base" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-semibold text-gray-600">Expiry Date*</Label>
                    <Input placeholder="MM/YY" className="p-2 text-base" />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-600">CVV</Label>
                    <Input placeholder="***" className="p-2 text-base" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-card" />
                  <label htmlFor="save-card" className="text-sm text-gray-600">
                    Save this card for future payments.
                  </label>
                </div>
              </div>

              {/* GPay Option */}
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem className="cursor-pointer" value="google-pay" id="google-pay" />
                <div className="flex items-center space-x-2">
                  <Image src="/images/Google-pay-logo.png" alt="GPay" width={30} height={30} />
                  <Label htmlFor="google-pay" className="font-semibold">Google Pay</Label>
                </div>
              </div>

              <div className="px-2 sm:px-10">
                <Label className="text-sm font-semibold text-gray-600">UPI ID</Label>
                <Input className="p-2 text-base" />
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="w-full lg:w-[30%]">
        <p className="font-semibold pb-2 text-lg">Order Summary</p>
        <div className="bg-white rounded-md shadow-md p-4 space-y-4">
          {cart.map((product: CartItem) => (
            <div key={product.id} className="border-b pb-2">
              <div className="flex gap-3">
                <div className="h-24 w-20 relative flex-shrink-0">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="object-cover rounded border"
                  />
                </div>
                <div className="flex-1 text-sm">
                  <div className="font-medium">{product.name}</div>
                  <div className="text-gray-500 text-xs flex gap-4 mt-1">
                    <span>Size: {product.size}</span>
                    <span>Color: {product.color}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-rose-500 font-medium">₹ {product.basePrice}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">Qty:</span>
                      <button onClick={() => decrementQuantity(product)} className="p-1 border rounded hover:bg-gray-100">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center">{product.quantity}</span>
                      <button onClick={() => incrementQuantity(product)} className="p-1 border rounded hover:bg-gray-100">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Price Details */}
          <div className="bg-stone-100 p-4 rounded-md space-y-2">
            <p className="font-medium text-sm text-gray-800">Price Details ({cart.length} items)</p>
            {cart.map((product: any) => (
              <div key={`${product.id}-${product.color}-${product.size}`} className="flex justify-between text-sm text-gray-600">
                <span>{product.quantity} x {product.name}</span>
                <span>{formatPrice(product.quantity * product.basePrice)}</span>
              </div>
            ))}
            <div className="flex justify-between border-t border-gray-300 pt-2 mt-2 text-sm font-semibold">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-sm font-semibold pt-1">
              <span>Total Amount</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          {/* Pay Button */}
          <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
            Proceed to pay <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
