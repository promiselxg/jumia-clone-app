import React from "react";
import "../css/RightBar.css";
const RightBarOptions = ({ Icon, text, desc }) => {
  return (
    <>
      <div className='rightbar__topContent'>
        <div className='rightbar__image'>
          <img src={Icon} alt='' />
        </div>
        <div className='rightbar__text'>
          <h2>{text}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default RightBarOptions;
