import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  addproductContainer: {
    width: "80%",
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    margin: "0 auto",
    padding: "72px 0"
  },

  createTitle: {
    width: "344px",
    height: "59px",
    marginBottom: "24px",
    padding: "0 10px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "border-box",
    borderRadius: "8px"
  },

  labelText: {
    padding: "0 10px"
  },

  price: {
    width: "159px",
    height: "59px",
    marginBottom: "24px",
    padding: "0 10px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "border-box",
    borderRadius: "8px"
  },

  imgContainer: {
    width: "48%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
    border: "1px solid #f2f2f2"
  },

  shirtImg: {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%"
  },

  formContainer: {
    width: "48%",
    height: "100%"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "100%"
  },
  desc: {
    width: "344px",
    height: "126px",
    marginBottom: "24px",
    padding: "0 10px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "borderBox",
    borderRadius: "8px"
  },
  productHeader: {
    width: "63px",
    height: "22px",

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
    width: "166px",
    height: "22px",

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

    width: "44px",
    height: "22px",

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

    width: "50px",
    height: "22px",

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
    width: "344px",
    height: "59px",

    /* #4455EE Primary */

    background: "#4455EE",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Roboto",
    fontStyle: "normal",
    textTransform: "none",
    "&:hover": {
      background: "#3E32CC"
    }
  },

  storeSelect: {
    width: "160px",
    height: "59px",

    background: "#FFFFFF",
    /* #020202 Entry field stroke */

    border: "2px solid rgba(2, 2, 2, 0.12)",
    boxSizing: "borderBox",
    borderRadius: "8px"
  },

  previewShirt: {
    width: "544px",
    height: "688px",

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
