"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { OrdersTable } from "@/components/OrdersTable";
import { ProfileInfo } from "@/components/ProfileInfo";
import { WishlistGrid } from "@/components/WishlistGrid";
import { ShoppingBag, Heart, User } from "lucide-react";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <>
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                My Orders
              </h1>
            </div>
            <OrdersTable />
          </>
        );
      case "wishlist":
        return (
          <>
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                My Wishlist
              </h1>
            </div>
            <WishlistGrid />
          </>
        );
      case "profile":
        return (
          <>
            <div className="flex items-center gap-2 mb-6">
              <User className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Profile Info
              </h1>
            </div>
            <ProfileInfo />
          </>
        );
      default:
        return (
          <>
            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                My Orders
              </h1>
            </div>
            <OrdersTable />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:w-11/12 lg:w-4/5 mx-auto my-4 md:my-8 relative bg-gray-100 min-h-screen">
      <div className="md:basis-[25%] lg:basis-[20%] text-zinc-600">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="md:basis-[75%] lg:basis-[80%]">
        <div className="w-full mx-auto">{renderContent()}</div>
      </div>
    </div>
  );
}