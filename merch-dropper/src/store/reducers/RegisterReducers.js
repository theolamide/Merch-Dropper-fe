import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions';

const initialState = {
    email: '',
    isFetching: false,
    error: ''
};

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isFetching: false, 
                email: action.payload,
                error: ''
            }
        case REGISTER_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default RegisterReducer;