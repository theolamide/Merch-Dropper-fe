import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

const PicDisplay = styled.div`
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 5px 0 12px 0;
  justify-content: flex-start;
  a:focus {
    outline: solid black 1px;
  }
  img {
    height: 40px;
    width: 40px;
    margin: 3px;
  }
`;

const ThumbDisplay = ({ garment, setGarment, design, thumbRender }) => {
  const [designArray, setDesignArray] = useState();
  useEffect(() => {
    async function fetchDesigns() {
      let fetchedDesigns = await axios.get(
        "https://merchdropper-production.herokuapp.com/api/designs"
      );
      setDesignArray(fetchedDesigns.data);
    }
    fetchDesigns();
  }, [thumbRender]);

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
