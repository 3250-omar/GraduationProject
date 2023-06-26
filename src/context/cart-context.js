import React, { createContext, useState } from "react";
import { Products } from "../Components/Products";

export const CartContext = createContext(null);
const DefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const CartContextProvider = (props) => {
  const [cartItems, SetCartItems] = useState(DefaultCart());
  const UpdateCartItems = (newvalue, itemid) => {
    SetCartItems((prev) => ({ ...prev, [itemid]:newvalue }));
  };
  const AddToCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const RemoveFromCart = (itemId) => {
    SetCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  
  const ContextValue = { cartItems, AddToCart, RemoveFromCart,UpdateCartItems};
  return (
    <CartContext.Provider value={ContextValue}>
      {props.children}
    </CartContext.Provider> 
  );
};
