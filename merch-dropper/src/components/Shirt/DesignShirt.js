import React, { useState } from "react";
import styled from "styled-components";
import MockupDisplay from "./MockupDisplay";
import MockupInput from "./MockupInput";
import ScalableApiHandler from "./ScalableApiHandler";
import CloudinaryHandler from "./CloudinaryHandler";
import ThumbDisplay from "./ThumbDisplay";
import CloudinaryWidget from "../CloudinaryWidget";
import TemplateShirt from "./TemplateShirt";

const DesignShirtContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DesignShirt = () => {
  const [garment, setGarment] = useState({
    color: "Silver",
    colorHex: "",
    printStyle: "dtg",
    artwork:
      "http://oo-prod.s3.amazonaws.com/public/artworks/2020/02/02/378ce90384ce1/original.png",
    designWidth: "6",
    horizontalPlacement: ".5",
    designPlacement: "C",
    offSetFromTop: "2",
    mockUrl: ""
  });

  const [imageUrls, setImageUrls] = useState({
    publicId: "",
    version: 0,
    signature: "",
    eTag: "",
    url: "",
    secureUrl: "",
    croppedUrl: "",
    croppedThumbUrl: ""
  });

  const handleScale = function() {
    ScalableApiHandler(garment, setGarment);
  };

  const handleCloud = function() {
    CloudinaryHandler(garment, imageUrls, setImageUrls);
  };

  return (
    <DesignShirtContainer>
      <div>
        <TemplateShirt garment={garment} />
        <button onClick={handleScale}>Send to SP</button>
      </div>
      <div>
        <ThumbDisplay garment={garment} setGarment={setGarment} />

        <MockupInput
          garment={garment}
          setGarment={setGarment}
          handleScale={handleScale}
        />

        <MockupDisplay
          garment={garment}
          setGarment={setGarment}
          handleCloud={handleCloud}
        />
      </div>
    </DesignShirtContainer>
  );
};

export default DesignShirt;
