import React, { useState, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import "./Styles/navbar.css";
import Logo from "../Images/New folder/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { LogContext } from "../context/logContext";
import {ImExit} from 'react-icons/im'

export const Navbar = () => {
  const { user,logOut } = useContext(LogContext);
  const [navBar, setNavBar] = useState(false);
  const NavRef = useRef();
  const NavBarChange = () => {
    NavRef.current.classList.toggle("navbar_responsive");
  };
  const ChangeSticky = () => {
    if (window.scrollY >= 1000) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", ChangeSticky);
  return (
    <>
      <div className={navBar ? "navbar sticky" : "navbar"} ref={NavRef}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <button onClick={NavBarChange} className="btun close">
            <FaTimes />
          </button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/YourCart">
            <MdShoppingCart />
          </NavLink>
          {user === "" ? (
            <>
              <NavLink to="/Subscribe">
                <button className="SubButton">Subscribe</button>
              </NavLink>
              <NavLink to="/SignIn">
                <button className="SubButton">Sign In</button>
              </NavLink>
            </>
          ) : (<>
            <h1 className="User">{user} </h1>
            <button onClick={logOut} className="Log_out"><ImExit size={25}/></button>
            </>
          )}
        </nav>
      </div>
      <button onClick={NavBarChange} className="btun open">
        <FaBars />
      </button>
    </>
  );
};
