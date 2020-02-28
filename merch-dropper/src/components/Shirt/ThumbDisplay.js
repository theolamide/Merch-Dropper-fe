import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import designUrls from "./designUrls";

// const designs = designUrls;

const PicDisplay = styled.div`
  height: auto;
  margin-bottom: 15px;
  a:focus {
    outline: solid black 1px;
  }
  img {
    height: 40px;
    width: 40px;
    margin: 3px;
  }
`;

const ThumbDisplay = ({ garment, setGarment, design, thumbRender}) => {

  const [designArray, setDesignArray] = useState();
  useEffect(() => {
    async function fetchDesigns() {
      let fetchedDesigns = await axios.get("http://localhost:5032/api/designs");
      setDesignArray(fetchedDesigns.data);
    }
    fetchDesigns();
  }, [thumbRender]);
  // console.log("HOPEFULLY COOL DUDE DESIGNS", designs);

  if (!designArray) {
    return <h1>loading</h1>;
  }
  return (
    <Fragment>
      <PicDisplay>
        {designArray.map((image) => (
          <a href="#" key={image.id}>
            <img
              src={image.thumbnail_url}
              alt={image.design_name}
              key={image.id}
              onClick={() =>
                setGarment({ ...garment, artwork: image.design_url })
              }
            />
          </a>
        ))}
      </PicDisplay>
    </Fragment>
  );
};

export default ThumbDisplay;

// onClick={() => setGarment({ ...garment, artwork: design.hiRes
