import React from "react";
import ProductCollections from "../components/products/ProductCollections";
const Collections = ({ text }) => {
  return (
    <>
      <div className='topselling collections'>
        <div className='productCollection'>
          <div className='productCollection__title'>
            <h1>{text}</h1>
          </div>
          <div className='productCollection__items'>
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/men-shirts_260x144.jpg'
              title='Shirt Mode'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/women-skirts_260x144.jpg'
              title='women in skirts'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/mens-shoes_260x144.jpg'
              title='shoe mode'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/womens-bags.jpg'
              title='bags in style'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/mens-suits_260x144.jpg'
              title='men in suits'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/womens-suit_260x144.jpg'
              title='women in suits'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/engagement-rings_260x144.jpg'
              title='wedding rings'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/jewelry-set_260x144.jpg'
              title='jewery set'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/happy-wrists_260x144.jpg'
              title='happy wrists'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/fragrance-set_260x144.jpg'
              title='sweet scents'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/collections/air-fresheners_260x144.jpg'
              title='air fresheners'
            />
            <ProductCollections
              image='https://ng.jumia.is/cms/0-1-weekly-cps/2021/w3/mens-fashion/accessories_260x144.jpg'
              title='accessory mode'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
