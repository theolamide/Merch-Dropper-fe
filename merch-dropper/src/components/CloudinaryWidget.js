import React, { Fragment } from "react";

let widget = window.cloudinary.createUploadWidget(
  {
    cloudName: "dze74ofbf",
    uploadPreset: "logoFromWidget",
    sources: ["local", "url"],
    showAdvancedOptions: false,
    cropping: false,
    multiple: false,
    defaultSource: "local"
  },
  (error, result) => {
    if (result.event == "success") {
      console.log(result.info, "THIS ONE IS THE RESULT OK");
    }
  }
);
const showWidget = function() {
  widget.open();
};
const ImageUpload = () => {
  return (
    <Fragment>
      <button className="designBtn btn btn-primary" onClick={showWidget}>
        Upload New Design
      </button>
    </Fragment>
  );
};
export default ImageUpload;
