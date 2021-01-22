import React from 'react'
import '../css/Banner.css'

const Banner = ({ image }) => {
  return (
    <div className='topselling banner'>
      <div className='banner__img'>
        <img src={image} alt='' />
      </div>
    </div>
  )
}

export default Banner
