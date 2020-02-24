import React from "react";
import styled from "styled-components";



const Swatch = ({ garment, setGarment }) => {

  return (
    <SwatchBox>
      {color.map((color, index) => (
        <a href="#" key={index}><SwatchSquare
          name="color"
          value={color}
          id={color}
          key={color}
          title={color}
          className="swatchSquare"
          onClick={()=> setGarment({...garment, color: color, colorHex: hex[index]})}
          style={{ backgroundColor: hex[index] }}></SwatchSquare></a>
      ))}
    </SwatchBox>
  );
};

export default Swatch;

const SwatchBox = styled.div`

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 280px;

  a:focus {
    outline: solid 1px black;

  }
`;

const SwatchSquare = styled.div`
  width: 20px;
  height: 20px;
  margin: 1px;
  border: solid 1px #ccc;
  border-radius: 3px;
`;

const hex = [
  "#42B2D0",
  "#DFE1E5",
  "#5E646D",
  "#AEADB3",
  "#F1457F",
  "#000000",
  "#62463B",
  "#D66C1C",
  "#D12B43",
  "#D36067",
  "#595B5D",
  "#ADA9A6",
  "#00789A",
  "#00563F",
  "#F0A62D",
  "#F0F5FF",
  "#847363",
  "#88AD68",
  "#6E8BC4",
  "#77ACC8",
  "#D9C4AF",
  "#157345",
  "#8ACA99",
  "#AFD1EA",
  "#E9D47B",
  "#640D02",
  "#14213D",
  "#ABD6E7",
  "#495928",
  "#F16300",
  "#A49696",
  "#C02533",
  "#DEE0DF",
  "#E2D2B8",
  "#FEC0C5",
  "#000000",
  "#FFFFFF",
  "#6686AE",
  "#03BDBC",
  "#824393",
  "#1155B1",
  "#FFFFFF",
  "#FFF9C0",
  "#585755",
  "#4FD0A1",
  "#FFC3B5",
  "#A89BD6",
  "#3A3430",
  "#EC7670",
  "#3096E2",
  "#645D4B",
  "#FFB3D1",
  "#D1FEFF",
  "#FFFEDE",
  "#82B9FF",
  "#C03545",
  "#088CBE",
  "#305746",
  "#5F6174",
  "#FEEEBE",
  "#953543",
  "#619DBE",
  "#67807F",
  "#EAF5F2",
  "#F4D2D9",
  "#CDE3E1",
  "#3D7256",
  "#BF8583",
  "#51563F",
  "#C2DCDD",
  "#E4EFF1",
  "#E8DDE5",
  "#C7DFD1",
  "#E6D3C5",
  "#E1A791",
  "#878183",
  "#FAB19E",
  "#9E6460",
  "#51563F",
  "#2B1518",
  "#8E8387",
  "#FECCAB",
  "#DDCD93",
  "#000000",
  "#3D4C3A",
  "#88353C",
  "#538ED6",
  "#84BEDF",
  "#E4DBC6",
  "#F7B4C1",
  "#B55851",
  "#A5ECEE",
  "#E0F1F5",
  "#A03033",
  "#F1D9C1"
];

const color = [
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

