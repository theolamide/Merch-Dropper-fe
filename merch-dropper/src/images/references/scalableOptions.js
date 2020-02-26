// Position
// The horizontal position must be one of the options below.

// Horizontal position	Description
// C	Center of garment
// RC	Center of right side of garment / right chest
// LC	Center of left side of garment / left chest
// R	Right aligned to garment
// L	Left aligned to garment
// The offset position should be provided in inches from the top of the collar or the bottom of the garment.

// Example position:

// {
//   "horizontal": "C",
//   "offset": {
//     "top": 2.5
//    }
// }
// Most prints are centered 2.5" below collar as shown above.

const designObject = {
  "name": "red_black_madant",
  "type": "dtg",
  "sides": {
    "front": {
      "artwork":
        "http://oo-prod.s3.amazonaws.com/public/artworks/2020/01/30/1148fc23dfe99023/original.png",
      "aspect": "1",
      "resize": "true",
      "dimensions": { "width": "5" },
      "position": { "horizontal": "C", "offset": { "top": "2" } }
    }
  }
};

const designObjectResponse = {
  "source": "design",
  "mode": "test",
  "type": "dtg",
  "name": "red_black_madant",
  "createdAt": "2020-01-30T20:30:04.082Z",
  "validation": {
    "status": "finished",
    "result": null
  },
  "customization": [],
  "conversion": false,
  "review": false,
  "sides": {
    "front": {
      "approval": {
        "order": {
          "status": "pending",
          "notes": []
        },
        "artwork": {
          "status": "pending",
          "notes": []
        }
      },
      "artwork":
        "http://oo-prod.s3.amazonaws.com/public/artworks/2020/01/30/52f791ff5976576/original.png",
      "aspect": 1.0046511627906978,
      "resize": true,
      "dimensions": {
        "width": 5
      },
      "position": {
        "horizontal": "C",
        "offset": {
          "top": 2
        }
      },
      "artworkId": "5e332a77e24df75cc269fcde",
      "proof":
        "https://oo-prod.s3.amazonaws.com/public/artworks/2020/01/30/52f791ff5976576/artworkRaster/original.png"
    }
  },
  "designId": "5e333ccccfaefb5cbb0a790b"
};

// *************************************************************************************************
// *************************************************************************************************
// *************************************************************************************************
// *************************************************************************************************

const gildanShirt = {
  "template": { "name": "front", "background": "brick" },
  "product": { "id": "gildan-cotton-t-shirt", "color": "Sunset" },
  "design": {
    "type": "dtg",
    "sides": {
      "front": {
        "artwork":
          "http://oo-prod.s3.amazonaws.com/public/artworks/2020/01/30/1148fc23dfe99023/original.png",
        "dimensions": { "height": "12" },
        "position": { "horizontal": "C", "offset": { "top": "1.25" } }
      }
    }
  },
  "output": { "width": "1000", "height": "1000", "format": "png" }
};

const canvasShirt = {
  "template": { "name": "front" },
  "product": { "id": "canvas-unisex-t-shirt", "color": "Pebble Brown" },
  "design": {
    "type": "dtg",
    "sides": {
      "front": {
        "artwork":
          "http://oo-prod.s3.amazonaws.com/public/artworks/2020/01/30/1148fc23dfe99023/original.png",
        "dimensions": { "width": "3.5" },
        "position": { "horizontal": "LC", "offset": { "top": "1.25" } }
      }
    }
  },
  "output": { "width": "400", "height": "400", "format": "png" }
};

const mockUpResponse = {
  "url":
    "https://scalablepress.com:443/mockupServer/view/ALPHA-5000-sunset-front/ffffff/regular?designId=5e334617066ec020f9d71b35"
};

