import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

let style = {
  margin: "16px 0px",
  width: "352px",
  textAlign: "center",
};

const InventoryCard = (props) => {
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
    <div style={style}>
      <img src={props.fullSizeURL} style={style} />
      <button onClick={deleteItem}>Delete Product</button>
    </div>
  );
};

export default InventoryCard;
