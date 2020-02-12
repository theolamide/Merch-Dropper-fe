import React, {Fragment} from "react";


const ShirtDisplay = (props) => {
  console.log(props);
  return (
  <Fragment>
    <img src={props.mockUrl} alt=""/>
  </Fragment>
    )
};

export default ShirtDisplay;
