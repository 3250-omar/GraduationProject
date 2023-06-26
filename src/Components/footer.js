import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/New folder/logo.png";
import { FiFacebook } from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "./Styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="MiddlePart">
        <Link to="/">
          <FiFacebook className="icons" size="25" />
        </Link>
        <Link to="/">
          <FaGithub className="icons" size="25" />
        </Link>
        <Link to="/">
          <FaInstagram className="icons" size="25" />
        </Link>
      </div>
      <h4>Made By</h4>
      <h5>Rider Team As A Graduation Project</h5>
      <Link to="/">
        <button className="FaceFollow">
          <FiFacebook size="20" /> Follow us
        </button>
      </Link>
      <div className="copyright">
      &copy;2023 OmarMostafa
      </div>
    </div>
  );
};
