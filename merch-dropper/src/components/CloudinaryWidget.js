// import React from "react";
// // const cloudinary = require("cloudinary/lib/cloudinary");

// let widget = window.cloudinary.createUploadWidget(
//   {
//     cloudName: "dze74ofbf",
//     uploadPreset: "glxtx1ps",
//     sources: ["local", "url"],
//     showAdvancedOptions: false,
//     cropping: false,
//     multiple: false,
//     defaultSource: "local",
//     styles: {
//       palette: {
//         window: "#FFFFFF",
//         windowBorder: "#90A0B3",
//         tabIcon: "#0078FF",
//         menuIcons: "#5A616A",
//         textDark: "#000000",
//         textLight: "#FFFFFF",
//         link: "#0078FF",
//         action: "#FF620C",
//         inactiveTabIcon: "#0E2F5A",
//         error: "#F44235",
//         inProgress: "#0078FF",
//         complete: "#20B832",
//         sourceBg: "#E4EBF1"
//       },
//       fonts: {
//         default: {
//           active: true
//         }
//       }
//     }
//   },
//   (error, result) => {}
// );
// const showWidget = function(){
//   widget.open()
// }
// const ImageUpload = () => {
//   return (
// <div onClick={showWidget}>Click to Upload Image</div>
//   )
// };
// export default ImageUpload;

import React, { Fragment } from "react";
let widget = window.cloudinary.createUploadWidget(
  {
    cloudName: "dze74ofbf",
    uploadPreset: "glxtx1ps",
    sources: ["local", "url"],
    showAdvancedOptions: false,
    cropping: false,
    multiple: false,
    defaultSource: "local"
  },
  (error, result) => {
    if (result.event == "success") {
      console.log(result.info.url, "THIS ONE IS THE RESULT OK");
    }
  }
);
const showWidget = function() {
  widget.open();
};
const ImageUpload = () => {
  return (
    <Fragment>
      <div onClick={showWidget}>Click Here to Upload Image</div>
    </Fragment>
  );
};
export default ImageUpload;