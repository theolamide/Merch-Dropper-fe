import React from "react";
import InventoryList from "./InventoryList";

// Inventory is the highest level component for the inventory display on the dashboard, with InventoryList being rendered below the header. The header of the Inventory component contains the text "Inventory" and the "Add new item" button, which links to the /designshirt component.
function Inventory({ history }) {
  // This is an onClick handler that pushes the user to the /designshirt component
  const addNewItem = (e) => {
    e.preventDefault();
    history.push("/designshirt");
  };

  return (
    <div style={container}>
      <span style={headerStyle}>
        <h1 style={inventoryH1Style}>Inventory</h1>
        <button onClick={addNewItem} style={buttonStyle}>
          Add new item
        </button>
      </span>
      <div style={inventoryStyle}>
        <InventoryList history={history} />
      </div>
    </div>
  );
}

export default Inventory;

// This is the styling for the Inventory component
const container = {
  margin: "0px auto",
  maxWidth: "1120px",
};

const headerStyle = {
  display: "flex",
  width: "100vw",
  maxWidth: "1120px",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "34px",
};

const inventoryH1Style = {
  fontFamily: "Lato",
  fontSize: "30px",
  fontWeight: "bold",
};

const buttonStyle = {
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
  // backgroundColor: "#E5E5E5",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
};
