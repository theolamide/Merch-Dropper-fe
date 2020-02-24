import React from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const ProductDisplay = ({ products, addToCart }) => {
  // console.log('productdisplay/products', products)
  return (
    <Container fluid="true" className="container-margin">
       {/*<NavBar />*/}
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
