import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { LogContext } from "../context/logContext";
import { useNavigate } from "react-router-dom";
export const Product = (props) => {
  const { id, name, price, productImage } = props.data;
  const { AddToCart, cartItems } = useContext(CartContext);
  const { user } = useContext(LogContext);
  const SubscribeFirst = useNavigate();
  const CartItemsAmount = cartItems[id];
  return (
    <div>
      <div className="product-board">
        <img src={productImage} alt="ItemImage" />
        <div className="description">
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
        <button
          onClick={() => {
            user === "" ? SubscribeFirst("/Subscribe") : AddToCart(id)
          }}
        >
          Add To Cart {user!=="" && ( CartItemsAmount > 0 && <> ({CartItemsAmount})</>) }
        </button>
      </div>
    </div>
  );
};
