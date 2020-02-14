import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

const CheckoutPageWrapper = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`

const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

        &:last-child {
            width: 8%;
        }
`

const Total = styled.div`
    gin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`
const CheckoutItemWrapper = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`
const ImageWrapper = styled.div`
    width: 23%;
    padding-right: 15px;
`

const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
`

const DescriptionWrapper = styled.span`
    width: 23%;
    display: flex;
    font-size: 1rem;
    padding-right: 1rem;
`
const QuantityWrapper = styled.span`
    display: flex;
    width: 23%;
`
const PriceWrapper = styled.span`
    width: 23%;
`
const Arrow = styled.div`
    cursor:pointer;
`

const ValueDiv = styled.span`
    margin: 0 10px;
`
const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`


const CheckoutPage = ({ cartItems, total }) => (

    <CheckoutPageWrapper className='checkout-page'>
        <CheckoutHeader className='checkout-header'>
            <HeaderBlock className='header-block'>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span>Unit Price</span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem =>
                // <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                <CheckoutItemWrapper className='checkout-item'>
                    <ImageWrapper className='image-container'>
                        <ImageContainer src={cartItem.url} alt='item' />
                    </ImageWrapper>
                    <DescriptionWrapper className='description'>{cartItem.design} in {cartItem.color}</DescriptionWrapper>
                    <QuantityWrapper className='quantity'>
                        <Arrow className='arrow'>&#10094;</Arrow>
                        {/* <div className='arrow' onClick={() => removeItem(cartItem)} >&#10094;</div> */}
                        <ValueDiv className='value'>{cartItem.quantity}</ValueDiv>
                        <Arrow className='arrow'>&#10095;</Arrow>
                        {/* <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div> */}
                    </QuantityWrapper>
                    <PriceWrapper className='price'>${cartItem.price}</PriceWrapper>
                    <RemoveButton className='remove-button' >&#10005;</RemoveButton>
                    {/* <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div> */}
                </CheckoutItemWrapper>
            )
        }
        {/* <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <StripeCheckoutButton price={total} /> */}
    </CheckoutPageWrapper>
);

const mapStateToprops = (state) => {
    console.log(state)
    return {
        cartItems: state.CartReducer.cart,
        // total: selectCartTotal
    }
}

export default connect(mapStateToprops)(CheckoutPage);