import React, { useContext } from "react";
import { Products } from "../Components/Products";
import { CartContext } from "../context/cart-context";
import { CartItem } from "../Components/CartItem";
import "./styles/cartstyle.css";
import { motion } from "framer-motion";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { LogContext } from "../context/logContext";
export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { user, email } = useContext(LogContext);
  const ToCheckOut = useNavigate();

  return (
    <motion.div
      className="cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <p className="head">
        <BsFillBagCheckFill size={30} style={{ color: "green" }} /> My Cart{" "}
      </p>

      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] >= 1) {
            return (
              <>
                {" "}
                <CartItem data={product} />
              </>
            );
          }
        })}
        {user !== "" || email !== "" ? (
          <button className="CheckOut" onClick={() => ToCheckOut("/CheckOut") }>
            <MdShoppingCartCheckout size={28} style={{ color: "green" }} />
            Check Out
          </button>
        ) : (
          <>
            <h1>Sorry Subscribe First</h1>{" "}
            <div className="LinksToSign">
              <Link to="/Subscribe">SignUp</Link>{" "}
              <Link to="/SignIn">SignIn</Link>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
