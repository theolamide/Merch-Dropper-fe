import {GET_QUOTE_FAILURE, GET_QUOTE_START, GET_QUOTE_SUCCESS, GET_STORE_ID} from "../actions"

const initialQuoteState =  {
    quote:{
        userID: localStorage.getItem('id'),
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
}

export const QuoteReducer = (state = initialQuoteState, action) => {
    switch(action.type){
        case GET_QUOTE_START:
            return{
                ...state,
                isFetching: true
            };
        case GET_STORE_ID:
            return {
                ...state,
                storeId: action.payload.storeID
            }
        case GET_QUOTE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                quote: action.payload
            };
        case GET_QUOTE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
        };
        default:
            return state;
    }
}
export default QuoteReducer;
