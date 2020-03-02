import axios from "axios";

// for merchDropper api call

const product = {
  productName: "Swarm Collection",
  description: "Swarm Shirt",
  price: 83.99,
  storeID: 1
};

const FullHandle = async (garment) => {
  if (garment.mockUrl === "") {
    alert("Please create a mockup first!");
    return null;
  }

  await (async () => {
    const cloudRes = await axios
      .post(
        "https://api.cloudinary.com/v1_1/dze74ofbf/upload",
        {
          "upload_preset": "cropShrink",
          "tags": "browser_upload",
          "file": garment.mockUrl
        },
        { "X-Requested-With": "XMLHttpRequest" }
      )
      .catch((err) => {
        console.log("error uploading image", err);
      });
    const merchDropRes = await axios
      .post("https://merchdropper-production.herokuapp.com/api/products", {
        ...product,
        fullSizeURL: cloudRes.data.eager[0].secure_url,
        thumbnailURL: cloudRes.data.eager[1].secure_url
      })
      .catch((err) => {
        console.log("error uploading image", err);
      });
    console.log(`${merchDropRes.data.productName} added successfully!`);
  })();
  return null;
};

export default FullHandle;
