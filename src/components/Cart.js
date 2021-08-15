import React, { useEffect } from "react";
import "../css/Cart.css";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import { FavoriteBorder, Delete } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromCart, updateCartQty } from "../actions/productActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart);
  const { loading } = cartItems;
  const { response } = cartItems.cart;

  // update item quantity
  const handleUpdateCartQty = async (product_id, qty) => {
    dispatch(updateCartQty(product_id, qty));
  };
  //  Remove Item from cart
  const handleRemoveCartItem = async (product_id) => {
    dispatch(removeFromCart(product_id));
  };

  useEffect(() => {
    if (response.total_items === 0) {
      console.log("Your cart is empty");
    }
    window.scrollTo(0, 0);
  }, [response.total_items]);

  return (
    <>
      <div className="toast__notification">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          transition={Slide}
          draggable={false}
        />
      </div>
      <Container className="app__container">
        <div className="cart">
          <div className="cart__container">
            {cartItems?.cart?.response === 0 ? (
              "Empty Cart"
            ) : (
              <div className="cart__items">
                <div className="cart__items__title">
                  <h1>
                    Cart (
                    {response?.total_unique_items > 1
                      ? `${response?.total_unique_items} items`
                      : `${response?.total_unique_items} item`}
                    )
                  </h1>
                  <h2>Your order is eligible for free shipping</h2>
                </div>
                <div className="cart__items__details">
                  <table>
                    <tbody>
                      <tr className="cart__item">
                        <th className="table__heading">Item</th>
                        <th className="table__qty">Quantity</th>
                        <th className="table__unitprice">unit price</th>
                        <th className="table__subtotal">subtotal</th>
                      </tr>
                      {response?.line_items?.map((item) => (
                        <tr className="cart__list" key={item?.id}>
                          <td className="cart__heading">
                            <div className="product__image">
                              <Link to={`/product/${item?.product_id}`}>
                                <img
                                  src={item?.media?.source}
                                  alt="product name"
                                />
                              </Link>
                            </div>
                            <div className="product__title">
                              <Link to={`/product/${item?.product_id}`}>
                                <h1>{item?.name}</h1>
                              </Link>
                              <div className="product__actions">
                                <Button startIcon={<FavoriteBorder />}>
                                  move to saved items
                                </Button>
                                <Button
                                  startIcon={<Delete />}
                                  disabled={loading}
                                  onClick={() => handleRemoveCartItem(item?.id)}
                                >
                                  remove
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td className="cart__qty">
                            <div className="product__quantity">
                              <div className="minusx">
                                <Button
                                  type="button"
                                  size="small"
                                  disabled={loading}
                                  onClick={() =>
                                    handleUpdateCartQty(
                                      item?.id,
                                      item?.quantity - 1
                                    )
                                  }
                                >
                                  -
                                </Button>
                              </div>
                              <div className="qty">
                                {loading ? (
                                  <CircularProgress
                                    size={24}
                                    className="circleProgress"
                                  />
                                ) : (
                                  item?.quantity
                                )}
                              </div>
                              <div className="addx">
                                <Button
                                  type="button"
                                  size="small"
                                  disabled={loading}
                                  onClick={() =>
                                    handleUpdateCartQty(
                                      item?.id,
                                      item?.quantity + 1
                                    )
                                  }
                                >
                                  +
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td className="cart__unitprice">
                            <div className="product__unit__price">
                              <p>{item?.price?.formatted_with_symbol}</p>
                            </div>
                          </td>
                          <td className="cart__subtotal">
                            <div className="product__sub__total">
                              <p>{item?.line_total?.formatted_with_symbol}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                      <tr className="cart__total">
                        <td className="total">
                          <h1>total:</h1>
                          <h1>{response?.subtotal?.formatted_with_symbol}</h1>
                        </td>
                        <td className="checkout">
                          <div>
                            <Button variant="contained">
                              continue shopping
                            </Button>
                            <Button variant="contained">checkout</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
