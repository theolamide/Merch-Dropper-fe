import { 
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    ADD_PRODUCT_START,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    REMOVE_PRODUCT_START, 
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL
 } from '../actions';
import initialState from './initialState';

 const ProductReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS_START:
            return { 
                ...state,
                isFetching: true,
                error: '' 
            }
        case GET_PRODUCTS_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                products: action.payload,
                error: ''
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_PRODUCT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.payload,
                error: ''
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            } 
        case REMOVE_PRODUCT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }   
        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: state.products.filter(product => {
                    return product.productId !== action.payload
                }),
                error: ''
            }
        case REMOVE_PRODUCT_FAIL: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
            return state;
    }
 };

export default ProductReducer;