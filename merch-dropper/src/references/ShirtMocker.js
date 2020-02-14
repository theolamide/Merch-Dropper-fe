import React, { useEffect, useState } from "react";
import axios from "axios";

const ShirtMocker = (props) => {
  const [shirtState, setShirtState] = useState({
    template: { name: "front" },
    product: { id: "canvas-unisex-t-shirt", color: "White" },
    design: {
      type: "dtg",
      sides: {
        front: {
          artwork: "",
          dimensions: { width: "3.5" },
          position: { horizontal: "LC", offset: { top: "1.25" } }
        }
      }
    },
    output: { width: "400", height: "400", format: "png" }
  });

  useEffect(
    (props) => {
      effect;
      return () => {
        cleanup;
      };
    },
    [input]
  );

  async function shirtFunk() {
    var myShirt = await axios.post(
      "https://cors.x7.workers.dev/https://api.scalablepress.com/v3/mockup",
      data,
      shirtHeaders
    );

    console.log(myShirt.data);
  }

  shirtFunk();

  return <div></div>;
};

export default ShirtMocker;
