import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

const InventoryCard = (props) => {
  const [imgIsHovered, setImgIsHovered] = useState(false);

  console.log("This is imgIsHovered: ", imgIsHovered);

  const deleteItem = (e) => {
    e.preventDefault();
    console.log("This is props: ", props);
    axios
      .delete(
        `https://merchdropper-production.herokuapp.com/api/products/${props.shirtID}`
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log("This is err in deleteItem: ", err));
  };

  return (
    <div style={cardContainer}>
      <img
        onMouseEnter={() => setImgIsHovered(true)}
        onMouseLeave={() => setImgIsHovered(false)}
        src={props.fullSizeURL}
        style={imgStyle}
      />
      <div style={buttonContainer}>
        {imgIsHovered ? (
          <button
            onMouseEnter={() => setImgIsHovered(true)}
            onMouseLeave={() => setImgIsHovered(false)}
            onClick={deleteItem}
            style={hover}
          >
            Delete listing
          </button>
        ) : (
          <button
            onMouseEnter={() => setImgIsHovered(true)}
            onMouseLeave={() => setImgIsHovered(false)}
            onClick={deleteItem}
            style={hide}
          >
            Delete listing
          </button>
        )}
      </div>
    </div>
  );
};

export default InventoryCard;


const imgStyle = {
  width: "352px",
};

const cardContainer = {
  width: "352px",
  margin: "0px 16px 16px",
  textAlign: "center",
};

const hover = {
  width: "200px",
  height: "48px",
  color: "#FF3030",
  border: "3px solid #FF3030",
  boxSizing: "border-box",
  borderRadius: "8px",
  transition: "opacity ease 1s",
};

const hide = {
  width: "200px",
  height: "48px",
  color: "#FF3030",
  border: "3px solid #FF3030",
  boxSizing: "border-box",
  borderRadius: "8px",
  opacity: "0",
  transition: "opacity ease 1s",
  // display: "none",
};

const buttonContainer = {
  maxWidth: "100%",
  height: "48px",
  margin: "10px 10px",
};