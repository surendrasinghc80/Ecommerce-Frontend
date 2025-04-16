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

  const addToCart = (product) => {
    const formattedProduct = {
      ...product,
      imageUrl:
        product.imageUrl || product.images?.[0]?.url || "/placeholder.svg",
    };

    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (p) => p.id === formattedProduct.id
      );
      let updatedCart;

      if (existingProduct) {
        updatedCart = prevCart.map((p) =>
          p.id === formattedProduct.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        updatedCart = [...prevCart, { ...formattedProduct, quantity: 1 }];
      }

      return updatedCart;
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const total = cart.reduce(
    (sum, product) => sum + product.basePrice * product.quantity,
    0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
        incrementQuantity,
        decrementQuantity,
      }}
    >
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
