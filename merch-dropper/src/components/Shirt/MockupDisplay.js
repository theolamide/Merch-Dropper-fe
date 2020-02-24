import React, { Fragment } from "react";
import CloudinaryHandler from "./CloudinaryHandler";
import styled from "styled-components";

const MockupDisplay = (props) => {
  return (
    <Fragment>
      <img src={props.garment.mockUrl} alt="" />

    </Fragment>
  );
};

export default MockupDisplay;
