"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "./ui/button";

// const images = ["/images/jacket.jpg", "/images/boot-1.jpeg"];

function HeroSection() {
  return (
    <div className="flex justify-center w-2/3 flex-row mx-auto m-5">
      <div className="flex items-center justify-center w-full">
        <div className="w-5xl relative flex-3/5 cursor-pointer flex justify-center">
          <Image
            src="/images/boot-1.jpeg"
            alt="Hero Banner"
            className="h-[530px] object-cover rounded-sm"
            width={1030}
            height={530}
          />
          <div className="w-90 absolute top-50 left-10 text-start">
            <h2 className="text-3xl font-normal text-zinc-900 text-start">
              Lifestyle Collections
            </h2>
            <h1 className="text-5xl font-bold text-zinc-900 text-start">Men</h1>
            <div className="flex mt-4 ">
              <h1 className="text-3xl font-semibold text-zinc-900 text-start">
                SALE UP TO
              </h1>
              <span className="text-red-400 mt-3 pl-3 text-md font-semibold ">
                30% OFF
              </span>
            </div>
            <h1 className="text-lg font-normal text-zinc-900">
              Get Free Shipping on orders over $99.00
            </h1>

            <Button className="mt-10 bg-red-400 hover:bg-red-500 text-white font-normal text-md py-2 px-4 rounded cursor-pointer transition duration-400">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex mx-auto my-auto mt-10 flex-col">
        <div className="relative my-auto ml-5">
          <Image
            src="/images/banner-17.jpg"
            alt="Mountain Boots"
            className="mb-5"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 left-0  top-2 flex flex-col bg-opacity-10 p-4">
            <h1 className="text-md font-normal text-zinc-800">NEW ARRIVAL</h1>
            <h1 className="text-xl font-semibold text-zinc-800">SUMMER</h1>
            <div className="flex mt-1 text-zinc-900">
              <h1 className="text-xl font-semibold text-zinc-800">
                SALE UP TO 20% OFF
              </h1>
            </div>
            <Button
              variant="ghost"
              className="mt-5 w-20 text-zinc-800 font-normal text-md py-2 px-4 rounded cursor-pointer transition duration-400"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="relative ml-5">
          <Image
            className="mt-5 object-cover"
            src="/images/banner-16.jpg"
            alt="Picture of the author"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 left-0 top-2 flex flex-col bg-opacity-10 p-4">
            <h1 className="text-md font-normal text-zinc-800">GAMING 4K</h1>
            <div className="flex mt-1 text-zinc-900">
              <h1 className="text-xl font-semibold text-zinc-800">
                DESKTOPS & LAPTOPS
              </h1>
            </div>
            <Button
              variant="ghost"
              className="mt-5 w-20 text-zinc-800 font-normal text-md py-2 px-4 rounded cursor-pointer transition duration-400"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
