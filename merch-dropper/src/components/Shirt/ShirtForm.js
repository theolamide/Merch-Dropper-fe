import React, { Fragment } from "react";
import ColorPicker from "./ColorPicker";
// import ShirtMaker from "./ShirtMaker";

const ShirtForm = ({ garment, setGarment}) => {



  const { designWidth, designPlacement, offSetFromTop } = garment;
    const handleChange = (e) => {
    setGarment({ ...garment, [e.target.name]: e.target.value });
  };


  return (
    <Fragment>

        {/* <ColorPicker
          garment={garment}
          setGarment={setGarment}
          handleChange={handleChange}
        /> */}
        {/* <label htmlFor="designWidth">Design Width</label>
        <input
          type="number"
          name="designWidth"
          value={designWidth}
          onChange={handleChange}
        /> */}
        <label htmlFor="designPlacement">Horizontal Placement</label>
        <select
          name="designPlacement"
          value={designPlacement}
          onChange={handleChange}>
          <option value="L">Left</option>
          <option value="LC">Center-Left</option>
          <option value="C">Center</option>
          <option value="RC">Right-Center</option>
          <option value="R">Right</option>
        </select>
        {/* <label htmlFor="offSetFromTop">Inches From Top</label>
        <input
          type="number"
          name="offSetFromTop"
          value={offSetFromTop}
          onChange={handleChange}
        /> */}

    </Fragment>
  );
};

export default ShirtForm;
