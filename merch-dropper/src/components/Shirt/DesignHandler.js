import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import initialShirtState from "./initialShirtState";
import CloudinaryWidget from "../CloudinaryWidget";

const DesignHandler = () => {
  const [design, setDesign] = useState(initialShirtState.designInfo);
  useEffect(() => {
    if (design.design_url != "") {
      const res = axios.post("http://localhost:5032/api/designs", design);
      console.log("RESPONDING", res)
    }
  }, []);
  return (
    <Fragment>
      <CloudinaryWidget design={design} setDesign={setDesign} />
    </Fragment>
  );
};

export default DesignHandler;
