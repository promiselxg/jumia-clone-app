import React from 'react'
import '../css/Offers.css'
import iconRed from '../images/Icon-red.png'

const Offers = () => {
  return (
    <>
      <div className='offers'>
        <div className='offer__options'>
          <img src={iconRed} alt='' />
          <h2>Official Stores</h2>
        </div>
      </div>
    </>
  )
}

export default Offers
