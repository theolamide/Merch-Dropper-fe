import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import NavBar from "./NavBar";
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions';

const ShoppingCart = (props) => {
     console.log('cart props', props)
    return (
        <div>
<<<<<<< HEAD:merch-dropper/src/components/ShoppingCart.js
            {/* <NavBar /> */}
            {props.cart.cart.map(product => (
=======
            {props.cart.map(product => (
>>>>>>> 8d457b25d6628707454d1c2ee6b6dd53cb901400:merch-dropper/src/components/Cart/ShoppingCart.js
                <ShoppingCartItem key={product.id} product={product} removeFromCart={props.removeFromCart} />
            ))}
        </div>
    )
};

const mapStateToProps = (state, props) => {
    // console.log('state from shoppingcart', state.CartReducer.cart)
    return {
        cart: state.CartReducer.cart
    }
}


export default connect(mapStateToProps, { removeFromCart })(ShoppingCart);



