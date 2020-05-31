import React, { useState, useEffect } from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import { Container, Row, Col } from "reactstrap";
import "../App.css";


const ProductDisplay = ({ products, addToCart }) => {
  // console.log('productdisplay/products', products)
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    axios.get('https://merch-dropper.herokuapp.com/api/products')
      .then(res => {
        // console.log('res', res.data)
        setShirts(res.data);
      })
  }, []);

  return (
    <Container fluid="true" className="container-margin">
       {/*<NavBar />*/}
      <Row>
        <Col sm="7" className="flex ">
          {shirts.map((product, id) => (
            <ProductCard
              url={product.thumbnailURL}
              name={product.productName}
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
