import React, { useEffect } from "react";
import ListProducts from "../products/ListProducts";
import { useDispatch, useSelector } from "react-redux";
import { ProductsSkelecton } from "../screens/Skelecton";
import { listProducts } from "../actions/productActions";

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //console.log(products);
  return (
    <>
      <div className="products__display">
        {loading ? (
          <>
            <ProductsSkelecton />
            <ProductsSkelecton />
            <ProductsSkelecton />
            <ProductsSkelecton />
            <ProductsSkelecton />
            <ProductsSkelecton />
          </>
        ) : (
          products.map((product) => (
            <ListProducts
              key={product.id}
              image={product.media.source}
              name={product.name}
              price={product.price.formatted_with_symbol}
              //newPrice={product.price.formatted}
              id={product.id}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Product;
