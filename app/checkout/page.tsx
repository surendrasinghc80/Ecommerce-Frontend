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
    <div className="flex flex-col justify-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Stepper */}
        <div className="mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Stepper Control */}
        <div className="mt-6">
          <StepperControl
            steps={steps}
            handleClick={handleClick}
            currentStep={currentStep}
          />
        </div>

        {/* Step Content */}
        <div className="mt-8">
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displaySteps(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Cart;
