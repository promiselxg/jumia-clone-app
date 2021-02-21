import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import States from "./States";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import ReplayIcon from "@material-ui/icons/Replay";
import { RectImageSkeleton, TextSkeleton } from "../../screens/Skelecton";
import { commerce } from "../../lib/commerce";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

const ProductDetails = ({ data, loading }) => {
  const [cartItem, setCartItem] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleAddToCart = async (productId, qty) => {
    setisLoading(true);
    const item = await commerce.cart.add(productId, qty);
    setCartItem(item);
    setOpen(true);
    setisLoading(false);
  };
  console.log(cartItem);
  return (
    <>
      <Collapse in={open}>
        <Alert
          onClose={() => {
            setOpen(false);
          }}
          variant='outlined'
          severity='success'
          style={{ marginTop: "5px" }}
        >
          Item added to cart
        </Alert>
      </Collapse>
      <div className='productDetails'>
        <div className='productDetails__body'>
          <div className='productDetails__bodyProductImage'>
            {loading ? (
              <RectImageSkeleton />
            ) : (
              <img src={data.src} alt={data.name} />
            )}
          </div>
          <div className='productDetails__bodyContent'>
            <div className='productDetails__bodyHeading'>
              {loading ? (
                <TextSkeleton />
              ) : (
                <>
                  <h1>{data.name}</h1>
                  <p>Brand: Incerun | Similar products from Incerun</p>
                </>
              )}
            </div>
            <Divider className='divider' />
            <div className='productDetails__price'>
              {loading ? (
                <TextSkeleton />
              ) : (
                <>
                  <span className='productDetails__priceNewPrice'>
                    {data.price}
                  </span>
                  {data.newPrice && (
                    <span className='productDetails__priceOldPrice'>
                      &#8358;3,725
                    </span>
                  )}
                </>
              )}
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
                disabled={isLoading}
                onClick={() => handleAddToCart(data.id, 1)}
              >
                {isLoading && (
                  <CircularProgress size={24} className='buttonProgress' />
                )}
                Add to cart
              </Button>
            </div>
            <Divider className='divider' />
          </div>
        </div>
        <div className='productDetails__right'>
          <div className='productDetails__rightContainer'>
            <h1>DELIVERY &amp; RETURNS</h1>
            <Divider className='divider' />
            <h1>Choose your location</h1>
            <States />
            <div className='productDetails__delivery'>
              <div>
                <span>
                  <LocalShippingIcon />
                </span>
                <span>
                  <h3>Door Delivery</h3>
                  <p>
                    Ready for delivery between 25 Mar &amp; 1 Apr when you order
                    within next 22hrs 14mins
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <TouchAppIcon />
                </span>
                <span>
                  <h3>Pickup Station</h3>
                  <p>
                    Ready for delivery between 25 Mar &amp; 1 Apr when you order
                    within next 22hrs 14mins
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <AllInboxIcon />
                </span>
                <span>
                  <h3>Postal Shipping</h3>
                  <p>
                    Ready for delivery between 6 Apr &amp; 4 May when you order
                    within next 22hrs 14mins
                  </p>
                </span>
              </div>
              <div>
                <span>
                  <ReplayIcon />
                </span>
                <span>
                  <h3>Return Policy</h3>
                  <p>
                    Free return within 15 days for Jumia Mall items and 7 days
                    for other eligible items.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
