import React, { useState, Fragment } from "react";
import "../../App.css";
import styled from "styled-components";
import MockupDisplay from "./MockupDisplay";
import Swatch from "./Swatch";
import ScalableApiHandler from "./ScalableApiHandler";
import ThumbDisplay from "./ThumbDisplay";
import TemplateShirt from "./TemplateShirt";
import initialShirtState from "./initialShirtState";
import DesignHandler from "./DesignHandler";
import FullHandle from "./FullHandle";
import TopSlider from "./TopSlider";
import BottomSlider from "./BottomSlider";
import HorizontalAlign from "./HorizontalAlign";

const DesignShirt = () => {
  const [design, setDesign] = useState(initialShirtState.designInfo);
  const [garment, setGarment] = useState(initialShirtState.garment);
  const [thumbRender, setThumbRender] = useState();

  const handleScale = function() {
    ScalableApiHandler(garment, setGarment);
  };

  const addProduct = function() {
    FullHandle(garment);
  };

  return (
    <Fragment>
      <DesignShirtContainer>
        <div>
          <MockupDisplay garment={garment} />
        </div>
        <div>
          <TopSlider garment={garment} setGarment={setGarment} />
          <TemplateShirt garment={garment} setGarment={setGarment} />
          <HorizontalAlign garment={garment} setGarment={setGarment} />
          <BottomSlider garment={garment} setGarment={setGarment} />
        </div>
        <DesignInterface>
          <DesignHandler
            design={design}
            setDesign={setDesign}
            setThumbRender={setThumbRender}
          />
          <ThumbDisplay
            garment={garment}
            setGarment={setGarment}
            thumbRender={thumbRender}
          />

          <Swatch garment={garment} setGarment={setGarment} />

          <ButtonContainer>
            <button className="designBtn btn btn-primary" onClick={handleScale}>
              Preview Design
            </button>
            <button className="designBtn btn btn-primary" onClick={addProduct}>
              Add To Store
            </button>
          </ButtonContainer>
        </DesignInterface>
      </DesignShirtContainer>
    </Fragment>
  );
};

export default DesignShirt;

const DesignShirtContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  // padding: 10px;
  display: flex;
  max-width: 300px;
  flex-direction: row;
  justify-content: space-around;
`;

const DesignInterface = styled.div`
  margin: 63px 0 0 15px;

  button {
    margin-bottom: 8px;
  }
`;
