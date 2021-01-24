import React from "react";
import "../css/Topselling.css";
import Products from "../components/products/Products";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { scent } from "../Data/Products";

const Perfumes = ({ text, color }) => {
  return (
    <>
      <div className='topselling'>
        <div className='topselling__title'>
          {text ? (
            <div
              style={{
                backgroundColor: `${color}`,
                width: "100%",
                padding: "10px",
                borderRadius: "5px 5px 0px 0px",
                display: "flex",
                justifyContent: "space-between",
              }}
              className='topselling__background'
            >
              <h1>{text}</h1>
              <h1>
                See All <ChevronRightIcon />
              </h1>
            </div>
          ) : (
            <h1>Top Selling items</h1>
          )}
        </div>
        <div className='topselling__body'>
          {scent.map((product, index) => (
            <Products
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              newPrice='37900'
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Perfumes;
