import React from "react";
import {
  TopSellingProducts,
  DealsOfTheDay,
  products,
  scent,
} from "../Data/Products";
import ListProducts from "../products/ListProducts";
let itemCategory = TopSellingProducts;

const Product = ({ category }) => {
  if (category === "todayDeals") {
    itemCategory = DealsOfTheDay;
  } else if (category === "jumia_festival") {
    itemCategory = products;
  } else if (category === "scents") {
    itemCategory = scent;
  } else {
    itemCategory = TopSellingProducts;
  }
  return (
    <>
      <div className='products__display'>
        {itemCategory.map((product) => (
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
