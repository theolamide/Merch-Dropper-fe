import {GET_QUOTE_FAILURE, GET_QUOTE_START, GET_QUOTE_SUCCESS, ADD_ADDRESS_SUCCESS} from "../actions"

const initialQuoteState =  {
    sendQuote:{
        quoteInfo: { 
            storeID: null,
            userID: parseInt(localStorage.getItem('id'))
         },
        spInfo: {
            type: "dtg",
            designId: null,
            products: [
                {	
                id: null,
                color: "",
                quantity: null,
                size: ""
                }
            ],
            address:  {
                name: "",
                address1: "",
                city: "",
                state: "",
                zip: "",
                country: ""
            }
        }
    },

    //    quote:{ 
    //     userID: parseInt(localStorage.getItem('id')),
    //     storeID: null,
    //     total: 0.00,
    //     subtotal: 0.00,
    //     tax: 0.00,
    //     fees: 0.00,
    //     shipping: 0.00,
    //     orderToken: "",
    //     warnings: "",
    //     mode: "",
    //     isFetching: false,
    //     error: ''
    // }
}

export const QuoteReducer = (state = initialQuoteState, action) => {
    switch(action.type){
        case GET_QUOTE_START:
            return{
                ...state,
                isFetching: true
            };
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
        case ADD_ADDRESS_SUCCESS:
            return{
                ...state,
                address: action.payload
            }
        default:
            return state;
    }
}
export default QuoteReducer;
