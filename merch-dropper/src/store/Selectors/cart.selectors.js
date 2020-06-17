import { createSelector } from 'reselect';

const selectCart = state => state.CartReducer; //this is an input selector

export const selectCartItems = createSelector(
    [selectCart],
    (CartReducer) => CartReducer.cart
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.filter((item) => item.storeID === Number(localStorage.getItem("storeID"))).reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)
