import React from 'react'
import '../css/Topselling.css'
import Products from './products/Products'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const Topselling = ({ text, color }) => {
  return (
    <>
      <div className='topselling'>
        <div className='topselling__title'>
          {text ? (
            <div
              style={{
                backgroundColor: `${color}`,
                width: '100%',
                padding: '10px',
                borderRadius: '5px 5px 0px 0px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
              className='topselling__background'
            >
              <h1>{text}</h1>
              <h1>
                See All <ChevronRightIcon />
              </h1>
            </div>
          ) : (
            <h1>Top Selling items</h1>
          )}
        </div>
        <div className='topselling__body'>
          <Products
            image='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/042456/1.jpg?2575'
            name='umidigi A75 infrared telephone'
            price='63690'
            newPrice='37900'
          />
          <Products
            image='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/781166/1.jpg?7012'
            name='cubot not 7.5.5 inches phone'
            price='41000'
            newPrice='33000'
          />
          <Products
            image='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/762026/1.jpg?7716'
            name='Mens flexible casual sportwear'
            price='5000'
            newPrice='3500'
          />
          <Products
            image='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/973734/1.jpg?4289'
            name='color screen smart bracelet'
            price='3590'
            newPrice='2150'
          />
          <Products
            image='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/388841/1.jpg?8433'
            name='fingerprint touch bluetooth earpice'
            price=''
            newPrice='2000'
          />
          <Products
            image='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/875405/1.jpg?8033'
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
