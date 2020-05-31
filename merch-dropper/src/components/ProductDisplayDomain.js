import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const ProductDisplayDomain = ({ products, addToCart, match, location }) => {
  // console.log('productdisplay/products', products)
  const [shirts, setShirts] = useState([]);
  let storeID = 0
  const { domain_name } = useParams();
  localStorage.setItem("domain_name", domain_name)
  
  useEffect(() => {
    axios
      .get(
        `http://localhost:5032/api/stores/domain/${domain_name}`
        // local dev server
        // `http://localhost:5032/api/stores/domain/${domain_name}`
      )
      .then((res) => {
        storeID = res.data.id
        localStorage.setItem("storeID", storeID);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        axios
          .get(
            `http:/localhost:5032/api/products/store/${storeID}`
          )
          .then((res) => {
            console.log(res, "res");
            setShirts(res.data);
          })
          .catch((err) => {
            console.log(err.response);
          });
      });
  }, [match.params, domain_name]);

  return (
    <Container fluid="true" className="container-margin">
      <Row>
        <Col sm="7" className="flex ">
          {shirts.map((product, id) => (
            <ProductCard
              key={id}
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
    products: state.ProductReducer.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductDisplayDomain);
