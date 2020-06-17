import React, { Fragment, useState } from "react";

// styles
import "../../App.css";
import styled from "styled-components";

// components
import MockupDisplay from "./MockupDisplay";
import DesignPositionPanel from "./DesignPositionPanel";
import DesignInputPanel from "./DesignInputPanel";

// function imported that literally returns NULL??
import HandleScalableMockup from "./HandleScalableMockup";
// initial design and garment state

// another function
// import AddProduct from "./addProduct";

// This code represents the shirt designer tool/page that gets imported into App.js
const DesignShirt = ({
  setDesign,
  setGarment,
  setThumbRender,
  design,
  garment,
  thumbRender,
  product,
  setProduct,
}) => {
  return (
    <Fragment>
      <DesignShirtContainer>
        <MockupDisplay garment={garment} />
        <DesignPositionPanel garment={garment} setGarment={setGarment} />
        <DesignInputPanel
          design={design}
          setDesign={setDesign}
          thumbRender={thumbRender}
          setThumbRender={setThumbRender}
          garment={garment}
          setGarment={setGarment}
          handleScalableMockup={(e) =>
            HandleScalableMockup(
              garment,
              setGarment,
              design,
              setDesign,
              product,
              setProduct
            )
          }
        />
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
