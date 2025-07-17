"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PromotionalBanner() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    textElement.style.transform = "translateX(100%)";

    const animation = textElement.animate(
      [
        { transform: "translateX(100%)" },
        { transform: "translateX(-100%)" },
      ],
      {
        duration: 15000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div className="w-full sm:px-6 lg:px-8 bg-gray-100 mb-8 mt-5">
      <div className="max-w-screen-xl mx-auto rounded-md overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center shadow-md">
          {/* Left section */}
          <div className="bg-gray-200 py-4 px-4 w-full sm:w-1/3 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              BLACK FRIDAY SALE!
            </h2>
          </div>

          {/* Moving text section */}
          <div className="bg-zinc-700 py-4 px-4 w-full sm:flex-1 overflow-hidden">
            <div
              ref={textRef}
              className="whitespace-nowrap text-white text-base sm:text-xl md:text-2xl"
            >
              PAY ONLY FOR YOUR LOVING ELECTRONICS
            </div>
          </div>

          {/* Button section */}
          <div className="bg-zinc-700 py-4 px-4 w-full sm:w-1/6 flex justify-center">
            <Button
              asChild
              className="bg-white text-black text-sm sm:text-base hover:bg-gray-200 transition duration-300"
            >
              <Link href="/sale">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanner;
