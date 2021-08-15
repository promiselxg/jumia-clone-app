import { Button } from "@material-ui/core";
import React from "react";
import "../css/EmptyCart.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="emptycart">
        <div className="emptycart__container">
          <div className="emptycart__content">
            <div className="image">
              <img
                src="https://www.jumia.com.ng/images/oshun/cart/empty-cart.png"
                alt="empty cart"
              />
            </div>
            <div className="text">
              <h1>Your cart is Empty!</h1>
            </div>
            <div className="link">
              <h1>
                Already have an account?{" "}
                <Link to="/customer/profile/login">Login</Link> to see the items
                in your cart.
              </h1>
            </div>
            <div className="button">
              <Button className="buttonEmpty">start shopping</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
