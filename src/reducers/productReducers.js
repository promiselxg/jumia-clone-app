export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return { loading: true, ...state };
    case "PRODUCT_LIST_SUCCESS":
      return { loading: false, products: action.payload };
    case "PRODUCT_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_DETAILS_REQUEST":
      return { loading: true, product: {} };
    case "PRODUCT_LIST_DETAILS_SUCCESS":
      return { loading: false, product: action.payload };
    case "PRODUCT_LIST_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addProductToCartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART_REQUEST":
      return { ...state, loading: true };
    case "ADD_TO_CART_SUCCESS":
      return { loading: false, cart: action.payload };
    case "UPDATE_QTY_REQUEST":
      return { ...state, loading: true };
    case "UPDATE_QTY_SUCCESS":
      return { loading: false, cart: action.payload };
    case "UPDATE_QTY_FAIL":
      return { loading: false, error: action.payload };
    case "REMOVE_ITEM_REQUEST":
      return { ...state, loading: true };
    case "REMOVE_ITEM_SUCCESS":
      return { loading: false, cart: action.payload };
    case "REMOVE_ITEM_FAIL":
      return { loading: false, error: action.payload };
    case "ADD_TO_CART_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
