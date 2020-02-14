import React, { useState, Fragment } from "react";
import ThumbDisplay from "./ThumbDisplay";
import ShirtForm from "./ShirtForm";
import ShirtDisplay from './ShirtDisplay'

const Shirt = () => {
  const [garment, setGarment] = useState({
    color: "",
    printStyle: "dtg",
    artwork: "",
    designWidth: "7",
    designPlacement: "C",
    offSetFromTop: "2",
    fileOutput: { width: 400, height: 800, padding: 20, format: "png" },
    mockUrl: ""
  });



  return (
    <Fragment>
      <ThumbDisplay garment={garment} setGarment={setGarment} />
      <ShirtForm garment={garment} setGarment={setGarment} />
      <ShirtDisplay mockUrl={garment.mockUrl} />
    </Fragment>
  );
};

export default Shirt;
