import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCart } from "../../store/actions";
// import { selectCartItemsCount } from '../Selectors/cart.selectors';

import ShoppingIcon from "../../assets/ShoppingIcon.svg";

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    width: 40px;
    height: 40px;
  }
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 12px;
`;

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <IconWrapper onClick={toggleCart}>
      <Icon src={ShoppingIcon} />
      <ItemCount>{itemCount}</ItemCount>
    </IconWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

const mapStateToProps = createStructuredSelector({
  //itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
