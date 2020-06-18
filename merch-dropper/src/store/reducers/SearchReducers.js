import { SEARCH_STORE_START, SEARCH_STORE_SUCCESS, SEARCH_STORE_FAIL } from '../actions';

const initialState = {
    storeName: '',
    isFetching: false,
    error: ''
};

export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_STORE_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case SEARCH_STORE_SUCCESS: 
            return {
                ...state,
                storeName: action.payload,
                isFetching: false, 
                error: ''
            }
        case SEARCH_STORE_FAIL: 
            return {
                ...state,
                storeName: '',
                isFetching: false,
                error: action.payload
            }
        default: 
            return state;

    }
};

export default SearchReducer;