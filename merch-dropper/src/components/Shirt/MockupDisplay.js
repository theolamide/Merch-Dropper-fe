import React, { Fragment } from "react";
import styled from "styled-components";

const MockImage = styled.img`
  max-height: 485px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 63px 20px 0 0;
`;

const MockupDisplay = (props) => {
  return (
    <Fragment>
      <MockImage src={props.garment.mockUrl} alt="" />
    </Fragment>
  );
};

export default MockupDisplay;
