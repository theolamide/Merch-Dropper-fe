import axios from "axios";
import {useState} from "react";
import {useSelector} from "react-redux"
import scalableData from "./scalableData";



const HandleScalableMockup = async (garment, setGarment, product, setProduct) => {
  async function makeShirt() {
    try {
      // this code calls the scalableData component to create a garment object to be sent to Scalable Press as "data" in the axios.post call below
      const data = await scalableData(garment);

      // shirtImage saves/posts the shirt preview to the back end
      const shirtImage = await axios.post(
        "https://merchdropper-production.herokuapp.com/api/products/mockup",
        data,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const response = shirtImage;
      const designId = response.data.URL.substring(102)
      console.log(designId, "id")
     
      console.log(response)
      // setGarment spreads in the existing garment state object and sets the URL of the mock up image (shirtImage) to mockURL, a property
      setGarment({ ...garment, mockUrl: response.data.URL });
      setProduct({
        ...product,
         designId
      })
      console.log(product, "product")
    } catch (err) {
      console.log("ERROR:", err);
    }
  }

  // this code executes the async function above
  makeShirt();

  return null;
};

export default HandleScalableMockup;
