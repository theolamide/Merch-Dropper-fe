import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

// Registration Actions
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const postUser = (credentials) => dispatch => {
    // console.log('credentials', credentials)
    dispatch({ type: REGISTER_START })
    axios.post('https://merchdropper-production.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            console.log('postUser res', res);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('postUser err', err)
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
};

// Login Actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const userLogin = (loginInfo) => dispatch => {
    console.log('loginInfo', loginInfo)
    dispatch({ type: LOGIN_START })
    axiosWithAuth()
        .post('/api/auth/login', loginInfo)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
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
        .get(`/api/designs/${productId}`)
        .then(res => {
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_PRODUCTS_FAIL, payload: err })
        })
};

//post request to add a new product to store
export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';

export const addProduct = newProduct => dispatch => {
    dispatch({ type: ADD_PRODUCT_START })
    axiosWithAuth()
        .post('/api/designs', newProduct)
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
export const REMOVE_PRODUCT_FAIL = 'REMOVE_PRODUCT_FAIL';

export const removeProduct = productId => dispatch => {
    dispatch({ type: REMOVE_PRODUCT_START })
    axiosWithAuth()
        .delete(`/api/designs/${productId}`)
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
    // console.log('action called', product)
    return {
        type: ADD_CART_PRODUCT,
        payload: product
    }
};

// remove one single item from shopping cart. e.g if 10 yellow shirts, remove 1 of the 10 yellow shirts.
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';
export const removeFromCart = product => {
    // console.log('removeaction called', product)
    return {
        type: REMOVE_CART_PRODUCT,
        payload: product
    }
};

//Clear whole item from cart. e.g if 10 yellow shirts, remove all 10 at once.
export const CLEAR_CART_PRODUCT = 'CLEAR_CART_PRODUCT';
export const clearItemFromCart = product => {
    return {
        type: CLEAR_CART_PRODUCT,
        payload: product
    }
};

//toggle shopping cart
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN';
export const toggleCartHidden = (cart) => {
    // console.log('hide cart toggle triggered', cart)
    return {
        type: TOGGLE_CART_HIDDEN
    }
};

//search for stores
export const SEARCH_STORE_START = 'SEARCH_STORE_START';
export const SEARCH_STORE_SUCCESS = 'SEARCH_STORE_SUCCESS';
export const SEARCH_STORE_FAIL = 'SEARCH_STORE_FAIL';

export const searchStoreName = (storeName) => dispatch => {
    let encodedURI = encodeURI(storeName)
    // console.log('search action called', encodedURI)
    dispatch({ type: SEARCH_STORE_START })
    axios.get(`https://merchdropper-production.herokuapp.com/api/stores/storename/${encodedURI}`)
        .then(res => {
            dispatch({ type: SEARCH_STORE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: SEARCH_STORE_FAIL, payload: err })
        })
};

export const GET_QUOTE_START = "GET_QUOTE_START";
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS";
export const GET_QUOTE_FAILURE = "GET_QUOTE_FAILURE";
export const GET_STORE_ID = "GET_STORE_ID";

export const getQuote = (quote) => dispatch => {
    const userId = localStorage.getItem('id')
    dispatch({type: GET_QUOTE_START})
    axiosWithAuth()
        .get(`/api/stores/user/${userId}`)
        .then(res => {
            dispatch({type: GET_STORE_ID, payload: res.data})
            axiosWithAuth()
                .post('/api/quotes', quote)
                .then(res => {
                    dispatch({type: GET_QUOTE_SUCCESS, payload: res.data})
                })
                .catch(err => {
                    dispatch({type: GET_QUOTE_FAILURE, payload: err})                
})
        })
        
}