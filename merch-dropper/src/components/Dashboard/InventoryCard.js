import React, { useState } from "react";
import { axiosWithEnv } from "../../utils/axiosWithEnv";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

// The purpose of the InventoryCard component is to render each product in a user's inventory. The InventoryList component calls the InventoryCard components using a .map method as long as the inventory array length is greater than 0.

const InventoryCard = (props) => {
  const [imgIsHovered, setImgIsHovered] = useState(false);
  const [isInStock, setIsInStock] = useState(true);
  // This const sets the state for the card based on whether or not the cursor is hovering over one of the cards.
  // The intent was to give a clean way of showing / unhiding a delete/edit button. A cleaner implementation would be preferred, as we just needed to implement delete functionality and didn't have time to implement the edit/delete flow UX initially designed for us.

  // deleteItem is an event handler that makes an axios.delete request to the back end when a user clicks on the Delete button. This should be an axiosWithAuth request, but we ran into issues implementing axiosWithAuth in the Inventory components where the inventory would only load with plain axios calls.
  const deleteItem = (e) => {
    console.log("made it");
    e.preventDefault();
    axiosWithEnv()
      .delete(`/api/products/${props.id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log("This is err in deleteItem: ", err));
  };

  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  // This component returns a card with an image of the shirt/model and a "Delete listing" button that only appears when the cursor hovers over the image or the space below the image where the Delete button resides.
  return (
    <div style={cardContainer}>
      <h2>
        <AntSwitch
          checked={isInStock}
          onChange={() => setIsInStock(!isInStock)}
        />
      </h2>
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

// All styling for this component is below the export line.
const imgStyle = {
  // width: "352px",
  width: "300px",
};

const cardContainer = {
  // width: "352px",
  width: "300px",
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
