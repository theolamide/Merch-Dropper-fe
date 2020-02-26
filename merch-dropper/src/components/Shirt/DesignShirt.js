import React, { useState, Fragment } from "react";
import "../../App.css";
import styled from "styled-components";
import MockupDisplay from "./MockupDisplay";
import MockupInput from "./MockupInput";
import ScalableApiHandler from "./ScalableApiHandler";
import CloudinaryHandler from "./CloudinaryHandler";
import ThumbDisplay from "./ThumbDisplay";
import CloudinaryWidget from "../CloudinaryWidget";
import TemplateShirt from "./TemplateShirt";
import initialShirtState from "./initialShirtState";
import StoreHandler from "./StoreHandler";

const DesignShirt = () => {
  const [garment, setGarment] = useState(initialShirtState.garment);
  const [images, setImages] = useState(initialShirtState.cloudinaryInfo);
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
          <TemplateShirt garment={garment} />
          <ButtonContainer>
            <button className="designBtn btn btn-primary" onClick={handleScale}>Send to SP</button>
            <button className="designBtn btn btn-primary" onClick={handleCloud}>Cloudinary</button>
            <button className="designBtn btn btn-primary" onClick={handleProduct}>Add To Store</button>
          </ButtonContainer>
        </div>
        <DesignInterface>
          <CloudinaryWidget />
          <ThumbDisplay garment={garment} setGarment={setGarment} />

          <MockupInput
            garment={garment}
            setGarment={setGarment}
            handleScale={handleScale}
          />
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
padding: 10px 0;
display: flex;
flex-direction: row;
justify-content: space-around;

`

const DesignInterface = styled.div`
margin-left: 20px;

button {
  margin-bottom: 15px;

}

`