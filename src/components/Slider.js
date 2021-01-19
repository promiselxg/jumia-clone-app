import React from 'react'
import '../css/Slider.css'
import ImageSlider from '../images/07F6D6E3-5CE0-439E-A39E-9780B5EF0BF1.jpeg'
const Slider = () => {
  return (
    <div className='slider'>
      <div className='slider__container'>
        <img src={ImageSlider} alt='' />
      </div>
    </div>
  )
}

export default Slider
