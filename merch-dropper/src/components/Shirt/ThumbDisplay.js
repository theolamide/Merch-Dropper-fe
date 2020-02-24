import React from "react";
import styled from "styled-components";
import designUrls from "./designUrls";

const designs = designUrls;

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

const ThumbDisplay = ({ garment, setGarment }) => {
  // console.log(garment, setGarment);

  return (
    <PicDisplay>
      {designs.map((design) => (
        <a href="#" key={design.name}><img
          src={design.thumb}
          alt={design.name}
          key={design.name}
          onClick={() => setGarment({ ...garment, artwork: design.hiRes })}
        /></a>
      ))}
    </PicDisplay>
  );
};

export default ThumbDisplay;
