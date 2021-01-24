import React from "react";
import Offers from "./Offers";

const AppOffers = () => {
  return (
    <>
      <Offers
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/Icon-red-(2).png'
        text='Official Stores'
      />
      <Offers
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/JumiaGlobal-(1).png'
        text='Jumia Global'
      />
      <Offers
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/jumia-food-new-(1).png'
        text='Jumia Food'
      />
      <Offers
        Icon='https://ng.jumia.is/cms/Homepage/2021/w03/unnamed.png'
        text='Airtime &amp; Bills'
      />
    </>
  );
};

export default AppOffers;
