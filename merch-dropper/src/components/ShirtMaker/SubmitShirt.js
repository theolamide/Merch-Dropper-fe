import React, { useState, useEffect } from "react";
import axios from "axios";

const SubmitShirt = (props) => {

  const [imageUrls, setImageUrls] = useState({
    publicId: "",
    version: 0,
    signature: "",
    eTag: "",
    url: "",
    secureUrl: "",
    croppedUrl: "",
    croppedThumbUrl: ""
  });

  const urlPrepend = "https://res.cloudinary.com/dze74ofbf/image/upload/";

  const preset = "cropbasic";

  const file =
    "http://oo-prod.s3.amazonaws.com/public/images/mockups/ALPHA-5000-navy-front_ffffff_5e44779e7bc900374b7b36e6/regular.jpg";

  const options = { "X-Requested-With": "XMLHttpRequest" };

  const data = {
    "upload_preset": preset,
    "tags": "browser_upload",
    "file": props.url
  };
  useEffect(() => {
    (async () => {
      const res = axios
        .post("https://api.cloudinary.com/v1_1/dze74ofbf/upload", data, options)
        .catch(() => {
          console.log("error uploading image");
        });

      const response = await res;

      setImageUrls({
        publicId: response.data.public_id,
        version: response.data.version,
        signature: response.data.signature,
        eTag: response.data.etag,
        url: response.data.url,
        secureUrl: response.data.secure_url,
        croppedUrl: `${urlPrepend}c_crop,g_north,h_650,q_auto:good,w_520,y_220/v${response.data.version}/${response.data.public_id}.jpg`,
        croppedThumbUrl: `${urlPrepend}c_crop,g_north,h_650,q_auto:good,w_520,y_220/c_scale,h_225,q_auto:good,w_180/v${response.data.version}/${response.data.public_id}.jpg`
      });
    })();
  }, []);

  return <div></div>;
};

export default SubmitShirt;
