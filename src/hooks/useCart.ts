import { useContext } from "react";
import { CartContext, CartContextType } from "../contexts/CartContext";

// Create a custom hook for easier access to the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
