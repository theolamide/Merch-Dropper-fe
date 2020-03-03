import axios from "axios";
import scalableData from "./scalableData";

const HandleScalableMockup = async (garment, setGarment) => {
  async function makeShirt() {
    try {
      const data = await scalableData(garment);
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

      setGarment({ ...garment, mockUrl: response.data.URL });
    } catch (err) {
      console.log("ERROR:", err);
    }
  }
  makeShirt();

  return null;
};

export default HandleScalableMockup;
