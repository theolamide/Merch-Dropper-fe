import {GET_QUOTE_FAILURE, GET_QUOTE_START, GET_QUOTE_SUCCESS, ADD_ADDRESS_SUCCESS, ADD_PRODUCT_QUOTE, SET_DESIGNID_QUOTE} from "../actions"

const initialQuoteState =  {
    sendQuote:{
        quoteInfo: { 
            storeID: parseInt(localStorage.getItem('store_id')),
            userID: parseInt(localStorage.getItem('id'))
         },
        spInfo: {
            type: "dtg",
            designId: null,
            products: [
                {	
                id: null,
                color: "",
                designId: null,
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
                spInfo:{
                    ...state.spInfo,
                address: action.payload
                }
            };
        case ADD_PRODUCT_QUOTE:
            return{
                ...state.sendQuote,
                quoteInfo:{
                storeID: action.payload.quoteInfo.storeID,
                userID: action.payload.quoteInfo.userID,
                },
                spInfo:{
                products: action.payload.spInfo.products,
                designId: action.payload.spInfo.designId
                }

            };
        case SET_DESIGNID_QUOTE:
            return{
                ...state.sendQuote,
                designId: action.payload
            };
        default:
            return state;
    }
}
export default QuoteReducer;
