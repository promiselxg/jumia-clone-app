import React from "react";
import products from "../Data/Products";

const ListCategories = ({ Icon, Title }) => {
  return (
    <>
      <div className='listCategories__item'>
        <img src={Icon} alt='' />
        <h1>{Title}</h1>
      </div>
    </>
  );
};

export default ListCategories;
