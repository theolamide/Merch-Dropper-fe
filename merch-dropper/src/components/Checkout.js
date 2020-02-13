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
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem =>
                // <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                <div className='checkout-item'>
                    <div className='image-container'>
                        <img src={cartItem.url} alt='item' />
                    </div>
                    <span className='name'>{cartItem.name}</span>
                    <span className='quantity'>
                        {/* <div className='arrow' onClick={() => removeItem(cartItem)} >&#10094;</div> */}
                        <span className='value'>{cartItem.quantity}</span>
                        {/* <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div> */}
                    </span>
                    <span className='price'>{cartItem.price}</span>
                    {/* <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div> */}
                </div>
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