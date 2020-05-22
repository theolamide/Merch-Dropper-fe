import axios from "axios";
import scalableData from "./scalableData";

export default function HandleScalableMockup(garment, setGarment) {
  // this code calls the scalableData component to create a garment object to be sent to Scalable Press as "data" in the axios.post call below
  scalableData(garment)
    .then((data) => {
      // shirtImage saves/posts the shirt preview to the back end
      axios
        .post(
          "https://merchdropper-production.herokuapp.com/api/products/mockup",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // setGarment spreads in the existing garment state object and sets the URL of the mock up image (shirtImage) to mockURL, a property
          setGarment({ ...garment, mockUrl: res.data.URL });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });

  return null;
};
