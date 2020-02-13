import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../actions";

import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
const ProductWindow = styled.div`
  border: blue solid 3px;
  max-width: 40%;

  img: {
    max-width: 90%;
    height: auto;
  }
`;

const ProductDisplay = ({ products, addToCart }) => {
  // console.log('productdisplay/products', products)
  return (
    <Container fluid="true" className="container-margin">
      <Row>
        <Col sm="7" className="flex ">
          {products.map((product) => (
            <ProductCard
              url={product.url}
              color={product.color}
              design={product.design}
              price={product.price}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </Col>
        {/* <div className="tester">Hello
        <ProductWindow>
          <img
            className="flex"
            src="https://raw.githubusercontent.com/Jeris-Manning/FILES/master/shirtsSmall/black.png"
            alt=""
          />
        </ProductWindow></div> */}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log("state in products", state);
  return {
    cart: state.CartReducer.cart,
    products: state.ProductReducer.products
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductDisplay);
