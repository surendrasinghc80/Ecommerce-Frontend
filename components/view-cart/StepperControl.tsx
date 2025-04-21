import React from "react";
import { Button } from "../ui/button";

function StepperControl() {
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      {/* Back Button */}
      <Button variant="outline" className="mr-2">
        Back
      </Button>
      {/* Next Button */}
      <Button variant="outline" className="mr-2">
        Next
      </Button>
    </div>
  );
}

export default StepperControl;
