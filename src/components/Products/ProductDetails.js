import React from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductDetails = () => {
  return (
    <div className='productDetails'>
      <div className='productDetails__body'>
        <div className='productDetails__bodyProductImage'>
          <img
            src='https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/608143/1.jpg?7846'
            alt=''
          />
        </div>
        <div className='productDetails__bodyContent'>
          <div className='productDetails__bodyHeading'>
            <h1>Incerun Men Vintage Short Sleeve Stand Collar Shirt-Yellow</h1>
            <p>Brand: Incerun | Similar products from Incerun</p>
          </div>
          <Divider className='divider' />
          <div className='productDetails__price'>
            <span className='productDetails__priceNewPrice'>&#8358;2,000</span>
            <span className='productDetails__priceOldPrice'>&#8358;3,725</span>
          </div>
          <Divider className='divider' />
          <div className='productDetails__size'>
            <div className='productSize__heading'>
              <p>Select Variation</p>
              <p>Size guide</p>
            </div>
            <div className='productSize__container'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>2XL</div>
              <div>3XL</div>
              <div>4XL</div>
              <div>5XL</div>
            </div>
          </div>
          <div className='productDetails__addToCartBtn'>
            <Button
              variant='contained'
              startIcon={<AddShoppingCartIcon className='startIcon' />}
              className='buttonText'
            >
              Add to cart
            </Button>
          </div>
          <Divider className='divider' />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
