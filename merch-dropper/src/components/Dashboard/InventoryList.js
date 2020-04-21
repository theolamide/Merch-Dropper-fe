import React, { useState, useEffect } from "react";

import InventoryCard from "./InventoryCard";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

const initialProducts = [
  {
    id: 1,
    productName: "Swarm Collection",
    description: "Swarm Shirt",
    price: 83.99,
    storeID: 1,
    fullSizeURL:
      "https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/-fruit-of-the-loom-5-oz-white-full-color-100-heavy-cotton-hd-t-shirt-3931wfc-white.jpg",
  },
  {
    id: 2,
    productName: "Swarm Collection Part Deux",
    description: "Swarm Shirt, the Sequel",
    price: 123.97,
    storeID: 1,
    fullSizeURL:
      "https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/-fruit-of-the-loom-5-oz-white-full-color-100-heavy-cotton-hd-t-shirt-3931wfc-white.jpg",
  },
  {
    id: 3,
    productName: "Swarm Collection Part Trois",
    description: "Swarm Shirt, the Other Sequel",
    price: 666.66,
    storeID: 1,
    fullSizeURL:
      "https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/-fruit-of-the-loom-5-oz-white-full-color-100-heavy-cotton-hd-t-shirt-3931wfc-white.jpg",
  },
  {
    id: 4,
    productName: "Swarm Collection Part Ugh",
    description: "Swarm Shirt, the Other Sequel",
    price: 999.66,
    storeID: 1,
    fullSizeURL:
      "https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/-fruit-of-the-loom-5-oz-white-full-color-100-heavy-cotton-hd-t-shirt-3931wfc-white.jpg",
  },
  {
    id: 5,
    productName: "Swarm Collection Part AHHHHHHHHH",
    description: "Swarm Shirt, No",
    price: 0.76,
    storeID: 1,
    fullSizeURL:
      "https://d0bb7f9bf11b5ad1a6b2-6175f06f5e3f64e15abbf67415a276ec.ssl.cf1.rackcdn.com/product-images/designlab/-fruit-of-the-loom-5-oz-white-full-color-100-heavy-cotton-hd-t-shirt-3931wfc-white.jpg",
  },
];

function InventoryList({ history }) {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  console.log("This is products: ", products);

  // This useEffect hook will make a GET request to the back end to retrieve the user's inventory
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`https://merchdropper-production.herokuapp.com/api/products/`)
  //     .then((res) => {
  //       console.log("This is res.data: ", res.data);
  //       setProducts(res.data);
  //     })
  //     .catch((err) => console.log("Error retrieving products: ", err));
  // }, []);

  useEffect(() => {
    async function getInventory() {
      // const { email } = JSON.parse(localStorage.getItem("profile"));
      const email = "jthanson238@gmail.com";
      // let email;

      const resUser = await axios.get(
        `https://merchdropper-production.herokuapp.com/api/users/email/${email}`
      );
      const userID = resUser.data.id;
      const resStore = await axios.get(
        `https://merchdropper-production.herokuapp.com/api/stores/user/${userID}`
      );
      setStores(resStore.data);
      const storeID = resStore.data.id;
      const resProducts = await axios.get(
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
};
