import React, { Fragment } from "react";
import CloudinaryHandler from "./CloudinaryHandler";

const MockupDisplay = (props) => {
  console.log(props)
  return (
    <Fragment>
      <img src={props.garment.mockUrl} alt="" />
      <button onClick={props.handleCloud}>Cloud it.</button>
    </Fragment>
  )
}

export default MockupDisplay
