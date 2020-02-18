import * as reducer from '../reducers';
import CartReducer from '../reducers/CartReducers';

describe('Cart Reducers', () => {
    // it('should add item to empty state', () => {
    //     const stateBefore = [];
    //     const action = {
    //       type: 'ADD_CART_PRODUCT',
    //       id: 0,
    //       count: 1,
    //     };
    //     const stateAfter = [
    //         {
    //           id: 0,
    //           count: 1,
    //         },
    //       ];
    //     expect(
    //     CartReducer(stateBefore, action)
    //     ).toEqual(stateAfter);    
    // });
    it('should add item to existing state', () => {
        let cartItems = [];
        const stateBefore = [
          {
            id: 0,
            count: 1,
            cart: []
          },
        ];
        const action = {
          type: 'ADD_CART_PRODUCT',
          id: 1,
          count: 1
        };
        const stateAfter = [
          ...stateBefore,
          {
            id: 1,
            count: 1,
          },
        ];
  
        expect(
          CartReducer(stateBefore, action)
        ).toEqual(stateAfter);
      });
  
});