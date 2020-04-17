import React from "react";
import InventoryList from "./InventoryList";
import InventoryCard from "./InventoryCard";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  //   position: "relative",
  color: "white",
  width: "160px",
  height: "48px",
  left: "1120px",
  top: "526px",
  background: "#4455EE",
  borderRadius: "8px",
};

const inventoryStyle = {
  margin: "0 auto",
  maxWidth: "1080px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
};

// This is the highest level component for the inventory display on the dashboard.
// The inventory displays all saved products from the user
function Inventory({ history }) {
  return (
    <div>
      <span style={headerStyle}>
        <h1>Inventory</h1>
        <button style={buttonStyle}>Add new item</button>
      </span>
      <div style={inventoryStyle}>
        <InventoryList history={history} />
      </div>
    </div>
  );
}

export default Inventory;
