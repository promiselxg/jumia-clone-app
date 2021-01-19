import React from 'react'
import HelpCenter from '../images/help-centerv4.png'
import SellOnJumia from '../images/sell-on-jumia.png'
import ReturnRefunds from '../images/returns-refunds.png'
import RightBarAnimation from '../images/bsb_new.gif'
import RightBarOptions from './RightBarOptions'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbar__top'>
        <RightBarOptions
          Icon={HelpCenter}
          text='Help Center'
          desc='Guide to Customer Care'
        />
        <RightBarOptions
          Icon={ReturnRefunds}
          text='Easy return'
          desc='Quick Refund'
        />
        <RightBarOptions
          Icon={SellOnJumia}
          text='Sell on Jumia'
          desc='Millions of Visitors'
        />
      </div>
      <div className='rightbar__bottom'>
        <img src={RightBarAnimation} alt='' />
      </div>
    </div>
  )
}

export default RightBar
