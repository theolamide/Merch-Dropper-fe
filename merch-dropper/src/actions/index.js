import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

// Registration Actions
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const postUser = (registerInfo) => dispatch => {
    dispatch({ type: REGISTER_START })
    axios.post('DEPLOYEDURL', registerInfo)
        .then(res => {
            console.log(res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .cactch(err => {
            console.log(err)
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
};

// Login Actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = (loginInfo) => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('/login', loginInfo)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err=> {
            console.log(err)
            dispatch({ type: LOGIN_FAILURE, payload: err })
        })
};

// Product Actions - get request to display products
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const getProducts = (productId) => dispatch => {
    dispatch({ type: GET_PRODUCTS_START })
    axiosWithAuth()
        .get(`PLACEHOLDERURL/${productId}`)
        .then(res => {
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_PRODUCTS_FAIL, payload: err })
        })
};

//post request to add a new product to store
export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS ='ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';

export const addProduct = newProduct => dispatch => {
    dispatch({ type: ADD_PRODUCT_START })
    axiosWithAuth()
        .post('PLACEHOLDER URL', newProduct)
        .then(res => {
            dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: ADD_PRODUCT_FAIL, payload: err })
        })
};

// delete request to remove product from store
export const REMOVE_PRODUCT_START = 'REMOVE_PRODUCT_START';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export  const REMOVE_PRODUCT_FAIL =  'REMOVE_PRODUCT_FAIL';

export const removeProduct = productId => dispatch => {
    dispatch({ type: REMOVE_PRODUCT_START })
    axiosWithAuth()
        .delete(`PLACEHOLDERURL/${productId}`)
        .then(res => {
            dispatch({ type: REMOVE_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: REMOVE_PRODUCT_FAIL, payload: err })
        })
};


// Shopping Cart Actions - add item to shopping cart
export const ADD_CART_PRODUCT = 'ADD_CART_PRODUCT';
export const addToCart = product => {
    console.log('action called', product)
    return { 
        type: ADD_CART_PRODUCT, 
        payload: product
    }
};

// remove item from shopping cart
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';
export const removeFromCart = product => {
    console.log('removeaction called', product)
    return {
        type: REMOVE_CART_PRODUCT,
        payload: product.id
    }
};
