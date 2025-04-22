import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
function Details() {
  const { total } = useCart();
  return (
    <div className="flex flex-row justify-between p-4">
      <div className="basis-[70%] bg-white shadow-md mr-5 rounded-md p-5">
        <div>
          <p className="font-semibold">Shipping Address</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-500">
            <div>
              <Label className="text-sm font-semibold">Full Name</Label>
              <Input className="p-2 text-lg rounded-sm" />
            </div>
            <div>
              <Label className="text-sm font-semibold">Email Address</Label>
              <Input className="p-2 text-lg rounded-sm" />
            </div>
            <div>
              <Label className="text-sm font-semibold">Phone Number</Label>
              <Input className="p-2 text-lg rounded-sm" />
            </div>
            <div>
              <Label className="text-sm font-semibold">Company</Label>
              <Input className="p-2 text-lg rounded-sm" />
            </div>
            <div>
              <Label className="text-sm font-semibold">Zip Code</Label>
              <Input className="p-2 text-lg rounded-sm" />
            </div>
            <div>
              <Label className="text-sm font-semibold">Country</Label>
              <Select>
                <SelectTrigger className="w-[360px] cursor-pointer ">
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
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Billing Address same as above.
              </label>
            </div>
            <div>
              <Button
                variant={"outline"}
                className="w-full border-rose-400 hover:bg-rose-500 hover:text-gray-100 text-rose-400 rounded-sm cursor-pointer transition duration-400"
              >
                Save Address
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[30%] bg-white shadow-md rounded-md p-5">
        <div className="border-b">
          <p className="font-semibold">Order Summary</p>
          <div className="flex flex-col mt-4">
            <div className="flex justify-between text-gray-600 items-center mb-2">
              <p className="text-sm font-semibold">Subtotal</p>
              <p className="text-sm font-semibold">₹{total}</p>
            </div>
            <div className="flex justify-between text-gray-600 items-center mb-2">
              <p className="text-sm font-semibold">Shipping</p>
              <p className="text-sm font-semibold">-</p>
            </div>
            <div className="flex justify-between  text-gray-600 items-center mb-2">
              <p className="text-sm font-semibold">Tax</p>
              <p className="text-sm font-semibold">₹150.00</p>
            </div>
            <div className="flex justify-between  text-gray-600 items-center mb-2">
              <p className="text-sm font-semibold">Discount</p>
              <p className="text-sm font-semibold">-</p>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-4">
          <div>
            <Input className="p-2 text-lg rounded-sm" placeholder="Voucher" />
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
    </div>
  );
}

export default Details;
