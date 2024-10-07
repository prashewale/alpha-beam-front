// CartContext.tsx

import { useToast } from '@/hooks/use-toast';
import React, { createContext, useState, ReactNode } from 'react';

const localStorageCartKey = 'cart-data';
// Define the shape of the cart state
export type CartState = {
  [id: string]: number;
};

// Define the shape of the context value
export interface CartContextType {
  cart: CartState;
  addToCart: (id: string, quantity?: number) => void;
  removeFromCart: (id: string, quantity?: number) => void;
  changeCartQuantity: (id: string, quantity?: number) => void;
}

// Create the context
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

// Create the provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();

  const [cart, setCart] = useState<CartState>(() =>
    JSON.parse(localStorage.getItem(localStorageCartKey) || '{}')
  );

  const addToCart = (id: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id] = (prevCart[id] || 0) + quantity;
      localStorage.setItem(localStorageCartKey, JSON.stringify(newCart));
      toast({
        title: 'Success',
        description: 'Product added to cart successfully.',
      });
      return newCart;
    });
  };

  const removeFromCart = (id: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (prevCart[id] < quantity) {
        newCart[id] = 0;
      } else {
        newCart[id] = prevCart[id] - quantity;
      }

      if (newCart[id] === 0) delete newCart[id];

      localStorage.setItem(localStorageCartKey, JSON.stringify(newCart));
      return newCart;
    });
  };

  /**
   * Update the quantity of a product in the cart, or remove it if quantity is 0.
   * @param id The ID of the product to update.
   * @param quantity The new quantity of the product. If not provided, the product will not be updated.
   */
  const changeCartQuantity = (id: string, quantity?: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id] = quantity || 0;

      if (newCart[id] === 0) delete newCart[id];

      localStorage.setItem(localStorageCartKey, JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
