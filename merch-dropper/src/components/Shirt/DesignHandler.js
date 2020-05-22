import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import CloudinaryWidget from "../CloudinaryWidget";

const DesignHandler = ({ design, setDesign, setThumbRender }) => {
  const [designAdded, setDesignAdded] = useState(0);

  useEffect(() => {
    (async () => {
      if (designAdded > 0) {
        axios
          .post(
            "https://merchdropper-production.herokuapp.com/api/designs",
            design
          )
          .then((res) => {
            setThumbRender(res);
          })
          .catch((err) => {
            console.log(err);
          });
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
