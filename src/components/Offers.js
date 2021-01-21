import React from 'react'
import '../css/Offers.css'

const Offers = ({ Icon, text }) => {
  return (
    <>
      <div className='offers'>
        <div className='offer__options'>
          <img src={Icon} alt='' />
          <h2>{text}</h2>
        </div>
      </div>
    </>
  )
}

export default Offers
