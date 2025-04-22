"use client";
import Stepper from "@/components/view-cart/Stepper";
import StepperControl from "@/components/view-cart/StepperControl";
import CartView from "@/components/view-cart/steps/CartView";
import Details from "@/components/view-cart/steps/Details";
import Payment from "@/components/view-cart/steps/Payment";
import { StepperContext } from "@/context/StepperContext";
import React, { useState } from "react";

// interface direction {
//   direction: string;
// }

function Cart() {
  const [currentStep, SetCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = ["Cart", "Details", "Payment"];

  const displaySteps = (step: any) => {
    switch (step) {
      case 1:
        return <CartView />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      default:
        return <CartView />;
    }
  };

  const handleClick = (direction: "next" | "back") => {
    let newStep = currentStep;

    direction === "next" ? (newStep += 1) : (newStep -= 1);
    newStep > 0 && newStep <= steps.length && SetCurrentStep(newStep);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 w-2/3 mx-auto my-8 relative">
      <div className="basis-[100%]">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className="p-5">
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displaySteps(currentStep)}
          </StepperContext.Provider>
        </div>
        <div className="flex">
          <StepperControl
            steps={steps}
            handleClick={handleClick}
            currentStep={currentStep}
          />
        </div>
      </div>
      {/* Optional Right Side */}
    </div>
  );
}

export default Cart;
