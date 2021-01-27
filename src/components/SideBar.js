import React from "react";
import "../css/SideBar.css";
import SideBarOptions from "./SideBarOptions";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import NaturePeopleOutlinedIcon from "@material-ui/icons/NaturePeopleOutlined";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import ComputerIcon from "@material-ui/icons/Computer";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import ReportOffIcon from "@material-ui/icons/ReportOff";
import BathtubIcon from "@material-ui/icons/Bathtub";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <SideBarOptions Icon={FingerprintOutlinedIcon} title='Supermarket' />
        <SideBarOptions
          Icon={NaturePeopleOutlinedIcon}
          title='Health &amp; Beauty'
        />
        <SideBarOptions
          Icon={AirlineSeatReclineNormalIcon}
          title='Home &amp; Office'
        />
        <SideBarOptions Icon={PhoneIphoneIcon} title='Phones &amp; Tablets' />
        <SideBarOptions Icon={ComputerIcon} title='Computing' />
        <SideBarOptions Icon={PermDeviceInformationIcon} title='Electronics' />
        <SideBarOptions Icon={BathtubIcon} title='Fashion' />
        <SideBarOptions Icon={ChildCareIcon} title='Baby Products' />
        <SideBarOptions Icon={SportsEsportsIcon} title='Gaming' />
        <SideBarOptions Icon={SportsSoccerIcon} title='Sporting Goods' />
        <SideBarOptions Icon={ReportOffIcon} title='Automobile' />
        <SideBarOptions Icon={MoreHorizIcon} title='Other Categories' />
      </div>
    </div>
  );
};

export default SideBar;
