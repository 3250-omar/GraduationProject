import React from "react";
import "./styles/homeStyle.css";
import { useNavigate } from "react-router-dom";
import { BsMouse } from "react-icons/bs";
import Cover from "../Images/Sec2 photos/section 2 pic1.jpg";
import BgVideo from "../Images/video.mp4";
import Part3Bg from "../Images/Section2 Background.jpg";
import { BiUpArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { Sec3Bike } from "../Components/Sec3Bike";
export const Home = () => {
  const TOStore = useNavigate();
  const ClickHandler = () => {
    TOStore("/store");
  };
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section id="sec1">
          <div className="left">
            <h1 className="title">
              <span className="name-of-us">Rider</span> The Best Choice For
              <span className="special-word"> Bikers</span>
            </h1>
            <div className="buttons">
              <a href="#sec2">
                <button className="start">Get Started</button>
              </a>
              <a href="#Newfeatures">
                <button className="feature">New Features</button>
              </a>
            </div>
            <div className="scroll">
              <BsMouse size={32} /> scroll to see more sections
            </div>
          </div>
          <video src={BgVideo} autoPlay loop muted />
          <div className="Uparrow">
            {" "}
           <a href="#"> <BiUpArrowCircle size={40} /></a>
          </div>
        </section>

        <section id="sec2">
          <div className="part1part2">
            <div className="part1">
              <img src={Cover} alt="enjoyable" />
            </div>
            <div className="part2  ">
              <h5>RIDE BIKES! BE GENEROUS! HAVE FUN!</h5>
              <p className="header ">Buy A Bike, Give A Bike</p>
              <h3>
                When You Buy a Bike from Rider,
                <br /> Your First Ride Will be Awsome
              </h3>
              <p className="desc">
                We don't do sales. We do community. Here at Rider our mission is
                to create sustainable communities two wheels at a time. We're
                working with you to create a better world, by doing business to
                do good. For every Rider Bike purchased, bike riders will be in
                safe which our bike is more secuire than any other products ,
                <b>the important thing is it is suitable for Children also </b>
              </p>
              <button onClick={() => ClickHandler()} className="insertbtn">
                Shop Bikes
              </button>
            </div>
          </div>
          <div className="part3part4">
            <div className="part3 ">
              <img src={Part3Bg} alt="Keep Your Money" />
            </div>
            <div className="part4">
              <h5>THE BEST DEAL ON YOUR ELECTRIC BIKE</h5>
              <p className="header ">Direct to You Pricing</p>
              <h3>Affordable Transportation for a Sustainable Future</h3>
              <p className="desc">
                Why are Rider e-Bikes 1/2 the price of other e-bikes on the
                market? Because we sell direct to you, the customer. Our mission
                is to create a sustainable future, two wheels at a time and we
                do that by making e-bikes affordable for you. We intentionally
                don't sell through dealers, distributors, or retailers because
                that way of selling means a higher price tag for you. We build
                our kits and bike wheels with love and care here in Seattle and
                sell direct to you, so you won't see the large retail markup
                that would be present if you were buying from a third party.
                That way you're always getting the best deal on your electric
                bike.
              </p>
              <button onClick={() => ClickHandler()} className="insertbtn">
                Shop Bikes
              </button>
            </div>
          </div>
        </section>

        <section id="sec3">
          <Sec3Bike />
        </section>
      </motion.div>
    </>
  );
};
