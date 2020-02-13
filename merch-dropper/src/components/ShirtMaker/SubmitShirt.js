import React, { useState, useEffect } from "react";
import axios from "axios";

const SubmitShirt = () => {
  const [imageUrls, setImageUrls] = useState({
    raw: "",
    cropped: "",
    thumbnail: ""
  });

let res;

  const preset = "cropbasic";

  const file =
    "http://oo-prod.s3.amazonaws.com/public/images/mockups/ALPHA-5000-navy-front_ffffff_5e44779e7bc900374b7b36e6/regular.jpg";

  const options = { "X-Requested-With": "XMLHttpRequest" };

  const data = {
    "upload_preset": preset,
    "tags": "browser_upload",
    "file": file
  };
  useEffect(() => {
    const shirtSubmit = async function() {
      let response = await axios.post(
        "https://api.cloudinary.com/v1_1/dze74ofbf/upload",
        data,
        options
      );
      return response
    };
res = await shirtSubmit();
console.log(res)
  }, []);



  return <div></div>;
};

export default SubmitShirt;
