import React from "react";
import "../Components/Styles/AfterOrder.css";
import {AiFillCaretRight} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogContext } from "../context/logContext";
export const AfterOrder = () => {
    const { user, email, Phone, setEmail, setPhone } = useContext(LogContext);
    const AfterOrder =useNavigate()
  return (<div className="Thanks">
    {user!==''& email!=='' &Phone!==0 ?
    (
      <div className="Conten">
        <h1> Awsome!🎈🎈</h1>
        <ol>
          <li>
            <p>
              We Recieved Your Order And Will contact With You To tell You The
              Receving Time{" "}
            </p>
          </li>
          <li>
            <h4><AiFillCaretRight size={40} style={{color:'red'}}/> 
              First Order Will Be In Cash And After That We Will Open Online
              Payment For You 
            </h4>
          </li>
        </ol>
        <button onClick={()=>AfterOrder('/')}>Ok</button>
      </div>
    ) : <h1>Sorry You arent Subscribed</h1>}
    </div>
  );
};
