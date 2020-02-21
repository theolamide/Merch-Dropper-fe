import CartReducer from '../store/reducers/CartReducer.js';
import initialState from '../store/reducers/initialState.js';



describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(CartReducer(undefined, {})).toEqual(initialState);
 });
});