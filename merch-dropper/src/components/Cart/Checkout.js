import React, { useEffect } from "react";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import {Link} from "react-router-dom";


import StripeCheckoutButton from "../StripeButton";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Selectors/cart.selectors";
import {
  addToCart,
  removeFromCart,
  clearItemFromCart,
  setQuote,
  getQuote
} from "../../store/actions/index";

const CheckoutPage = ({
  cart,
  total,
  match,
  addItem,
  removeItem,
  clearItem,
}) => {
  
 
  const dispatch = useDispatch();
  const { domain_name } = match.params;
  useEffect(() => {
    dispatch(setQuote({
      spInfo:{
        cart
      }
    }))
    // if(quote && quote.quoteInfo.length > 0) 
    // { console.log(quote)
    //   dispatch(getQuote(quote.quoteInfo))}
    // GET request to 'stores/domain/${match.params.domain_name}'

    axios
      .get(
        `http://localhost:5032/api/stores/domain/${domain_name}`
      )
      .then((res) => {
        if (Number(res.data.id) !== Number(localStorage.getItem("storeID"))) {
          localStorage.setItem("storeID", Number(res.data.id));
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params, domain_name]);

// const CheckoutPage = ({ cart, total, addItem, removeItem, clearItem }) => {
  // const { domain_name } = useParams();
  console.log('checkout params', domain_name)
  return (
    <CheckoutPageWrapper className="checkout-page">
      <CheckoutHeader className="checkout-header">
        <HeaderBlock className="header-block">
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Unit Price</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cart
        .filter(
          (item) => item.storeID === Number(localStorage.getItem("storeID"))
        )
        .map((cartItem) => (
          // <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          <CheckoutItemWrapper key={cartItem.id} className="checkout-item">
            <ImageWrapper className="image-container">
              <ImageContainer src={cartItem.thumbnailURL} alt="item" />
            </ImageWrapper>
            <DescriptionWrapper className="description">
              {cartItem.description}
            </DescriptionWrapper>
            <QuantityWrapper className="quantity">
              <Arrow className="arrow" onClick={() => removeItem(cartItem)}>
                &#10094;
              </Arrow>
              <ValueDiv className="value">{cartItem.quantity}</ValueDiv>
              <Arrow className="arrow" onClick={() => addItem(cartItem)}>
                &#10095;
              </Arrow>
            </QuantityWrapper>
            <PriceWrapper className="price">${cartItem.price}</PriceWrapper>
            <RemoveButton
              className="remove-button"
              onClick={() => clearItem(cartItem)}
            >
              &#10005;
            </RemoveButton>
          </CheckoutItemWrapper>
        ))}
      <Total className="total">
        <span>Total: ${total}</span>
      </Total>
      <Link to="/:domain-name/address" 
      >Next</Link>
      
      <StripeCheckoutButton price={total} domain={domain_name} />
    </CheckoutPageWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addToCart(item)),
  removeItem: (item) => dispatch(removeFromCart(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  // setQuote: (item, id) => dispatch(setQuote(item, id))
});

const mapStateToprops = createStructuredSelector({
  cart: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToprops, mapDispatchToProps)(CheckoutPage);

const CheckoutPageWrapper = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media (max-width: 600px) {
    font-size: 0.75rem;
    width: 80%;
  }
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 25px;
`;
const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const DescriptionWrapper = styled.span`
  width: 23%;
  display: flex;
  font-size: 1rem;
  padding-right: 1rem;
`;
const QuantityWrapper = styled.span`
  display: flex;
  width: 23%;
`;
const PriceWrapper = styled.span`
  width: 23%;
`;
const Arrow = styled.div`
  cursor: pointer;
`;

const ValueDiv = styled.span`
  margin: 0 10px;
`;
const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
