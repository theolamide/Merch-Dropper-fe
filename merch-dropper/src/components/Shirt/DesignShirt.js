import React, { useState, Fragment } from "react";
import "../../App.css";
import styled from "styled-components";
import MockupDisplay from "./MockupDisplay";
import DesignPositionPanel from "./DesignPositionPanel";
import DesignInputPanel from "./DesignInputPanel";
import HandleScalableMockup from "./HandleScalableMockup";
import initialShirtState from "./initialShirtState";
import AddProduct from "./AddProduct";

const DesignShirt = () => {
  const [design, setDesign] = useState(initialShirtState.designInfo);
  const [garment, setGarment] = useState(initialShirtState.garment);
  const [thumbRender, setThumbRender] = useState();

  const handleScalableMockup = function() {
    HandleScalableMockup(garment, setGarment);
  };
  const addProduct = function() {
    AddProduct(garment);
  };

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
          handleScalableMockup={handleScalableMockup}
          addProduct={addProduct}
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
