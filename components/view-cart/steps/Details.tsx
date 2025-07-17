import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

function Details() {
  const { total } = useCart();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 p-4">
      {/* Left: Shipping Address */}
      <div className="w-full md:w-[70%] bg-white shadow-md rounded-md p-5">
        <p className="font-semibold text-lg">Shipping Address</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-gray-500">
          <div>
            <Label className="text-sm font-semibold">Full Name</Label>
            <Input className="p-2 text-base rounded-sm w-full" />
          </div>
          <div>
            <Label className="text-sm font-semibold">Email Address</Label>
            <Input className="p-2 text-base rounded-sm w-full" />
          </div>
          <div>
            <Label className="text-sm font-semibold">Phone Number</Label>
            <Input className="p-2 text-base rounded-sm w-full" />
          </div>
          <div>
            <Label className="text-sm font-semibold">Company</Label>
            <Input className="p-2 text-base rounded-sm w-full" />
          </div>
          <div>
            <Label className="text-sm font-semibold">Zip Code</Label>
            <Input className="p-2 text-base rounded-sm w-full" />
          </div>
          <div>
            <Label className="text-sm font-semibold">Country</Label>
            <Select>
              <SelectTrigger className="w-full cursor-pointer">
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
          <div className="flex items-center space-x-2 col-span-1 md:col-span-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Billing Address same as above.
            </label>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Button
              variant={"outline"}
              className="w-full border-rose-400 hover:bg-rose-500 hover:text-white text-rose-400 rounded-sm transition"
            >
              Save Address
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="w-full md:w-[30%] bg-white shadow-md rounded-md p-5">
        <div className="border-b pb-4">
          <p className="font-semibold text-lg">Order Summary</p>
          <div className="flex flex-col mt-4 text-gray-600">
            <div className="flex justify-between mb-2 text-sm font-semibold">
              <p>Subtotal</p>
              <p>₹{total}</p>
            </div>
            <div className="flex justify-between mb-2 text-sm font-semibold">
              <p>Shipping</p>
              <p>-</p>
            </div>
            <div className="flex justify-between mb-2 text-sm font-semibold">
              <p>Tax</p>
              <p>₹150.00</p>
            </div>
            <div className="flex justify-between mb-2 text-sm font-semibold">
              <p>Discount</p>
              <p>-</p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <Input
            className="p-2 text-base rounded-sm w-full"
            placeholder="Voucher"
          />
          <div className="pt-4">
            <Button
              variant={"outline"}
              className="w-full border-rose-400 hover:bg-rose-500 hover:text-white text-rose-400 rounded-sm transition"
            >
              Apply Voucher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
