import * as action from "../store/actions";

describe("Cart Actions", () => {
  it("create an action to add to the cart", () => {
    expect(action.addToCart(action.id)).toEqual(
      expect.objectContaining({
        type: action.ADD_CART_PRODUCT,
        payload: action.id,
      })
    );
  });

  it("create an action to remove from cart", () => {
    expect(action.removeFromCart(action.id)).toEqual(
      expect.objectContaining({
        type: action.REMOVE_CART_PRODUCT,
        payload: action.id,
      })
    );
  });

  it("create an actiton to clear items from cart", () => {
    expect(action.clearItemFromCart(action.product)).toEqual(
      expect.objectContaining({
        type: action.CLEAR_CART_PRODUCT,
        payload: action.product,
      })
    );
  });
});
