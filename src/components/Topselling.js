import React from 'react'
import '../css/Topselling.css'
import Products from './products/Products'
import pr1 from '../product_images/1.jpg'
import pr2 from '../product_images/2.jpg'
import pr3 from '../product_images/3.jpg'
import pr4 from '../product_images/4.jpg'
import pr5 from '../product_images/5.jpg'
import pr6 from '../product_images/6.jpg'

const Topselling = () => {
  return (
    <>
      <div className='topselling'>
        <div className='topselling__title'>
          <h1>Top Selling items</h1>
        </div>
        <div className='topselling__body'>
          <Products
            image={pr1}
            name='umidigi A75 infrared telephone'
            price='63690'
            newPrice='37900'
          />
          <Products
            image={pr2}
            name='cubot not 7.5.5 inches phone'
            price='41000'
            newPrice='33000'
          />
          <Products
            image={pr3}
            name='Mens flexible casual sportwear'
            price='5000'
            newPrice='3500'
          />
          <Products
            image={pr4}
            name='color screen smart bracelet'
            price='3590'
            newPrice='2150'
          />
          <Products
            image={pr5}
            name='fingerprint touch bluetooth earpice'
            price=''
            newPrice='2000'
          />
          <Products
            image={pr6}
            name='f9-30 wireless headphone'
            price='3210'
            newPrice='2900'
          />
        </div>
      </div>
    </>
  )
}

export default Topselling
