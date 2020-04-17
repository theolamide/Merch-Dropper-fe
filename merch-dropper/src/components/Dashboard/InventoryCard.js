import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

let style = {
  margin: "16px 0px",
  width: "352px",
  textAlign: "center"
};

const InventoryCard = (props) => {
  return (
    <div style={style}>
      <img src={props.fullSizeURL} style={style} />
      <button>Delete Product</button>
    </div>
  );
};

export default InventoryCard;
