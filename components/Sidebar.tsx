"use client";

import {
  ShoppingBag,
  Heart,
  LifeBuoy,
  User,
  MapPin,
  CreditCard,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navItems = [
    {
      title: "DASHBOARD",
      items: [
        { id: "orders", label: "Orders", icon: ShoppingBag, count: 5 },
        { id: "wishlist", label: "Wishlist", icon: Heart, count: 19 },
        { id: "support", label: "Support Tickets", icon: LifeBuoy, count: 1 },
      ],
    },
    {
      title: "ACCOUNT SETTINGS",
      items: [
        { id: "profile", label: "Profile Info", icon: User, count: 3 },
        { id: "addresses", label: "Addresses", icon: MapPin, count: 16 },
        { id: "payment", label: "Payment Methods", icon: CreditCard, count: 4 },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-40 bg-rose-500 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-white rounded-md shadow-md md:mr-5 transition-all duration-300 fixed md:static inset-0 z-30 md:z-auto transform ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="p-4 mt-24 z-[99999] h-full overflow-y-auto">
          <div className="flex justify-between items-center md:hidden p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setIsMobileSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>
          {navItems.map((section) => (
            <div key={section.title} className="mb-16">
              <h2 className="text-xs font-medium text-gray-500 mb-3">
                {section.title}
              </h2>
              <nav className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`relative flex items-center justify-between w-full px-3 py-2.5 text-sm rounded-md cursor-pointer transition duration-400 ${activeTab === item.id
                      ? "text-rose-500 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {activeTab === item.id && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-rose-500"></span>
                    )}
                    <div className="flex items-center">
                      <item.icon className="h-4 w-4 mr-3" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-xs text-gray-500">{item.count}</span>
                  </button>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}