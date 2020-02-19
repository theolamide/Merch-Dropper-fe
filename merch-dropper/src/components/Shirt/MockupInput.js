import React from "react";
import SizeSlider from "./SizeSlider";
import Swatch from "./Swatch";
import HorizontalAlign from "./HorizontalAlign";

const MockupInput = ({ garment, setGarment }) => {
  let horizontal = garment.designPlacement;

  return (
    <div>
      <Swatch garment={garment} setGarment={setGarment} />
      <SizeSlider garment={garment} setGarment={setGarment} />
      <HorizontalAlign garment={garment} setGarment={setGarment} />
    </div>
  );
};

export default MockupInput;

