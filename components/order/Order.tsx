import React from "react";
import {
  ShoppingCart,
  Heart,
  Headset,
  User,
  MapPinHouse,
  CreditCard,
  ArrowRight,
  ShoppingBasket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Order() {
  return (
    <div className=" flex flex-row w-2/3 mx-auto my-8  relative bg-gray-100 ">
      <div className="basis-[20%] text-zinc-600">
        <div className="bg-white p-5 rounded-md shadow-md mr-5">
          <div className="mb-10">
            <div className="mb-3">
              <p className="text-xs text-thin">DASHBOARD</p>
            </div>
            <div>
              <div className="flex flex-row p-2 pl-0 text-sm text-normal cursor-pointer hover:text-pink-600">
                <Link href="/dashboard" className="flex flex-row">
                  <User className="h-5 w-5 mr-2" />
                  <p>Dashboard</p>
                </Link>
              </div>
              <div className="flex flex-row p-2 pl-0 text-sm text-normal cursor-pointer hover:text-pink-600">
                <Link href="/wishlist" className="flex flex-row">
                  <Heart className="h-5 w-5 mr-2" />
                  <p>Whishlist</p>
                </Link>
              </div>
              <div className="flex flex-row p-2 pl-0 text-sm text-normal cursor-pointer hover:text-pink-600">
                <Link href="/support" className="flex flex-row">
                  <Headset className="h-5 w-5 mr-2" />
                  <p>Support</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="mb-3">
              <p className="text-xs text-thin">ACCOUNT SETTINGS</p>
            </div>
            <div>
              <div className="flex flex-row p-2 pl-0 text-sm text-normal cursor-pointer hover:text-pink-600">
                <Link href="/profile" className="flex flex-row">
                  <User className="h-5 w-5 mr-2" />
                  <p>Profile Info</p>
                </Link>
              </div>
              <div className="flex flex-row p-2 pl-0 text-sm text-normal cursor-pointer hover:text-pink-600">
                <Link href="/address" className="flex flex-row">
                  <MapPinHouse className="h-5 w-5 mr-2" />
                  <p>Addresses</p>
                </Link>
              </div>
              <div className="flex flex-row p-2 pl-0 text-sm text-normal cursor-pointer hover:text-pink-600">
                <Link href="/payment" className="flex flex-row">
                  <CreditCard className="h-5 w-5 mr-2" />
                  <p>Payment Methods</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[80%]">
        <div className="flex ">
          <ShoppingCart className="h-10 w-10 text-red-500 " />
          <h1 className="text-3xl font-bold text-zinc-800 ml-4">My Orders</h1>
        </div>
        <div className="flex justify-between font-semibold text-lg text-zinc-600 font m-4">
          <div className=" basis-[25%] justify-start">
            <p>Order #</p>
          </div>
          <div className=" basis-[25%] justify-start">
            <p>Status</p>
          </div>
          <div className=" basis-[25%] justify-start">
            <p>Date of Purchased</p>
          </div>
          <div className=" basis-[25%] justify-start">
            <p>Total</p>
          </div>
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(54,54,54,0.2)] text-zinc-500  p-1.5 rounded-xl">
              Pending
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 ">
            <p>NOV 10, 2022</p>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(102,239,68,0.2)] text-green-500 p-1.5 rounded-xl">
              Delivered
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 ">
            <p>DEC 15, 2022</p>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(102,239,68,0.2)] text-green-500 p-1.5 rounded-xl">
              Delivered
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 ">
            <p>JAN 10, 2023</p>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(102,239,68,0.2)] text-green-500 p-1.5 rounded-xl">
              Delivered
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 ">
            <p>AUG 10, 2023</p>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
        <div className="flex bg-white justify-between pt-4 pb-4 mb-5 shadow-md cursor-pointer rounded-sm ">
          <div className="basis-[25%] justify-start">
            <h1 className=" text-zinc-700 font-semibold ml-4">#f0ba538b</h1>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <Badge className="bg-[rgba(239,68,68,0.2)] text-red-500 p-1.5 rounded-xl">
              Cancelled
            </Badge>
          </div>
          <div className="basis-[25%] justify-start text-sm ml-6 ">
            <p>JUN 10, 2024</p>
          </div>
          <div className="basis-[25%] justify-start ml-6">
            <p>$350.00</p>
          </div>
          <ArrowRight className="mr-2 hover:text-pink-500 text-zinc-700" />
        </div>
      </div>
    </div>
  );
}

export default Order;
