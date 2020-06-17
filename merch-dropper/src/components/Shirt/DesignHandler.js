import React, { useState, Fragment, useEffect } from "react";
import CloudinaryWidget from "../CloudinaryWidget";
import { axiosWithEnv } from "../../utils/axiosWithEnv";
import axios from "axios";

const DesignHandler = ({ design, setDesign, setThumbRender }) => {
  const [designAdded, setDesignAdded] = useState(0);

  useEffect(() => {
    (async () => {
      if (designAdded > 0) {
        const res = await axiosWithEnv().post("/api/designs", design);
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
