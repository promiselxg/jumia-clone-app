import React from "react";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
const ListProducts = ({ image, name, price, newPrice, id }) => {
  return (
    <>
      <div className='listProducts'>
        <Link to={`/product/${id}`}>
          <div className='listProducts__image'>
            <img src={image} alt={name} />
          </div>
          <div className='listProducts__name'>
            <TextTruncate line={1} element='h2' truncate='...' text={name} />
          </div>
          <div className='listProducst__price'>
            {newPrice ? (
              <div className='listProducts__priceNew'>
                <h2>
                  <span>&#8358;</span>
                  {newPrice}
                </h2>
                <h2
                  style={{
                    textDecoration: "line-through",
                    fontSize: "14px",
                  }}
                >
                  <span>&#8358;</span>
                  {price}
                </h2>
              </div>
            ) : (
              <div className='listProducts__priceOld'>
                <h2>{price}</h2>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListProducts;
