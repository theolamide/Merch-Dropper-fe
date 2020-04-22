import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { addProduct } from "../../store/actions";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import addProduct from "./addProduct";
import { makeStyles } from "@material-ui/core/styles";

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
const useStyles = makeStyles({
  createTitle: {
    position: "absolute",
    width: "544px",
    height: "59px",
    left: "736px",
    top: "190px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "border-box",
    borderRadius: "8px"
  },
  price: {
    position: "absolute",
    width: "160px",
    height: "59px",
    left: "736px",
    top: "273px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "borderBox",
    borderRadius: "8px"
  },
  desc: {
    position: "absolute",
    width: " 544px",
    height: "126px",
    left: "736px",
    top: "356px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "borderBox",
    borderRadius: "8px"
  },
  productHeader: {
    position: "absolute",
    width: "63px",
    height: "22px",
    left: "736px",
    top: "506px",
    /* Lato/Reg/18 */

    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    /* identical to box height */

    /* #010101 Inactive text */

    color: "rgba(1, 1, 1, 0.54)"
  },
  product: {
    position: "absolute",
    width: "166px",
    height: "22px",
    left: "736px",
    top: "536px",

    /* Lato/Bold/18 */

    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    /* identical to box height */

    /* #1C1C2E Text black */

    color: "#1C1C2E"
  },
  colorHeader: {
    /* Color */

    position: "absolute",
    width: "44px",
    height: "22px",
    left: "736px",
    top: "574px",

    /* Lato/Reg/18 */

    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    /* identical to box height */

    /* #010101 Inactive text */

    color: "rgba(1, 1, 1, 0.54)"
  },
  color: {
    /* White */

    position: "absolute",
    width: "50px",
    height: "22px",
    left: "736px",
    top: "604px",

    /* Lato/Bold/18 */

    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    /* identical to box height */

    /* #1C1C2E Text black */

    color: "#1C1C2E"
  },
  addButton: {
    position: "absolute",
    width: "200px",
    height: "48px",
    left: "736px",
    top: "750px",

    /* #4455EE Primary */

    background: "#4455EE",
    borderRadius: "8px",
    color: "white"
  },
  buttonText: {
    position: "absolute",
    width: "140px",
    height: "22px",
    left: "766px",
    top: "763px",

    /* Lato/Bold/18 */

    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22px",
    /* identical to box height */

    display: "flex",
    alignItems: "center",
    textAlign: "center",

    /* #FFFFFF White */

    color: "black"
  },
  storeSelect: {
    position: "absolute",
    width: "160px",
    height: "59px",
    left: "736px",
    top: "670px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "borderBox",
    borderRadius: "8px"
  },

  previewShirt: {
    position: "absolute",
    width: "544px",
    height: "688px",
    left: "160px",
    top: "878px",

    background:
      "url(-fruit-of-the-loom-5-oz-white-full-color-100-heavy-cotton-hd-t-shirt-3931wfc-white.jpg), #FFFFFF",
    border: "1px solid #F2F2F2",
    boxSizing: "borderBox",
    /* Primary Drop Shadow */

    boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.02)",
    borderRadius: "10px",
    transform: "matrix(1, 0, 0, -1, 0, 0)"
  }
});

export default function AddProductToTable(props) {
  const classes = useStyles();
  const [stores, setStores] = useState("");
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    description: "",
    storeID: 0
  });
  //Is zero the best initial value? undefined does not work.

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
        `http://localhost:5032/api/users/email/${email}`
      );
      console.log(res);
      const userID = res.data.id;
      const res2 = await axios.get(
        `http://localhost:5032/api/stores/user/${userID}`
      );
      console.log(res2);
      setStores(res2.data);
    }
    getStores();
  }, []);

  const handleChange = event => {
    setProduct({
      ...product,
      storeID: stores.id,
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
  console.log(props.garment);
  const shirtColor = props.garment.color;
  const shirtImage = props.garment.mockUrl;
  console.log(product);
  return (
    <div>
      <div>

        <img className={classes.previewShirt} src={shirtImage} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.createTitle}
            label="Create Title"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true
            }}
          />{" "}
          <TextField
            className={classes.price}
            label="$"
            name="price"
            value={product.price}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true
            }}
          />{" "}
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
          />{" "}
          <Typography
            className={classes.productHeader}
            variant="h3"
            gutterBottom
          >
            Product:
          </Typography>{" "}
          <Typography className={classes.product} variant="body1" gutterBottom>
            Unisex T - Shirt{" "}
          </Typography>{" "}
          <Typography className={classes.colorHeader} variant="h3" gutterBottom>
            Color:
          </Typography>{" "}
          <Typography className={classes.color} variant="body1" gutterBottom>
            {" "}
            {shirtColor}{" "}
          </Typography>
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
                </TextField> */}
          <Button
            variant="contained"
            className={classes.addButton}
            type="submit"
          >
            Add item to store{" "}
          </Button>{" "}
        </form>{" "}
      </div>{" "}
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
