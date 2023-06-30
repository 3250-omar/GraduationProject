import { useContext } from "react";
import { CartContext } from "../context/cart-context";
export const CheckOutComponent = (props) => {
    const { cartItems } = useContext(CartContext);
    const { id, name, price } = props.data;
    const CartItemsAmount = cartItems[id];
  const Total = Number(CartItemsAmount) * Number(price);
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{CartItemsAmount}</td>
        <td>{price}$</td>
        <td>{Total}$</td>
      </tr>
    </>
  );
};
