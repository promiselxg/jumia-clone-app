export const updateCartQtyReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "UPDATE_CART_QTY_REQUEST":
      return { ...state, loading: true };
    case "UPDATE_CART_QTY_SUCCESS":
      return { loading: false, cart: action.payload };
    case "UPDATE_CART_QTY_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
