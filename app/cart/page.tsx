"use client";
import Stepper from "@/components/view-cart/Stepper";
import StepperControl from "@/components/view-cart/StepperControl";
import CartView from "@/components/view-cart/steps/CartView";
import Details from "@/components/view-cart/steps/Details";
import Payment from "@/components/view-cart/steps/Payment";
import Review from "@/components/view-cart/steps/Review";

import React, { useState } from "react";

function Cart() {
  const [currentStep, SetCurrentStep] = useState(1);

  const steps = ["Cart", "Details", "Payment", "Review"];

  const displaySteps = (step: any) => {
    switch (step) {
      case 1:
        return <CartView />;
      case 2:
        return <Details />;
      case 3:
        return <Review />;
      case 4:
        return <Payment />;
      default:
        return <CartView />;
    }
  };
  return (
    <div className="flex flex-row w-2/3 mx-auto my-8 relative bg-gray-100">
      <div className="basis-[70%] bg-blue-400">
        {/*Stepper*/}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className="flex">
          {/*StepperControl*/}
          <StepperControl />
        </div>
      </div>
      <div className="basis-[30%] bg-rose-300">
        This is the Right side of the cart view
      </div>
    </div>
  );
}

export default Cart;
