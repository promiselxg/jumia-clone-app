import React from "react";
import "../css/AdBanner.css";

const AdBanner = ({ Image1 }) => {
  return (
    <div className='adbanner'>
      <div className='adbanner__image'>
        <img src={Image1} alt='' />
      </div>
    </div>
  );
};

export default AdBanner;
