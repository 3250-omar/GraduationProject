import React from "react";
import { FeaturesComponent } from "../Components/FeaturesComponent";
import { NewAddedFeatures } from "../Components/newadded";
import { TbArrowSharpTurnLeft } from "react-icons/tb";
import Description from "../Images/store images/2-PhotoRoom.png-PhotoRoom.png";
import { BsHeartPulseFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { GiBatteries } from "react-icons/gi";
export const Sec3Bike = () => {
  return (
      <div className="our-community1" id="Newfeatures">
        <p className="our-community1__view">
          <TbArrowSharpTurnLeft size={35} /> What New Features we implement ?
        </p>
        <div className="description-image">
          <img src={Description} alt="descriptionimage" className="img" />
          <button className="heartSensor">
            {" "}
            <BsHeartPulseFill style={{ color: "red" }} size={20} />
          </button>
          <button className="PedalLock">
            {" "}
            <AiFillLock style={{ color: "green" }} size={22} />
          </button>
          <button className="Gps">
            {" "}
            <ImLocation2 style={{ color: "rgba(255,0,0,.8)" }} size={22} />{" "}
          </button>
          <button className="LIBattery">
            <GiBatteries size={22} />
          </button>
        </div>
        <div className="our-community1__boards">
          {NewAddedFeatures.map((feature) => (
            <FeaturesComponent data={feature} />
          ))}
        </div>
      </div>
    
  );
};
