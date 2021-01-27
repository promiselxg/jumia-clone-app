import React from "react";
import Product from "../categories/Product";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ProductOptions = ({ text, color }) => {
  return (
    <div className='productOptions'>
      <div className='productOptions__heading'>
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
            className='topselling__headingOption'
          >
            <h1>{text}</h1>
            <h1>
              See All{" "}
              <p>
                <ChevronRightIcon />
              </p>
            </h1>
          </div>
        ) : (
          <h1 className='productOptions__headingDefault'>Top Selling items</h1>
        )}
      </div>
      <Product />
    </div>
  );
};

export default ProductOptions;
