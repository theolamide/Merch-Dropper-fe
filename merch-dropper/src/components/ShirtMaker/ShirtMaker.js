import React, { useState } from "react";
import axios from "axios";

const ShirtMaker = async (garment, setGarment) => {
  console.log(garment);

  let data = await {
    template: { name: "front" },
    product: { id: "canvas-unisex-t-shirt", color: garment.color },
    design: {
      type: garment.printStyle,
      sides: {
        front: {
          artwork: `${garment.artwork}`,
          dimensions: { width: garment.designWidth },
          position: {
            horizontal: garment.designPlacement,
            offset: { top: garment.offSetFromTop }
          }
        }
      }
    },
    output: garment.fileOutput
  };

console.log(data, "DDD AAAA TTTTT  AAAA")

  let config = await {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic OnRlc3RfZUIza2JJTThFRG5OdHEwenBSSU5fZw=="
    }
  };

  async function makeShirt() {
    try {
      const shirtImage = await axios.post(
        "https://cors.x7.workers.dev/https://api.scalablepress.com/v3/mockup",
        data,
        config
      );
      await setGarment({ ...garment, mockUrl: shirtImage.data.url });
    } catch (err) {
      console.log("ERROR:", err);
    }
  }
  makeShirt();
  return <p>{data}</p>
};

export default ShirtMaker;
