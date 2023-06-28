import React, { useState } from "react";
import { Bikes } from "../Components/bikesinCarousel";
import { BiDownArrowAlt } from "react-icons/bi";
import "./styles/Storestyle.css";
import { Products } from "../Components/Products";
import { Product } from "../Components/product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TopSlideStoreImag } from "../Components/TopslidestoreImg";
import Photo from "../Images/store images/Primaryform.png";
import kit from "../Images/1500W+DC+ALL+PARTS-removebg-preview.png";
import finalProduct from "../Images/model-a-side-removebg-preview.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export const Store = () => {
  const ToCart = useNavigate();
  const [searchItem, SetSearchItem] = useState("");

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const Bikeontop = Bikes.map((bike) => (
    <TopSlideStoreImag data={bike.imgurl} name={bike.name} />
  ));
  return (
    <motion.div
      className="the-store"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <h1 className="heading">
        <span>S</span>tore
      </h1>
      <div className="ToDo">
        <img src={Photo} alt="primary-bike" className="animateShow firstimg" />
        <span className="animateShow plus"> + </span>
        <img src={kit} alt="kit" className="animateShow secimg" />
        <span className="animateShow equal"> = </span>
        <img src={finalProduct} alt="e-bike" className="animateShow thirdimg" />
      </div>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Bikeontop}
      </Carousel>

      <div className="arrow">
        <BiDownArrowAlt size="10rem" className="arrow-down" color=" #4cc0ef" />
        <BiDownArrowAlt size="10rem" className="arrow-down" color=" #4cc0ef" />
      </div>
      <div className="products">
        <h2 id="Collect">Collect Your Bike</h2>
        <div className="ContaingSearch">
        <input
          className="Searching"
          type="search"
          onChange={(e) => SetSearchItem(e.target.value)}
          placeholder="Search..."
        />
        </div>
        <div className="products-items">
          {Products.filter((user)=>(user.name).toLowerCase().includes(searchItem.toLowerCase())).map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
