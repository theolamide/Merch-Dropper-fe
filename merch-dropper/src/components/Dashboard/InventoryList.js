import React, { useState, useEffect } from "react";

import InventoryCard from "./InventoryCard";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

function InventoryList({ history }) {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);


  useEffect(() => {
    async function getInventory() {
      const { email } = JSON.parse(localStorage.getItem("profile"));

      const resUser = await axiosWithAuth.get(
        `https://merchdropper-production.herokuapp.com/api/users/email/${email}`
      );
      const userID = resUser.data.id;
      const resStore = await axiosWithAuth.get(
        `https://merchdropper-production.herokuapp.com/api/stores/user/${userID}`
      );
      setStores(resStore.data);
      const storeID = resStore.data.id;
      const resProducts = await axiosWithAuth.get(
        `https://merchdropper-production.herokuapp.com/api/products/store/${storeID}`
      );
      setProducts(resProducts.data);
    }
    getInventory();
  }, []);

  return (
    <>
      {products.length === 0 && (
        <p style={emptyInventoryStyle}>Add items to your store to see them here</p>
      )}
      {products.map((product) => (
        <InventoryCard
          fullSizeURL={product.fullSizeURL}
          history={history}
          shirtID={product.id}
        />
      ))}
    </>
  );
}

export default InventoryList;

const emptyInventoryStyle = {
  margin: "250px auto",
  fontSize: "24px",
};
