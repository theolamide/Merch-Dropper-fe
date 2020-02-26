  import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import RegisterReducer from './RegisterReducers';
import LoginReducer from './LoginReducers';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['RegisterReducer', 'LoginReducer', 'CartReducer', 'ProductReducer'] //Add any new reducers to this array for perisitence to work
}

const rootReducer = combineReducers({
    RegisterReducer,
    LoginReducer,
    CartReducer,
    ProductReducer
});

export default persistReducer(persistConfig, rootReducer);
