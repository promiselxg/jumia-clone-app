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

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "PRODUCT_LIST_DETAILS_REQUEST",
    });

    const response = await commerce.products.retrieve(id);
    const { name, quantity, description, media, price } = response;
    dispatch({
      type: "PRODUCT_LIST_DETAILS_SUCCESS",
      payload: {
        name,
        quantity,
        description,
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
