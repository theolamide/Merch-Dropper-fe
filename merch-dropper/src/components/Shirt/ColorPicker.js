import React, { Fragment } from "react";

const ColorPicker = (props) => {
  const { garment, handleChange } = props;

  const shirtColors =
    // Canvas Shirt Colors
    [
      "Aqua",
      "Ash",
      "Asphalt",
      "Athletic Heather",
      "Berry",
      "Black",
      "Brown",
      "Burnt Orange",
      "Canvas Red",
      "Coral",
      "Dark Gray Heather",
      "Deep Heather",
      "Deep Teal",
      "Evergreen",
      "Gold",
      "Heather Blue",
      "Heather Brown",
      "Heather Green",
      "Heather Navy",
      "Heather Slate",
      "Heather Tan",
      "Kelly",
      "Leaf",
      "Light Blue",
      "Maize Yellow",
      "Maroon",
      "Navy",
      "Ocean Blue",
      "Olive",
      "Orange",
      "Pebble Brown",
      "Red",
      "Silver",
      "Soft Cream",
      "Soft Pink",
      "Solid Black Blender",
      "Solid White Blender",
      "Steel Blue",
      "Teal",
      "Team Purple",
      "True Royal",
      "White",
      "Yellow",
      "Dark Gray",
      "Heather Kelly",
      "Heather Orange",
      "Heather Team Purple",
      "Vintage Black",
      "Heather Red",
      "Heather True Royal",
      "Army",
      "Heather Raspberry",
      "Mint",
      "Natural",
      "Baby Blue",
      "Cardinal",
      "Turquoise",
      "Forest Green",
      "Heather Midnight Navy",
      "Heather Yellow Gold",
      "Heather Cardinal",
      "Heather Deep Teal",
      "Heather Forest",
      "Heather Mint",
      "Charity Pink",
      "Heather Dusty Blue",
      "Heather Grass Green",
      "Heather Mauve",
      "Heather Military Green",
      "Heather Prism Dusty Blue",
      "Heather Prism Ice Blue",
      "Heather Prism Lilac",
      "Heather Prism Mint",
      "Heather Prism Peach",
      "Heather Prism Sunset",
      "Heather Storm",
      "Heather Sunset",
      "Mauve",
      "Military Green",
      "Oxblood Black",
      "Storm",
      "Sunset",
      "Tan",
      "Black Heather",
      "Heather Olive",
      "Heather Maroon",
      "Heather Columbia Blue",
      "Heather Aqua",
      "Heather Stone",
      "Pink",
      "Heather Clay",
      "Heather Sea Green",
      "Heather Ice Blue",
      "Rust",
      "Heather Peach"
    ];

  return (
    <Fragment>
      <select name="color" value={garment.color} onChange={handleChange}>
        <option value="">Select Color</option>
        {shirtColors.map((color) => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </Fragment>
  );
};
export default ColorPicker;

