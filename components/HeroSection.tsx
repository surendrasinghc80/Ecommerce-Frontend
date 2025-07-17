"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <div className=" contain flex flex-col lg:flex-row justify-center items-center w-full mx-auto gap-6">
      {/* Left Main Hero */}
      <div className="w-full lg:w-2/3 relative cursor-pointer flex justify-center">
        <Image
          src="/images/boot-1.jpeg"
          alt="Hero Banner"
          className="w-full h-auto max-h-[530px] object-cover rounded-sm"
          width={1030}
          height={600}
        />
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-start text-gray-200 space-y-2 max-w-[80%]">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal ">
              Lifestyle Collections
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
              Men
            </h1>
            <div className="flex items-center mt-2">
              <h1 className="text-xl sm:text-2xl font-semibold ">
                SALE UP TO
              </h1>
              <span className="text-red-400 ml-3 text-md font-semibold">
                30% OFF
              </span>
            </div>
            <p className="text-md font-normal ">
              Get Free Shipping on orders over $99.00
            </p>
          </div>
        </div>
      </div>

      {/* Right Side Small Banners */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        {/* Top Box */}
        <div className="relative w-full">
          <Image
            src="/images/banner-17.jpg"
            alt="Summer Banner"
            className="w-full h-auto object-cover rounded"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 top-3 left-4 flex flex-col p-2 sm:p-4">
            <h1 className="text-sm sm:text-md font-normal text-zinc-800">NEW ARRIVAL</h1>
            <h1 className="text-lg sm:text-xl font-semibold text-zinc-800">SUMMER</h1>
            <h1 className="text-lg font-semibold text-zinc-800 mt-1">
              SALE UP TO 20% OFF
            </h1>
            <Button
              variant="ghost"
              className="mt-4 w-fit text-zinc-800 font-normal text-md py-2 px-4 rounded cursor-pointer transition duration-400"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Bottom Box */}
        <div className="relative w-full">
          <Image
            src="/images/banner-16.jpg"
            alt="Gaming Banner"
            className="w-full h-auto object-cover rounded"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 top-3 left-4 flex flex-col p-2 sm:p-4">
            <h1 className="text-sm sm:text-md font-normal text-zinc-800">GAMING 4K</h1>
            <h1 className="text-lg font-semibold text-zinc-800 mt-1">
              DESKTOPS & LAPTOPS
            </h1>
            <Button
              variant="ghost"
              className="mt-4 w-fit text-zinc-800 font-normal text-md py-2 px-4 rounded cursor-pointer transition duration-400"
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
