import React from "react";
import { Button } from "../ui/button";

function StepperControl({
  steps,
  currentStep,
  handleClick,
}: {
  steps: string[];
  currentStep: number;
  handleClick: (direction: "next" | "back") => void;
}) {
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      {/* Back Button */}
      <Button
        onClick={() => handleClick("back")}
        variant="outline"
        className={`ml-2 w-xl cursor-pointer border-rose-400 hover:bg-rose-500 hover:text-gray-100 text-rose-400 rounded-sm transition duration-400 ${
          currentStep === 1 ? "hidden" : ""
        }`}
      >
        Back
      </Button>
      {/* Next Button */}
      <Button
        onClick={() => handleClick("next")}
        variant="outline"
        className={`mr-2 w-xl cursor-pointer border-rose-400 hover:bg-rose-500 hover:text-gray-100 text-rose-400 rounded-sm transition duration-400  ${
          currentStep === steps.length ? "hidden" : ""
        }`}
      >
        Next
      </Button>
    </div>
  );
}

export default StepperControl;
