import { commerce } from "../lib/commerce";
import { toast } from "react-toastify";
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

export const addToCart =
  (product_id, qty, product_name) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ADD_TO_CART_REQUEST",
      });
      //await commerce.cart.remove();
      //return false;
      const response = await commerce.cart.add(product_id, qty);
      const { cart } = response;
      dispatch({
        type: "ADD_TO_CART_SUCCESS",
        payload: {
          response: cart,
        },
      });
      // emit toast notification
      toast.success(`${product_name} added to cart`, {
        className: "toasting",
      });
      // add cart to local storage
      localStorage.setItem(
        "items_in_cart",
        JSON.stringify(getState().shoppingCart.cart.response)
      );
    } catch (error) {
      dispatch({
        type: "ADD_TO_CART_FAIL",
        payload: error,
      });
    }
  };

export const updateCartQty =
  (product_id, qty) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "UPDATE_QTY_REQUEST",
      });
      const response = await commerce.cart.update(product_id, {
        quantity: qty,
      });
      const { cart } = response;
      dispatch({
        type: "UPDATE_QTY_SUCCESS",
        payload: {
          status: true,
          response: cart,
        },
      });
      // emit toast notification
      toast.success(`Item Quantity Successfully Updated`, {
        className: "toasting",
      });
      // add cart to local storage
      localStorage.setItem(
        "items_in_cart",
        JSON.stringify(getState().shoppingCart.cart.response)
      );
    } catch (error) {
      dispatch({
        type: "UPDATE_QTY_FAIL",
        payload: error,
      });
    }
  };
