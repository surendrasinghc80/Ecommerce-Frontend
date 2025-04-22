import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="container flex justify-between mx-auto mt-5 mb-5">
      {/* Back Button */}
      <div>
        <Button
          onClick={() => handleClick("back")}
          variant="outline"
          className={`ml-2 cursor-pointer border-rose-400 hover:bg-rose-500 hover:text-gray-100 text-rose-400 rounded-full transition duration-400 ${
            currentStep === 1 ? "hidden" : ""
          }`}
        >
          <ArrowLeft className="mr-2" size={16} />
          Back
        </Button>
      </div>
      {/* Next Button */}
      <div>
        <Button
          onClick={() => handleClick("next")}
          variant="outline"
          className={`mr-2 cursor-pointer border-rose-400 hover:bg-rose-500 hover:text-gray-100 text-rose-400 rounded-full transition duration-400  ${
            currentStep === steps.length ? "hidden" : ""
          }`}
        >
          Next
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </div>
  );
}

export default StepperControl;
