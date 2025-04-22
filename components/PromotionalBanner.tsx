"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function PromotionalBanner() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Set up the animation
    textElement.style.transform = "translateX(100%)";

    const animate = () => {
      const animation = textElement.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
        {
          duration: 15000,
          iterations: Number.POSITIVE_INFINITY,
          easing: "linear",
        }
      );

      return animation;
    };

    const animation = animate();

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div className="w-2/3 mx-auto bg-gray-100 mb-8 mt-5">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center ">
          {/* Left section */}
          <div className="bg-gray-200 py-4.5 px-6 pr-3 w-full sm:w-1/3 text-center sm:text-left">
            <h2 className="text-2xl font-bold">BLACK FRIDAY SALE!</h2>
          </div>

          {/* Middle section with moving text */}
          <div className="bg-zinc-700 py-4 px-6 w-full sm:flex-1 overflow-hidden">
            <div
              ref={textRef}
              className="whitespace-nowrap text-white text-3xl"
            >
              PAY ONLY FOR YOUR LOVING ELECTRONICS
            </div>
          </div>

          {/* Right section */}
          <div className="bg-zinc-700 py-4 px-6 w-full sm:w-1/6 flex justify-center">
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-100 cursor-pointer transition duration-400"
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
