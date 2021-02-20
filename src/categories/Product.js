import React, { useEffect, useState } from "react";
import { commerce } from "../../src/lib/commerce";
import ListProducts from "../products/ListProducts";
import Skelecton from "../screens/Skelecton";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await commerce.products.list();

    setProducts(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //console.log(products);
  return (
    <>
      <div className='products__display'>
        {loading ? (
          <>
            <Skelecton />
            <Skelecton />
            <Skelecton />
            <Skelecton />
            <Skelecton />
            <Skelecton />
          </>
        ) : (
          products.map((product) =>
            loading ? (
              <Skelecton />
            ) : (
              <ListProducts
                key={product.id}
                image={product.media.source}
                name={product.name}
                price={product.price.formatted_with_symbol}
                //newPrice={product.price.formatted}
                id={product.id}
              />
            )
          )
        )}
      </div>
    </>
  );
};

export default Product;
