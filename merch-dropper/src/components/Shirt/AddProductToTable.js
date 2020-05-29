import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import addProduct from "./AddProduct";
import { useStyles } from "../Component-Styles/addProduct-styles.js";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function AddProductToTable(props, history) {
  const classes = useStyles();
  const [stores, setStores] = useState("");
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    description: "",
    storeID: 0
  });
  const [cost, setCost] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  
  
  //fetch stores on mount of logged in user
  // get currently logged in user data from localstorage
  //GET userID from this endpoint /api/users/email
  // save the userID
  // GET stores associated from logged in user from endpoint of stores/userID
  //setStore to that list

  useEffect(() => {
    async function getStores() {
      const { email } = JSON.parse(localStorage.getItem("profile"));
      console.log(email)
      const res = await axios.get(
        `https://merch-dropper.herokuapp.com/api/users/email/${email}`
      );
      console.log(res);
      const userID = res.data.id;
      const res2 = await axios.get(
        `https://merch-dropper.herokuapp.com/api/stores/user/${userID}`
      );
      console.log(res2);
      setStores(res2.data);
    }
    getStores();
    //get price of product from scalablepress
      const product = {
        "productId": "canvas-unisex-t-shirt"
      }
      axios.post('https://merch-dropper.herokuapp.com/api/products/price', product)
          .then(res => {
             setCost(res.data)
          })
          .catch(err => {
            console.log(err)
          })
    
  }, []);

  //bring back value object into array to get price for the item
  let baseCost;
  const garmentColor = props.garment.color.toLowerCase();
   for (let [key, value] of Object.entries(cost)) {
    let keyLower = key.toLowerCase()
    if(keyLower === garmentColor){            
      baseCost = ((value.sml.price/100) * 0.029) + (value.sml.price / 100)         
    }    
  }

  const handleChange = event => {
    setProduct({
      ...product,
      storeID: stores.id,
      [event.target.name]: event.target.value
    });
  };

  const calcPrice = (e, cost = baseCost) => {
    if(product.price){
      return product.price - cost
    } else{
      return 0;
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    openModal();
    addProduct(props.history, props.garment, product);
    // setTimeout(() => {
    //   props.history.push("/dashboard");
    // }, 800);
  };
  console.log(props.garment);
  
  // const shirtColor = props.garment.color;
  const shirtImage = props.garment.mockUrl;

  console.log(product);
  return (
    <div className={classes.addproductContainer}>
      <Modal
        className={classes.modal}
        isOpen={modalIsOpen}
        contentLabel="Modal"
      >
        <Segment className={classes.segment}>
          <Dimmer active>
            <Loader>Adding Product to Inventory</Loader>
          </Dimmer>
        </Segment>
      </Modal>
      <div className={classes.imgContainer}>
        <img
          src={shirtImage}
          className={classes.shirtImg}
          alt="shirt design preview"
        />
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            className={classes.createTitle}
            label="Create Title"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelText
              }
            }}
          />{" "}
          <div className={classes.cost}>
          <TextField
            className={classes.price}
            label="$"
            name="price"
            value={product.price}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelText
              }
            }}
          />{" "}
         <span className={classes.profit}>Profit per item:<strong> ${`${calcPrice().toFixed(2)}`}</strong></span>
          </div>
           {/* <TextField
            className={classes.price}
            label="Commission per Item"
            name="price"
            value={calcPrice().toFixed(2)}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelText
              }
            }}
          />{" "} */}

          <TextField
            className={classes.desc}
            label="Add Product Description"
            name="description"
            multiline
            rows={5}
            value={product.description}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true
            }}
            InputLabelProps={{
              classes: {
                root: classes.labelText
              }
            }}
          />{" "}
          {/* <Typography
                              className={classes.productHeader}
                              variant="h3"
                              gutterBottom
                            >
                              Product:
                            </Typography>
                            <Typography className={classes.product} variant="body1" gutterBottom>
                              Unisex T - Shirt
                            </Typography> */}{" "}
          {/* <Typography className={classes.colorHeader} variant="h3" gutterBottom>
            Color:
          </Typography>{" "}
          <Typography className={classes.color} variant="body1" gutterBottom>
            {" "}
            {shirtColor}{" "}
          </Typography>{" "} */}
          {/* <TextField
                            select
                            className={classes.storeSelect}
                            name="storeID"
                            label="Select Store"
                            value={product.storeID}
                            onChange={handleChange}
                            InputProps={{ disableUnderline: true }}
                          >
                            {stores.map(store => (
                              <MenuItem key={store.id} value={store.id}>
                                {store.store_name}
                              </MenuItem>
                            ))}
                          </TextField> */}{" "}
          <Button
            variant="contained"
            className={classes.addButton}
            type="submit"
          >
            Add Product{" "}
          </Button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
}
