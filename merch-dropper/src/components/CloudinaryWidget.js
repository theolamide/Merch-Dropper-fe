import React, { Fragment } from "react";

const ImageUpload = ({ design, setDesign }) => {
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
        const data = result.info;
        console.log("HERE THAT PIXURE DATA", data);
        setDesign({
          ...design,
          design_name: data.original_filename,
          design_url: data.url,
          thumbnail_url: data.thumbnail_url
        });
      }
    }
  );

  const showWidget = function() {
    widget.open();
  };

  return (
    <Fragment>
      <button className="designBtn btn btn-primary" onClick={showWidget}>
        Upload New Design
      </button>
    </Fragment>
  );
};
export default ImageUpload;
