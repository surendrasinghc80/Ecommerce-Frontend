import React, { useEffect, useState, useRef } from "react";
import { Badge } from "../ui/badge";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

function Stepper({
  steps,
  currentStep,
}: {
  steps: string[];
  currentStep: number;
}) {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);

  const updateStep = (stepNumber: number, steps: Step[]) => {
    return steps.map((step, index) => {
      if (index === stepNumber) {
        return {
          ...step,
          highlighted: true,
          selected: true,
          completed: true,
        };
      } else if (index < stepNumber) {
        return {
          ...step,
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        return {
          ...step,
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
    });
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  return (
    <div className="flex-row mx-4 pl-10 p-4 flex justify-between items-center">
      <div className=" flex basis-[70%]">
        {newStep.map((step, index) => (
          <div key={index} className="w-full flex items-center">
            <div>
              <div className="relative flex items-center justify-between mb-4">
                <Badge
                  className={`p-2 rounded-4xl cursor-pointer ${
                    step.completed
                      ? "bg-rose-600 text-gray-100 text-md"
                      : "bg-gray-300 text-gray-500 text-md"
                  }`}
                >
                  {index + 1}. {step.description}
                </Badge>
              </div>
            </div>
            {index !== newStep.length - 1 && (
              <div
                className={`flex-auto border-t-4 mb-4 transition duration-500 ease-in-out border-gray-300 ${
                  step.completed ? "border-rose-600" : "border-rose-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className=" flex basis-[30%]"></div>
    </div>
  );
}

export default Stepper;
