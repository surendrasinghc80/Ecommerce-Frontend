import React from "react";

function Cart() {
  return (
    <div className="flex flex-row w-2/3 mx-auto my-8  relative bg-gray-100">
      <div className="flex basis-[70%] bg-red-300">
        This is the left side of the cart view
      </div>
      <div className="flex basis-[30%] bg-blue-300 ">
        Thie is the right side of the cart view
      </div>
    </div>
  );
}

export default Cart;
