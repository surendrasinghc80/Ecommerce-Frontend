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
        className={`mr-2 ${currentStep === 1 ? "hidden" : ""}`}
      >
        Back
      </Button>
      {/* Next Button */}
      <Button
        onClick={() => handleClick("next")}
        variant="outline"
        className={`mr-2  ${
          currentStep === steps.length - 1 ? "Confirm" : "Next"
        }`}
      >
        Next
      </Button>
    </div>
  );
}

export default StepperControl;
