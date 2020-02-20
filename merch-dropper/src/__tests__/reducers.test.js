import * as reducer from '../reducers';
import CartReducer from '../reducers/CartReducers';
import initialState from '../reducers/initialState';



describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(CartReducer(undefined, {})).toEqual(initialState);
   });
});