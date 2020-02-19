import React, { Fragment } from "react";
import styled from "styled-components";

const HorizontalSelect = styled.select`
margin: -20px 0 0 20px;
`;

const HorizontalAlign = ({ garment, setGarment }) => {
  const { designPlacement } = garment;

  return (
    <Fragment>
      <HorizontalSelect
        name="designPlacement"
        value={designPlacement}
        onChange={(e) =>
          setGarment({
            ...garment,
            [e.target.name]: e.target.value
          })
        }>
        <option value="L">Left</option>
        <option value="LC">Center-Left</option>
        <option value="C">Center</option>
        <option value="RC">Right-Center</option>
        <option value="R">Right</option>
      </HorizontalSelect>
    </Fragment>
  );
};

export default HorizontalAlign;
