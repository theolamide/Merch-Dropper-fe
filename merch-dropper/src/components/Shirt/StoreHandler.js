import React from "react";
import axios from "axios";

const StoreHandler = (merchProduct, setMerchProduct, images) => {
  setMerchProduct({
    ...merchProduct,
    fullSizeURL: images.croppedUrl,
    thumbnailURL: images.croppedThumbUrl
  });

  console.log(merchProduct, "This is the merch product before sent to db");
  async function addProduct() {
    const res = await axios
      .post(
        "https://merchdropper-staging.herokuapp.com/api/products",
        merchProduct
      )
      .catch(() => {
        console.log("error uploading image");
      });

    console.log(res, "This means it went to the DB");
  }
  addProduct();

  return null;
};

export default StoreHandler;
