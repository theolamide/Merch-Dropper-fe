import React, { Fragment } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";
import "../App.css";

const ProductCard = ({ product, addToCart }) => {
  console.log("product", product);
  return (
    <Fragment>
      <Col xs="6" lg="4">
        <Card className="merchCard m-1">
          <CardImg
            top
            width="100%"
            height="auto"
            src={product.url}
            alt="T-shirt"
          />
          <CardBody className="product-card-padding">
            <CardTitle className="h5 text-center">{product.design}</CardTitle>
            <CardText>
              <small className="text-muted">In {product.color}</small>
            </CardText>
            <CardText>${product.price}</CardText>
            <button
              className="btn-primary cardBtn"
              size="sm"
              onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ProductCard;
