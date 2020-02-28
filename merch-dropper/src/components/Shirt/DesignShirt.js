import React, { useState, Fragment } from "react";
import "../../App.css";
import styled from "styled-components";
import MockupDisplay from "./MockupDisplay";
import Swatch from "./Swatch";
import ScalableApiHandler from "./ScalableApiHandler";
import CloudinaryHandler from "./CloudinaryHandler";
import ThumbDisplay from "./ThumbDisplay";
import TemplateShirt from "./TemplateShirt";
import initialShirtState from "./initialShirtState";
import StoreHandler from "./StoreHandler";
import DesignHandler from "./DesignHandler";
import TopSlider from "./TopSlider";
import BottomSlider from "./BottomSlider";
import HorizontalAlign from "./HorizontalAlign";

const DesignShirt = () => {
  const [design, setDesign] = useState(initialShirtState.designInfo);
  const [garment, setGarment] = useState(initialShirtState.garment);
  const [images, setImages] = useState(initialShirtState.cloudinaryInfo);
  const [thumbRender, setThumbRender] = useState();
  const [merchProduct, setMerchProduct] = useState(
    initialShirtState.productInfo
  );

  const handleScale = function() {
    ScalableApiHandler(garment, setGarment);
  };
  const handleCloud = function() {
    CloudinaryHandler(garment, images, setImages);
  };
  const handleProduct = function() {
    console.log(setMerchProduct)
    StoreHandler(merchProduct, setMerchProduct, images);
  };

  return (
    <Fragment>
      <DesignShirtContainer>
        <div>
          <MockupDisplay
            garment={garment}
            setGarment={setGarment}
            handleCloud={handleCloud}
            images={images}
            setImages={setImages}
            handleProduct={handleProduct}
          />
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
            design={design}
            thumbRender={thumbRender}
          />

          <Swatch garment={garment} setGarment={setGarment} />

          <ButtonContainer>
            <button className="designBtn btn btn-primary" onClick={handleScale}>
              Preview Design
            </button>
            <button className="designBtn btn btn-primary" onClick={handleCloud}>
              Save Preview
            </button>
            <button
              className="designBtn btn btn-primary"
              onClick={handleProduct}>
              Add Saved To Store
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
  max-width: 180px;
  flex-direction: column;
  justify-content: space-around;
`;

const DesignInterface = styled.div`
  margin: 63px 0 0 15px;

  button {
    margin-bottom: 8px;
  }
`;
