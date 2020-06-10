import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithEnv } from "../../utils/axiosWithEnv";
import { StyledDiv, BigContainer } from "./Styled";

import Inventory from "./Inventory";
// import ProductCard from "../ProductCard";
// import { connect } from "react-redux";
// import { addToCart } from "../store/actions";
// import { Container, Row, Col } from "reactstrap";

import Settings from "./Settings";

const Dashboard = ({ products, addToCart, match, location, history }) => {
  const [user, setUser] = useState();
  // const [shirts, setShirts] = useState([]);
  console.log({ match, location });
  const userID = localStorage.getItem("id");

  useEffect(() => {
    axiosWithEnv()
      .get(`/api/stores/user/${userID}`)
      .then((res) => {
        if (res.data.domain_name) {
          localStorage.setItem("store_name", res.data.domain_name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BigContainer className="dashboard-container">
      <Inventory history={history} />
      <StyledDiv className="dashboard-components">
        <Settings />
      </StyledDiv>
    </BigContainer>
  );
};

export default Dashboard;
