import React from 'react'
import TextTruncate from 'react-text-truncate'
import NumberFormat from 'react-number-format'

const Products = ({ image, name, price, newPrice }) => {
  return (
    <>
      <div className='topselling__product'>
        <div className='product__image'>
          <img src={image} alt={name} />
        </div>
        <div className='product__name'>
          <TextTruncate line={1} element='h3' truncate='...' text={name} />
        </div>
        <div className='product__price'>
          <h3>
            <span>&#8358;</span>
            <NumberFormat
              value={newPrice}
              displayType={'text'}
              thousandSeparator={true}
            />
          </h3>
        </div>
        <div className='product__slashPrice'>
          {price && (
            <h3>
              <span>&#8358;</span>
              <NumberFormat
                value={price}
                displayType={'text'}
                thousandSeparator={true}
              />
            </h3>
          )}
        </div>
      </div>
    </>
  )
}

export default Products
