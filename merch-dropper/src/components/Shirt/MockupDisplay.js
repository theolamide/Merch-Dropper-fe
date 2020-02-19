import React, { Fragment } from "react";
import CloudinaryHandler from "./CloudinaryHandler";

const MockupDisplay = (props) => {
  console.log(props)
  return (
    <Fragment>
      <img src={props.garment.mockUrl} alt="" />
    </Fragment>
  )
}

export default MockupDisplay
