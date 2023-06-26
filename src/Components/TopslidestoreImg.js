import React from "react";
export const TopSlideStoreImag = (props) => {
  return<>
   <img src={props.data} alt="productImg" />
   <p>{props.name}</p>
  </>
};
