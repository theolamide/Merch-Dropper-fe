import React from "react";
import TopSlider from "./TopSlider";
import TemplateShirt from "./TemplateShirt";
import HorizontalAlign from "./HorizontalAlign";
import BottomSlider from "./BottomSlider";

const DesignPositionPanel = ({garment, setGarment}) => {
  return (
    <div>
      <TopSlider garment={garment} setGarment={setGarment} />
      <TemplateShirt garment={garment} setGarment={setGarment} />
      <HorizontalAlign garment={garment} setGarment={setGarment} />
      <BottomSlider garment={garment} setGarment={setGarment} />
    </div>
  );
};

export default DesignPositionPanel;
