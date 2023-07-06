import React, { useState } from "react";
import { useContext } from "react";
import { LogContext } from "../context/logContext";
import { CartContext } from "../context/cart-context";
import { Products } from "../Components/Products";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles/CheckOut.css";
import { CheckOutComponent } from "../Components/CheckOutComponent";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const Thanks = useNavigate();
  let sum = 0;
  const { user, email, Phone, setEmail, setPhone } = useContext(LogContext);
  const [userName, setUserName] = useState("");
  const { cartItems } = useContext(CartContext);
  const [Address, setAddress] = useState("");

  const Schema = yup.object().shape({
    fullName: yup.string().required("Name Is Required"),
    Email: yup.string().email().required("Email Is Required"),
    PhoneNumber: yup.number().positive().required(""),
    Address: yup.string().required("Your Address Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const OnSubmit = ([userName, email, Address, Phone]) => {
    console.log([userName, email, Address, Phone]);
    Thanks("/Thanks");
  };
  return (
    <div className="Checkout">
      {user === "" ? (
        <h1> Sorry , You are not Subscribed Yet</h1>
      ) : (
        <form
          className="CheckOutDetails"
          onSubmit={handleSubmit(OnSubmit([userName, email, Address, Phone]))}
        >
          <h1>One More Step To Get One Of Rider Products</h1>
          <ul>
            <li>
              <label>FullName : </label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                {...register("fullName")}
                placeholder="FullName..."
              />
            </li>
            <li>
              <label {...register("Email")}>Email : </label>{" "}
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </li>
            <li>
              <label {...register("PhoneNumber")}>phone : </label>{" "}
              <input
                value={Phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </li>
            <li>
              <label>Address : </label>{" "}
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                {...register("Address")}
                placeholder="Address..."
              />
            </li>
          </ul>
          <h2>Your Order</h2>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Unit Price</th>
              <th>ToTal</th>
            </tr>

            {Products.map((product) => {
              if (cartItems[product.id] >= 1) {
                return (
                  <>
                    <CheckOutComponent data={product} />
                    <p className="hidden">
                      {
                        (sum =
                          sum +
                          Number(cartItems[product.id]) * Number(product.price))
                      }
                    </p>
                  </>
                );
              }
            })}
          </table>
          <h3>
            <span>Total Price :</span> {sum} $
          </h3>

          <button className="FinishingOrder">Order Now</button>
        </form>
      )}
    </div>
  );
};
