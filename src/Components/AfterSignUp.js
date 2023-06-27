import React, { useContext } from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { LogContext } from "../context/logContext";
import "./Styles/SuccesedSignUp.css";
import { Link } from "react-router-dom";
export const AfterSignUp = () => {
  const { user } = useContext(LogContext);
  return (
    <div className="SignedUp">
      {user === "" ? (
        <h1> Sorry , You are not Subscribed Yet</h1>
      ) : (
        <div className="SignedUp__UserWelcome">
          <MdCheckCircleOutline
            size={40}
            style={{ color: "green" }}
            className="ani"
          />{" "}
          <span className="ani">
            Welcome <span className="user">{user}</span>
          </span>
        </div>
      )}
      <div className="links-to-leave">
        <Link to="/" className="BackHome">
          Back to Home
        </Link>
        <Link to="/store" className="BackHome">
          Back To Store
        </Link>
        {user === "" && (
          <Link to="/Subscribe" className="subsc">
            Subscribe
          </Link>
        )}
      </div>
    </div>
  );
};
