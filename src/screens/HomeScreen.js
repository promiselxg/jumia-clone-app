import React from "react";
import SideBar from "../components/SideBar";
import Slider from "../components/Slider";
import RightBar from "../components/RightBar";
import AppOffers from "../components/AppOffers";
import Topselling from "../categories/TopSelling";
import DealsOfTheDay from "../categories/TodayDeals";
import Perfumes from "../categories/Perfumes";
import Collections from "../components/Collections";
import Banner from "../components/Banner.js";

const HomeScreen = () => {
  return (
    <>
      <div className='app__body'>
        <SideBar />
        <div className='app__slide'>
          <Slider />
        </div>
        <div className='app__right'>
          <RightBar />
        </div>
      </div>
      <div className='app__offer'>
        <AppOffers />
      </div>

      <div className='app__products'>
        <Topselling />
      </div>
      <div className='app__products'>
        <DealsOfTheDay
          text='Deals of the Day | From ₦1,000'
          color='red'
          type='today_deals'
        />
      </div>
      <div className='app__products'>
        <Banner />
      </div>
      <div className='app__products'>
        <Perfumes
          text='A Trail of Sweet Scents | Up to 60% Off'
          color='blue'
          type='perfume'
        />
      </div>

      <div className='app__products'>
        <Collections text='Shop Our Style Mode Collections!' />
      </div>
    </>
  );
};

export default HomeScreen;
