import React from "react";
import "../../css/ProductCollections.css";
const ProductCollections = ({ image, title }) => {
  return (
    <div className='productCollection__item'>
      <img src={image} alt='' />
      <h2>{title}</h2>
    </div>
  );
};

export default ProductCollections;
