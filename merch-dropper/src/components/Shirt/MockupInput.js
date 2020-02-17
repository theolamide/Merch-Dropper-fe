import React from "react";
import ShirtForm from "./ShirtForm";
import SizeSlider from "./SizeSlider";
import Swatch from "./Swatch";

const MockupInput = (props) => {
  console.log(props, "Props received by mockupinput");
  return (
    <div>
      <Swatch garment={props.garment} setGarment={props.setGarment} />
      <ShirtForm garment={props.garment} setGarment={props.setGarment} />
      <SizeSlider garment={props.garment} setGarment={props.setGarment} />
    </div>
  );
};

export default MockupInput;
