import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import "./styles/NotFound.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NOTFOUND = () => {
  return (
    <motion.div
      className="NotFound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <h1>
        {" "}
        <RiErrorWarningFill size={38} style={{ color: "red" }} /> Oops, This
        Page isnt Found
      </h1>
      <Link to="/">Back To Home</Link>
    </motion.div>
  );
};
