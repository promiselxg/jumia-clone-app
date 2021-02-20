import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
const ProductsSkelecton = () => {
  return (
    <div className='product__displayPreview'>
      <div className='skelecton'>
        <div className='skelecton__productImage'>
          <Skeleton variant='rect' width={190} height={125} animation='wave' />
        </div>
        <div className='skelecton__productName'>
          <Skeleton animation='wave' />
        </div>
        <div className='skelecton__productPrice'>
          <Skeleton variant='text' component='div' animation='wave' />
        </div>
      </div>
    </div>
  );
};

const RectImageSkeleton = () => {
  return (
    <>
      <Skeleton variant='rect' width={250} height={220} animation='wave' />
    </>
  );
};

const TextSkeleton = () => {
  return (
    <>
      <Skeleton
        variant='text'
        height={20}
        animation='wave'
        style={{ marginRight: "10px" }}
      />
    </>
  );
};
export { ProductsSkelecton, RectImageSkeleton, TextSkeleton };
