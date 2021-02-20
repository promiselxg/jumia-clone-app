import React, { useEffect, useState } from "react";
import "../css/ProductScreen.css";
import Container from "@material-ui/core/Container";
import ProductDetails from "../components/Products/ProductDetails";
import Breadcrum from "../components/Products/Breadcrum";
import "../css/ProductDetails.css";
import { commerce } from "../../src/lib/commerce";

const ProductScreen = ({ match }) => {
  const { id } = match.params;
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSingleProduct = async (id) => {
    setLoading(true);
    const response = await commerce.products.retrieve(id);
    const { name, media, quantity, description, price } = response;
    setSingleProduct({
      id,
      name,
      quantity,
      description,
      src: media.source,
      price: price.formatted_with_symbol,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  return (
    <>
      <Container className='app__container productScreen'>
        <Breadcrum />
        <ProductDetails data={singleProduct} loading={loading} />
      </Container>
    </>
  );
};

export default ProductScreen;
