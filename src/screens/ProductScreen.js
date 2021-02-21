import React from "react";
import "../css/ProductScreen.css";
import Container from "@material-ui/core/Container";
import ProductDetails from "../components/Products/ProductDetails";
import Breadcrum from "../components/Products/Breadcrum";
import "../css/ProductDetails.css";

const ProductScreen = ({ match }) => {
  return (
    <>
      <Container className='app__container productScreen'>
        <Breadcrum />
        <ProductDetails id={match} />
      </Container>
    </>
  );
};

export default ProductScreen;
