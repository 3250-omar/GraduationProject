import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const Product = (props) => {
  const { id, name, price, productImage } = props.data;
  const { AddToCart, cartItems } = useContext(CartContext);
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
            AddToCart(id);
          }}
        >
          Add To Cart {CartItemsAmount > 0 && <>({CartItemsAmount})</>}
        </button>
      </div>
    </div>
  
  );
};
