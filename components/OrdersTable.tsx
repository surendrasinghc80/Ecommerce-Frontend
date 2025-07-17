import { ArrowRight, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function OrdersTable() {
  const orders = [
    {
      id: "f0ba538b",
      status: "Pending",
      statusClass: "bg-[rgba(54,54,54,0.2)] text-zinc-500",
      date: "NOV 10, 2022",
      total: "$350.00",
    },
    {
      id: "f0ba538b",
      status: "Delivered",
      statusClass: "bg-[rgba(102,239,68,0.2)] text-green-500",
      date: "DEC 15, 2022",
      total: "$350.00",
    },
    {
      id: "f0ba538b",
      status: "Delivered",
      statusClass: "bg-[rgba(102,239,68,0.2)] text-green-500",
      date: "JAN 10, 2023",
      total: "$350.00",
    },
    {
      id: "f0ba538b",
      status: "Delivered",
      statusClass: "bg-[rgba(102,239,68,0.2)] text-green-500",
      date: "AUG 10, 2023",
      total: "$350.00",
    },
    {
      id: "f0ba538b",
      status: "Cancelled",
      statusClass: "bg-[rgba(239,68,68,0.2)] text-red-500",
      date: "JUN 10, 2024",
      total: "$350.00",
    },
  ];

  return (
    <div className="bg-gray-100 overflow-hidden rounded-lg">
      <div className="overflow-x-auto">
        {/* Table Headers - Hidden on mobile */}
        <div className="hidden md:flex justify-between font-semibold text-lg text-zinc-600 m-4">
          <div className="basis-[25%]">
            <p>Order #</p>
          </div>
          <div className="basis-[25%]">
            <p>Status</p>
          </div>
          <div className="basis-[25%]">
            <p>Date of Purchased</p>
          </div>
          <div className="basis-[25%]">
            <p>Total</p>
          </div>
        </div>

        {/* Orders List */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white justify-between p-4 mb-4 shadow-md cursor-pointer rounded-sm hover:bg-gray-50"
          >
            <div className="flex justify-between md:basis-[25%] mb-2 md:mb-0">
              <span className="md:hidden text-zinc-500">Order #</span>
              <span className="text-zinc-700 font-semibold">#{order.id}</span>
            </div>
            <div className="flex justify-between md:basis-[25%] mb-2 md:mb-0">
              <span className="md:hidden text-zinc-500">Status</span>
              <Badge className={`${order.statusClass} p-1.5 rounded-xl`}>
                {order.status}
              </Badge>
            </div>
            <div className="flex justify-between md:basis-[25%] mb-2 md:mb-0">
              <span className="md:hidden text-zinc-500">Date</span>
              <span className="text-sm md:text-base font-medium">
                {order.date}
              </span>
            </div>
            <div className="flex justify-between md:basis-[25%]">
              <span className="md:hidden text-zinc-500">Total</span>
              <span className="font-medium">{order.total}</span>
              <ArrowRight className="hidden md:block mr-2 hover:text-pink-500 text-zinc-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}