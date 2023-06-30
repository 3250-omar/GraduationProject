import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
export const CartItem = (props) => {
  const { UpdateCartItems, cartItems, AddToCart, RemoveFromCart } =
    useContext(CartContext);
  const { id, name, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} alt="Your Selected Product img" />
      <div className="description">
        <p>{name}</p>
        <p>unit: ${price}</p>
      </div>
      <div className="CountHandler">
        <button onClick={() => RemoveFromCart(id)}>
          {" "}
          <BsCaretDownFill style={{ color: "red" }} size={20} />{" "}
        </button>
        <input
          value={cartItems[id]}
          onChange={(e) => UpdateCartItems(Number(e.target.value), id)}
          type="number"
        />
        <button onClick={() => AddToCart(id)}>
          <BsCaretUpFill style={{ color: "green" }} size={20} />
        </button>
      </div>
      {cartItems[id] > 1 && (
        <p className="Totally">
          {" "}
          <span className="Total">Total Cost:</span>{" "}
          {Number(cartItems[id]) * Number(price)} $
        </p>
      )}
    </div>
  );
};
