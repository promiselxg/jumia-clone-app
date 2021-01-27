import React from "react";
import "../css/ProductScreen.css";
import Container from "@material-ui/core/Container";

const ProductScreen = ({ match }) => {
  return (
    <>
      <Container fluid>
        <div className='productScreen'>
          <div className='product__breadCrumb'>
            <p>Home</p>
          </div>
          <div className='product__details'>
            <div className='product__detailsLeft'>ok</div>
            <div className='product__detailsRight'></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductScreen;
