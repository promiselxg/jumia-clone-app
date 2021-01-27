import React from "react";
import "../css/Offers.css";
import OffersOption from "./OffersOption";

const Offers = () => {
  return (
    <div className='offers'>
      <OffersOption
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/Icon-red-(2).png'
        text='Official Stores'
      />
      <OffersOption
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/JumiaGlobal-(1).png'
        text='jumia global'
      />
      <OffersOption
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/jumia-food-new-(1).png'
        text='jumia food'
      />
      <OffersOption
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/unnamed.png'
        text='airtime &amp; bills'
      />
    </div>
  );
};

export default Offers;
