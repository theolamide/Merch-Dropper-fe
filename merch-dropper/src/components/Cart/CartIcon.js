import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/actions';
// import { selectCartItemsCount } from '../Selectors/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/ShoppingIcon.svg';

const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Icon = styled(ShoppingIcon)`
    width: 30px;
    height: 30px;
`

const ItemCount = styled.span`
    position: absolute;
    font-size: 15px;
    font-weight: bold;
    bottom: 12px;
`


const CartIcon = ({ toggleCartHidden, itemCount }) => {

    return (
        <IconWrapper onClick={toggleCartHidden}>
            <Icon />
            <ItemCount>{itemCount}</ItemCount>
        </IconWrapper>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    //itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);