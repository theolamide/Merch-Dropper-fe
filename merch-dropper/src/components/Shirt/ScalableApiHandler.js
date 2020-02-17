import React, { useState } from "react";
import axios from "axios";

const ScalableApiHandler = async (garment, setGarment) => {
console.log(garment, setGarment, "Garment and setGarment received by ScalableApiHandler")
  let data = {
    template: { name: "front" },
    product: { id: "canvas-unisex-t-shirt", color: garment.color },
    design: {
      type: garment.printStyle,
      sides: {
        front: {
          artwork: garment.artwork,
          dimensions: { width: garment.designWidth },
          position: {
            horizontal: garment.designPlacement,
            offset: { top: garment.offSetFromTop }
          }
        }
      }
    }
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Basic OnRlc3RfZUIza2JJTThFRG5OdHEwenBSSU5fZw=="
    }
  };

  async function makeShirt() {
    try {
      const shirtImage = await axios.post(
        "https://merchdropper-production.herokuapp.com/api/products/mockup",
        data,
        config
      );

      const response = await shirtImage;

      setGarment({ ...garment, mockUrl: response.data.URL });
    } catch (err) {
      console.log("ERROR:", err);
    }
  }
  makeShirt();

  return <div></div>;
};

export default ScalableApiHandler;
