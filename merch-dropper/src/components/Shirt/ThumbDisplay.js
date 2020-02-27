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

const ThumbDisplay = ({ garment, setGarment}) => {

  const [designs, setDesigns] = useState();
  useEffect(() => {
    async function fetchDesigns() {
      let designArray = await axios.get("http://localhost:5032/api/designs");
      setDesigns(designArray.data);
    }
    fetchDesigns();
  }, []);
  // console.log("HOPEFULLY COOL DUDE DESIGNS", designs);

  if (!designs) {
    return <h1>loading</h1>;
  }
  return (
    <Fragment>
      <PicDisplay>
        {designs.map((design) => (
          <a href="#" key={design.id}>
            <img
              src={design.thumbnail_url}
              alt={design.design_name}
              key={design.id}
              onClick={() =>
                setGarment({ ...garment, artwork: design.design_url })
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
