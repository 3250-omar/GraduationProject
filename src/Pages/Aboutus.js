import React from "react";
import "./styles/About.css";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    ></motion.div>
  );
};
