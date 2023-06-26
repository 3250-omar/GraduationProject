import React, { useContext, useState } from "react";
import FormImage from "../Images/Form Photo.jpg";
import "./styles/formstyle.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UnKnownPerson from "../Images/Materials/Unknown_person.jpg";
import { useNavigate } from "react-router-dom";
import { LogContext } from "../context/logContext";
import { motion } from "framer-motion";




export const Form = () => {
  const { user, setUser } = useContext(LogContext);
  const [customer, setCustomer] = useState("");
  const Navigate = useNavigate();
  const Schema = yup.object().shape({
    fullName: yup.string().required("Name Is Required"),
    Email: yup.string().email().required("Email Is Required"),
    PhoneNumber: yup.number().positive().required("omaik"),
    Password: yup.string().min(4).max(25).required(),
    ConfirmedPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "not matched")
      .required(),
  });

  const OnSubmit = (data) => {
    console.log(data);
    setUser(customer)
    console.log(user)
    Navigate("/Subscribedsuccessfully");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  console.log(customer);
  return (
    <>
      <motion.div className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="BeOneOfUs">
          <img src={UnKnownPerson} alt="New Member" />
          <h1>Become One Of Us</h1>
        </div>
        <div className="Form">
          <div className="form-right">
            <form onSubmit={handleSubmit(OnSubmit)}>
              <li>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  {...register("fullName")}
                  onChange={(e) => {
                    setCustomer(e.target.value);
                  }}
                />
                <p>{errors.fullName?.message}</p>
              </li>
              <li>
                <label htmlFor="email">Gmail</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  {...register("Email")}
                />
                <p>{errors.Email?.message}</p>
              </li>
              <li>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone"
                  id="phone"
                  {...register("PhoneNumber")}
                />
                <p>{errors.PhoneNumber && "Phone Number Required"}</p>
              </li>
              <li>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  {...register("Password")}
                />
                <p>{errors.Password &&'Password Required'}</p>
              </li>
              <li>
                <label htmlFor="password">confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="password"
                  {...register("ConfirmedPassword")}
                />
                <p>{errors.ConfirmedPassword?.message}</p>
              </li>
              <Link to="/SignIn">Already Have An Account ?</Link>

              <button type="submit" className="submitbtn">Submit</button>
            </form>
          </div>
          <div className="form-left">
            <img src={FormImage} alt="formImage" />
          </div>
        </div>
      </motion.div>
    </>
  );
};
