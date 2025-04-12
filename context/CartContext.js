"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const localCart = localStorage.getItem("Cart");
      return localCart ? JSON.parse(localCart) : [];
    }
    return [];
  });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }

      console.log("Updated Cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Save to localStorage whenever the cart updates
  useEffect(() => {
    console.log("Cart Updated:", cart);
    if (typeof window !== "undefined") {
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
