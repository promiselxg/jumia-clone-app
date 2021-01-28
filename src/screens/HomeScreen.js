import React from "react";
import { Container } from "@material-ui/core";
import Offers from "../components/Offers";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import AdBanner from "../components/AdBanner";

const HomeScreen = () => {
  return (
    <>
      <Container className='app__container'>
        <SideBar />
        <Slider />
        <RightBar />
      </Container>
      <Container className='app__container'>
        <Offers />
      </Container>
      <Container className='app__container'>
        <Products />
      </Container>
      <Container className='app__container'>
        <Products
          text='Deals of the Day | From ₦1,000'
          color='red'
          category='todayDeals'
        />
      </Container>
      <Container className='app__container'>
        <AdBanner Image1='https://ng.jumia.is/cms/0-4-jumia-global/designs/jan-28/cb-homepage.jpg' />
      </Container>
      <Container className='app__container'>
        <Products
          text='Deals of the Day | From ₦1,000'
          color='red'
          category='todayDeals'
        />
      </Container>
    </>
  );
};

export default HomeScreen;
