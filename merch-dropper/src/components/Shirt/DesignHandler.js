import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import initialShirtState from "./initialShirtState";
import CloudinaryWidget from "../CloudinaryWidget";

const DesignHandler = ({ design, setDesign, setThumbRender }) => {
  const [designAdded, setDesignAdded] = useState(0);

  useEffect(() => {
    (async () => {
      if (designAdded > 0) {
        const res = await axios.post(
          "https://merchdropper-production.herokuapp.com/api/designs",
          design
        );
        setThumbRender(res);
      }
    })();
  }, [designAdded]);
  return (
    <Fragment>
      <CloudinaryWidget
        design={design}
        setDesign={setDesign}
        designAdded={designAdded}
        setDesignAdded={setDesignAdded}
      />
    </Fragment>
  );
};

export default DesignHandler;
