import React, { Fragment } from "react";
import styled from "styled-components";

const MockImage = styled.img`
  max-height: 485px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 63px 20px 0 0;
`;

const MockupDisplay = ({ garment }) => {
  return (
    <Fragment>
      <MockImage src={garment.mockUrl} />
    </Fragment>
  );
};

export default MockupDisplay;
