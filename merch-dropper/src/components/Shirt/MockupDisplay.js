import React, { Fragment } from "react";
import CloudinaryHandler from "./CloudinaryHandler";
import styled from "styled-components";

const MockImage = styled.img`
  max-height: 485px;
  border: 1px black solid;
  border-radius: 5px;
  margin-right: 20px;
`;

const MockupDisplay = (props) => {
  console.log(props)
  return (
    <Fragment>
      <MockImage src={props.garment.mockUrl} alt="" />
    </Fragment>
  );
};

export default MockupDisplay;
