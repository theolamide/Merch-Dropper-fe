import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { addProduct } from "../../store/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import addProduct from "./addProduct";

// const stores = [
//   {
//     storeName: "Test Store",
//     storeID: 1
//   },
//   {
//     storeName: "Best Store",
//     storeID: 2
//   }
// ];

export default function AddProductToTable(props) {
  const [stores, setStores] = useState([]);
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    description: "",
    storeID: 0
  });
  //should a deafult store ID better than undefined. 0 could work.

  //fetch stores on mount of logged in user
  // get currently logged in user data from localstorage
  //GET userID from this endpoint /api/users/email
  // save the userID
  // GET stores associated from logged in user from endpoint of stores/userID
  //setStore to that list

  useEffect(() => {
    async function getStores() {
      const { email } = JSON.parse(localStorage.getItem("profile"));

      const res = await axios.get(
        `https://merchdropper-production.herokuapp.com/api/users/email/${email}`
      );
      console.log(res);
      const userID = res.data.id;
      const res2 = await axios.get(
        `https://merchdropper-production.herokuapp.com/api/stores/user/${userID}`
      );
      console.log(res2);
      setStores([res2.data]);
    }
    getStores();
  }, []);

  const handleChange = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    addProduct(props.garment, product);

    console.log(product);
    // props.login(credentials);
    // setTimeout(() => {
    //   props.history.push("/dashboard");
    // }, 800);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="productName"
          value={product.productName}
          onChange={handleChange}
        />
        <TextField
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <TextField
          select
          name="storeID"
          label="Select Store"
          value={product.storeID}
          onChange={handleChange}
          helperText="Please select your Store"
        >
          {stores.map(store => (
            <MenuItem key={store.id} value={store.id}>
              {store.store_name}
            </MenuItem>
          ))}
        </TextField>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

// const mapStateToProps = state => {
//   let product = state.ProductReducers;
//
//   return {
//     isFetching: product.isFetching,
//     error: product.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { addProduct }
// )(AddProductToTable);
