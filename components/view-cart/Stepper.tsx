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
    <div className="mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center w-full space-x-2">
        {newStep.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center">
              <Badge
                variant="outline"
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${step.completed
                  ? "bg-rose-500 text-white border-rose-500"
                  : "bg-gray-100 text-gray-600 border-gray-300"
                  } ${step.highlighted ? "ring-2 ring-offset-2 ring-rose-300" : ""
                  }`}
              >
                {index + 1}. {step.description}
              </Badge>
            </div>

            {index !== newStep.length - 1 && (
              <div className="flex-1 flex items-center">
                <div
                  className={`h-0.5 flex-1 mx-2 ${step.completed ? "bg-rose-500" : "bg-gray-200"
                    }`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Stepper;