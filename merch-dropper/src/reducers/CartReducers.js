import { ADD_CART_PRODUCT, REMOVE_CART_PRODUCT } from '../actions';
import initialState from './initialState';



const CartReducer = (state = initialState, action) => {
    let cart = state.cart;
    console.log('current cart state', cart)

    switch (action.type) {
        case ADD_CART_PRODUCT:
            cart.push(action.payload)
            return {
                ...state,
                cart: cart,
                error: ''
            }
        case REMOVE_CART_PRODUCT:
            return {
                ...state,
                cart: cart.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
};

export default CartReducer;