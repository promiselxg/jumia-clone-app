import React from 'react'
import '../css/SideBar.css'
import SideBarOption from '../components/SideBarOption'
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined'
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined'
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import ComputerIcon from '@material-ui/icons/Computer'
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import ReportOffIcon from '@material-ui/icons/ReportOff'
import BathtubIcon from '@material-ui/icons/Bathtub'
import ChildCareIcon from '@material-ui/icons/ChildCare'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <SideBarOption Icon={FingerprintOutlinedIcon} title='Supermarket' />
      <SideBarOption
        Icon={NaturePeopleOutlinedIcon}
        title='Health &amp; Beauty'
      />
      <SideBarOption
        Icon={AirlineSeatReclineNormalIcon}
        title='Home &amp; Office'
      />
      <SideBarOption Icon={PhoneIphoneIcon} title='Phones &amp; Tablets' />
      <SideBarOption Icon={ComputerIcon} title='Computing' />
      <SideBarOption Icon={PermDeviceInformationIcon} title='Electronics' />
      <SideBarOption Icon={BathtubIcon} title='Fashion' />
      <SideBarOption Icon={ChildCareIcon} title='Baby Products' />
      <SideBarOption Icon={SportsEsportsIcon} title='Gaming' />
      <SideBarOption Icon={SportsSoccerIcon} title='Sporting Goods' />
      <SideBarOption Icon={ReportOffIcon} title='Automobile' />
      <SideBarOption Icon={MoreHorizIcon} title='Other Categories' />
    </div>
  )
}

export default SideBar
