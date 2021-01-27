import React from "react";
import { TopSellingProducts } from "../Data/Products";
import ListProducts from "../products/ListProducts";

const Product = () => {
  return (
    <>
      <div className='products__display'>
        {TopSellingProducts.map((product) => (
          <ListProducts
            key={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            newPrice={product.newPrice}
            id={product._id}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