export const shirtColorOptions = {
  canvasShirtColors: [
    "Aqua",
    "Ash",
    "Asphalt",
    "Athletic Heather",
    "Berry",
    "Black",
    "Brown",
    "Burnt Orange",
    "Canvas Red",
    "Coral",
    "Dark Gray Heather",
    "Deep Heather",
    "Deep Teal",
    "Evergreen",
    "Gold",
    "Heather Blue",
    "Heather Brown",
    "Heather Green",
    "Heather Navy",
    "Heather Slate",
    "Heather Tan",
    "Kelly",
    "Leaf",
    "Light Blue",
    "Maize Yellow",
    "Maroon",
    "Navy",
    "Ocean Blue",
    "Olive",
    "Orange",
    "Pebble Brown",
    "Red",
    "Silver",
    "Soft Cream",
    "Soft Pink",
    "Solid Black Blender",
    "Solid White Blender",
    "Steel Blue",
    "Teal",
    "Team Purple",
    "True Royal",
    "White",
    "Yellow",
    "Dark Gray",
    "Heather Kelly",
    "Heather Orange",
    "Heather Team Purple",
    "Vintage Black",
    "Heather Red",
    "Heather True Royal",
    "Army",
    "Heather Raspberry",
    "Mint",
    "Natural",
    "Baby Blue",
    "Cardinal",
    "Turquoise",
    "Forest Green",
    "Heather Midnight Navy",
    "Heather Yellow Gold",
    "Heather Cardinal",
    "Heather Deep Teal",
    "Heather Forest",
    "Heather Mint",
    "Charity Pink",
    "Heather Dusty Blue",
    "Heather Grass Green",
    "Heather Mauve",
    "Heather Military Green",
    "Heather Prism Dusty Blue",
    "Heather Prism Ice Blue",
    "Heather Prism Lilac",
    "Heather Prism Mint",
    "Heather Prism Peach",
    "Heather Prism Sunset",
    "Heather Storm",
    "Heather Sunset",
    "Mauve",
    "Military Green",
    "Oxblood Black",
    "Storm",
    "Sunset",
    "Tan",
    "Black Heather",
    "Heather Olive",
    "Heather Maroon",
    "Heather Columbia Blue",
    "Heather Aqua",
    "Heather Stone",
    "Pink",
    "Heather Clay",
    "Heather Sea Green",
    "Heather Ice Blue",
    "Rust",
    "Heather Peach"
  ],

  gildanShirtColors: [
    "Aqua",
    "Ash",
    "Asphalt",
    "Athletic Heather",
    "Berry",
    "Black",
    "Brown",
    "Burnt Orange",
    "Canvas Red",
    "Coral",
    "Dark Gray Heather",
    "Deep Heather",
    "Deep Teal",
    "Evergreen",
    "Gold",
    "Heather Blue",
    "Heather Brown",
    "Heather Green",
    "Heather Navy",
    "Heather Slate",
    "Heather Tan",
    "Kelly",
    "Leaf",
    "Light Blue",
    "Maize Yellow",
    "Maroon",
    "Navy",
    "Ocean Blue",
    "Olive",
    "Orange",
    "Pebble Brown",
    "Red",
    "Silver",
    "Soft Cream",
    "Soft Pink",
    "Solid Black Blender",
    "Solid White Blender",
    "Steel Blue",
    "Teal",
    "Team Purple",
    "True Royal",
    "White",
    "Yellow",
    "Dark Gray",
    "Heather Kelly",
    "Heather Orange",
    "Heather Team Purple",
    "Vintage Black",
    "Heather Red",
    "Heather True Royal",
    "Army",
    "Heather Raspberry",
    "Mint",
    "Natural",
    "Baby Blue",
    "Cardinal",
    "Turquoise",
    "Forest Green",
    "Heather Midnight Navy",
    "Heather Yellow Gold",
    "Heather Cardinal",
    "Heather Deep Teal",
    "Heather Forest",
    "Heather Mint",
    "Charity Pink",
    "Heather Dusty Blue",
    "Heather Grass Green",
    "Heather Mauve",
    "Heather Military Green",
    "Heather Prism Dusty Blue",
    "Heather Prism Ice Blue",
    "Heather Prism Lilac",
    "Heather Prism Mint",
    "Heather Prism Peach",
    "Heather Prism Sunset",
    "Heather Storm",
    "Heather Sunset",
    "Mauve",
    "Military Green",
    "Oxblood Black",
    "Storm",
    "Sunset",
    "Tan",
    "Black Heather",
    "Heather Olive",
    "Heather Maroon",
    "Heather Columbia Blue",
    "Heather Aqua",
    "Heather Stone",
    "Pink",
    "Heather Clay",
    "Heather Sea Green",
    "Heather Ice Blue",
    "Rust",
    "Heather Peach"
  ]
};

const screenPrintColors = [
  "Athletic Gold",
  "Black",
  "Blue",
  "Brown",
  "Cardinal",
  "Charity Pink",
  "Dark Grey",
  "Forest",
  "Grey",
  "Hot Pink",
  "Kelly Green",
  "Lemon",
  "Light Blue",
  "Light Grey",
  "Light Purple",
  "Lime",
  "Magenta",
  "Maroon",
  "Navy",
  "Old Gold",
  "Olive",
  "Orange",
  "Orange Red",
  "Pink",
  "Purple",
  "Red",
  "Royal",
  "Tan",
  "Turquoise",
  "White",
  "Green",
  "Yellow"
];

export default shirtColorOptions;
