import React, { useState, Fragment } from "react";
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
          <TemplateShirt garment={garment} />
          <div>
            <button onClick={handleScale}>Send to SP</button>
            <button onClick={handleCloud}>Cloudinary</button>
            <button onClick={handleProduct}>Add To Store</button>
          </div>
        </div>
        <div>
          <ThumbDisplay garment={garment} setGarment={setGarment} />

          <MockupInput
            garment={garment}
            setGarment={setGarment}
            handleScale={handleScale}
          />
        </div>
      </DesignShirtContainer>
      <MockupDisplay
        garment={garment}
        setGarment={setGarment}
        handleCloud={handleCloud}
        images={images}
        setImages={setImages}
        handleProduct={handleProduct}
      />
    </Fragment>
  );
};

export default DesignShirt;

const DesignShirtContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;
