import React from "react";

const States = () => {
  return (
    <>
      <form className="form-select">
        <select name="" id="state">
          <option value="">State</option>
          <option value="">Abuja</option>
          <option value="">Lagos</option>
          <option value="">Oyo</option>
          <option value="">Enugu</option>
        </select>
        <select name="" id="lga">
          <option value="">Local Government</option>
          <option value="">Abuja</option>
          <option value="">Lagos</option>
          <option value="">Oyo</option>
          <option value="">Enugu</option>
        </select>
      </form>
    </>
  );
};

export default States;
