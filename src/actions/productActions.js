import { commerce } from "../lib/commerce";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_LIST_REQUEST",
    });
    const { data } = await commerce.products.list();

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_FAIL",
      payload: error,
    });
  }
};

export const listProductDetails = (pid) => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_LIST_DETAILS_REQUEST",
    });
    const response = await commerce.products.retrieve(pid);
    const { name, quantity, description, media, price, id } = response;
    dispatch({
      type: "PRODUCT_LIST_DETAILS_SUCCESS",
      payload: {
        name,
        quantity,
        description,
        id,
        src: media.source,
        price: price.formatted_with_symbol,
      },
    });
  } catch (error) {
    dispatch({
      type: "PRODUCT_LIST_DETAILS_FAIL",
      payload: error,
    });
  }
};

export const addToCart = (product_id, qty) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TO_CART_REQUEST",
    });
    console.log(product_id, qty);

    const response = await commerce.cart.add(product_id, qty);
    const { cart } = response;
    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: {
        cart,
      },
    });
  } catch (error) {
    dispatch({
      type: "ADD_TO_CART_FAIL",
      payload: error,
    });
  }
};
