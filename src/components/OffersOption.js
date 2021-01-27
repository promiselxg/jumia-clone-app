import React from "react";

const OffersOption = ({ Icon, text }) => {
  return (
    <div className='offersOption'>
      <img src={Icon} alt={text} />
      <h2>{text}</h2>
    </div>
  );
};

export default OffersOption;
