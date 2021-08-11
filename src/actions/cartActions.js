import { commerce } from "../lib/commerce";
import { toast } from "react-toastify";
export const updateCartQty =
  (product_id, qty) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "UPDATE_CART_QTY_REQUEST",
      });
      //await commerce.cart.remove();
      //return false;
      const response = await commerce.cart.update(product_id, { qty });
      const { cart } = response;
      dispatch({
        type: "UPDATE_CART_QTY_SUCCESS",
        payload: {
          response: cart,
        },
      });
      // emit toast notification
      toast.success(`added to cart`, {
        className: "toasting",
      });
      // add cart to local storage
      localStorage.setItem(
        "items_in_cart",
        JSON.stringify(getState().shoppingCart.cart.response)
      );
    } catch (error) {
      dispatch({
        type: "UPDATE_CART_QTY_FAIL",
        payload: error,
      });
    }
  };
