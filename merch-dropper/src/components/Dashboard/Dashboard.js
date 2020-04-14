import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import Chart from "./Chart";
import { StyledDiv, BigContainer } from "./Styled";
import ProductCard from "../ProductCard";
// import { connect } from "react-redux";
// import { addToCart } from "../store/actions";
import { Container, Row, Col } from "reactstrap";

const Dashboard = ({ products, addToCart, match, location }) => {
  const [user, setUser] = useState();
  // const [shirts, setShirts] = useState([]);
  console.log({ match, location });

  useEffect(() => {
    async function getUser() {
      // let storeID = "";
      // GET request to 'stores/domain/${match.params.domain_name}'
      const res = await axios.get(
        `https://merchdropper-production.herokuapp.com/api/stores/domain/${match.params.domain_name}`
      );
      // storeID = res.data.id;
      let userID = res.data.userID;
      console.log(res.data.id);
      // const res2 = await axios.get(
      //   "https://merchdropper-production.herokuapp.com/api/products"
      // );
      const res3 = await axios.get(
        `https://merchdropper-production.herokuapp.com/api/users/${userID}`
      );

      setUser(res3.data.email);

      // const shirtsToDisplay = storeID
      //   ? res2.data.filter(product => product.storeID === parseInt(storeID))
      //   : res2.data;
      // setShirts(shirtsToDisplay);
    }
    getUser();
  }, [match.params.domain_name]);
  console.log(user);

  return (
    <BigContainer className="dashboard-container">
      <div className="user-info">
        <h2 align="right">Welcome, {user} </h2>
      </div>
      <StyledDiv className="dashboard-components">
        <SideBar />
        <Chart />
      </StyledDiv>
    </BigContainer>
  );
};

export default Dashboard;
