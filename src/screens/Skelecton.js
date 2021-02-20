import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
const Skelecton = () => {
  return (
    <div className='product__displayPreview'>
      <div className='skelecton'>
        <div className='skelecton__productImage'>
          <Skeleton
            variant='rect'
            width={190}
            height={125}
            component='div'
            animation='wave'
          />
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

export default Skelecton;
