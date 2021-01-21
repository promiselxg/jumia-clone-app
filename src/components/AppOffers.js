import React from 'react'
import Offers from './Offers'
import iconRed from '../images/Icon-red.png'
import airtime from '../images/airtime.png'
import JumiaFood from '../images/jumia-food-new.png'
import JumiaGlobal from '../images/JumiaGlobal.png'

const AppOffers = () => {
    return (
        <>
        <Offers Icon={iconRed} text='Official Stores' />
        <Offers Icon={JumiaGlobal} text='Jumia Global' />
        <Offers Icon={JumiaFood}  text='Jumia Food' />
        <Offers Icon={airtime} text='Airtime &amp; Bills' />
        </>
    )
}

export default AppOffers
