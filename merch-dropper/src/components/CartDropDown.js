import React from 'react';
import styled from 'styled-components';

import { Button } from 'reactstrap';


const CartDropdownDiv = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 0.25rem;
    border: 1px solid #0369d9;
    background-color: white;
    top: 90px;
    right: 20px;
    z-index: 5;
`

const CartItemsDiv = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    // overflow: scroll;
`

const CustomButton = styled(Button)`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 0.75rem;
    background-color: #0369d9;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

        &:hover {
            background-color: white;
            color: #0369d9;
            border: 1px solid #0369d9;
        }
`


const CartDropdown = () => (
    <CartDropdownDiv className='cart-dropdown'>
        <CartItemsDiv className='cart-items'>

        </CartItemsDiv>
        <CustomButton>
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownDiv>
)


export default CartDropdown;