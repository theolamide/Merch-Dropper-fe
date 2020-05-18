import {GET_QUOTE_FAILURE, GET_QUOTE_STARTED, GET_QUOTE_SUCCESS} from "../actions/index.js"

const initialQuoteState = {
    userID: null,
    storeID: null,
    total: 0.00,
    subtotal: 0.00,
    tax: 0.00,
    fees: 0.00,
    shipping: 0.00,
    orderToken: "",
    warnings: "",
    mode: "",
    isFetching: false,
    error: ''
}

export const QuoteReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_QUOTE_STARTED:
            return{
                ...state,
                isFetching: true
            };
        case GET_QUOTE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                state: action.payload
            };
        case GET_QUOTE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
        }
    }
}