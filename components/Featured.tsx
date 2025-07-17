import { Truck, Award, Clock, CreditCard } from "lucide-react";

export default function ServiceFeatures() {
  return (
    <div className="container max-w-7xl mx-auto bg-white py-10 px-4 mb-8 mt-5">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Fast Delivery */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center gap-4">
          <Truck className="w-10 h-10 text-gray-700" />
          <div>
            <h3 className="font-medium text-gray-800">Fast Delivery</h3>
            <p className="text-sm text-gray-500">Start from $10</p>
          </div>
        </div>

        {/* Money Guarantee */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center gap-4">
          <Award className="w-10 h-10 text-gray-700" />
          <div>
            <h3 className="font-medium text-gray-800">Money Guarantee</h3>
            <p className="text-sm text-gray-500">7 Days Back</p>
          </div>
        </div>

        {/* 365 Days */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center gap-4">
          <Clock className="w-10 h-10 text-gray-700" />
          <div>
            <h3 className="font-medium text-gray-800">365 Days</h3>
            <p className="text-sm text-gray-500">For free return</p>
          </div>
        </div>

        {/* Payment */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-center gap-4">
          <CreditCard className="w-10 h-10 text-gray-700" />
          <div>
            <h3 className="font-medium text-gray-800">Payment</h3>
            <p className="text-sm text-gray-500">Secure system</p>
          </div>
        </div>
      </div>
    </div>
  );
}
