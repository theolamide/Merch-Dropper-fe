const scalableData = (garment) => {
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

  return data;
};

export default scalableData;
