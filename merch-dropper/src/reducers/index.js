import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import RegisterReducer from './RegisterReducers';
import LoginReducer from './LoginReducers';
import CartReducer from './CartReducers';
import ProductReducer from './ProductReducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['RegisterReducer', 'LoginReducer', 'CartReducer', 'ProductReducer']
}

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    CartReducer,
    ProductReducer
});

export default persistReducer(persistConfig, rootReducer);