// CartContext.tsx

import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the cart state
export type CartState = {
  [id: string]: number;
};

// Define the shape of the context value
export interface CartContextType {
  cart: CartState;
  addToCart: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

// Create the context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Create the provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartState>(() =>
    JSON.parse(localStorage.getItem("cart") || "{}")
  );

  const addToCart = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id] = (prevCart[id] || 0) + quantity;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
