

const initialShirtState = {
  garment: {
    color: "White",
    colorHex: "#FFFFFF",
    printStyle: "dtg",
    artwork:
      "http://oo-prod.s3.amazonaws.com/public/artworks/2020/02/02/378ce90384ce1/original.png",
    designWidth: "6",
    horizontalPlacement: ".5",
    designPlacement: "C",
    offSetFromTop: "2",
    mockUrl: ""
  },
  cloudinaryInfo: {
    publicId: "",
    version: 0,
    signature: "",
    eTag: "",
    url: "",
    secureUrl: "",
    croppedUrl: "",
    croppedThumbUrl: ""
  },

  productInfo: {
    productName: "Cool Shirt",
    fullSizeURL: "",
    thumbnailURL: "",
    description: "A pretty sweet shirt",
    price: 49.99,
    storeID: 1
  },
  designInfo: {
    design_name: "Shirt Design",
    design_url: "",
    thumbnail_url: "",
    storeID: 1,
    userID: 1
  }
};

export default initialShirtState;
