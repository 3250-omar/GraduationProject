import React from "react";
import { Link } from "react-router-dom";
import "./styles/SignIn.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";


export const Alreadyexists = () => {
  const Style = yup.object().shape({
    Email: yup.string().email().required(),
    Password: yup.string().min(5).required(),
  });
  const OnSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Style),
  });
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
    <form
      className="Sign_in Sign_in_animation "
      onSubmit={handleSubmit(OnSubmit)}
    >
      <h1>
        <span className="special-ch">R</span>ider
      </h1>
      <p>Sign In</p>
      <input
        type="text"
        placeholder="Email"
        id="email"
        {...register("Email")}
      />
      <p className="error">{errors.Email && "inValid Email"}</p>
      <input
        type="password"
        placeholder="Password"
        id="password"
        {...register("Password")}
      />
      <p className="error">{errors.Password && "inValid Password"}</p>
      <button>Sign In</button>
      <div className="Dont_have">
        Dont have an account?<Link to="/Subscribe"> Sign Up</Link>
      </div>
    </form>
    </motion.div>
  );
};
