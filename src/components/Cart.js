import "../css/Cart.css";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import { FavoriteBorder, Delete } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.shoppingCart);
  const { response } = cartItems.cart;
  console.log(response);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Container className="app__container">
        <div className="cart">
          <div className="cart__container">
            <div className="cart__items">
              <div className="cart__items__title">
                <h1>
                  Cart (
                  {response.total_unique_items > 1
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
                    {response.line_items.map((item) => (
                      <tr className="cart__list" key={item.id}>
                        <td className="cart__heading">
                          <div className="product__image">
                            <img src={item?.media?.source} alt="product name" />
                          </div>
                          <div className="product__title">
                            <h1>{item.name}</h1>
                            <div className="product__actions">
                              <Button startIcon={<FavoriteBorder />}>
                                move to saved items
                              </Button>
                              <Button startIcon={<Delete />}>remove</Button>
                            </div>
                          </div>
                        </td>
                        <td className="cart__qty">
                          <div className="product__quantity">
                            <div className="minus">
                              <Button>-</Button>
                            </div>
                            <div className="qty">{item?.quantity}</div>
                            <div className="add">
                              <Button>+</Button>
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
                          <Button variant="contained">continue shopping</Button>
                          <Button variant="contained">checkout</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
