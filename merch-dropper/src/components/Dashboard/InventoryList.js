import React, { useState, useEffect } from "react";

import InventoryCard from "./InventoryCard";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

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
  const [products, setProducts] = useState(initialProducts);

  // This useEffect hook will make a GET request to the back end to retrieve the user's inventory
  useEffect(() => {
    axiosWithAuth().get().then().catch()
  }, [])

  return (
    <>
      {products.map((product) => (
        <InventoryCard fullSizeURL={product.fullSizeURL} history={history} />
      ))}
    </>
  );
}

export default InventoryList;
