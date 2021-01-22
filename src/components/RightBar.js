import React from 'react'

import RightBarOptions from './RightBarOptions'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbar__top'>
        <RightBarOptions
          Icon='https://ng.jumia.is/cms/Homepage/2020/W38/help-centerv4.png'
          text='Help Center'
          desc='Guide to Customer Care'
        />
        <RightBarOptions
          Icon='https://ng.jumia.is/cms/Homepage/2020/W38/returns-refunds.png'
          text='Easy return'
          desc='Quick Refund'
        />
        <RightBarOptions
          Icon='https://ng.jumia.is/cms/Homepage/2020/W38/sell-on-jumia.png'
          text='Sell on Jumia'
          desc='Millions of Visitors'
        />
      </div>
      <div className='rightbar__bottom'>
        <img
          src='https://ng.jumia.is//cms/0-1-weekly-cps/2021/w3/bsb_new.gif'
          alt=''
        />
      </div>
    </div>
  )
}

export default RightBar
