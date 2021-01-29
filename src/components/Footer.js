import React from "react";
import "../css/Footer.css";
import { Container } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import AppleIcon from "@material-ui/icons/Apple";
import ShopIcon from "@material-ui/icons/Shop";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InstagramIcon from "@material-ui/icons/Instagram";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import MoneyIcon from "@material-ui/icons/Money";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__topBg'>
          <Container className='app__container'>
            <div className='footer__topLogo'>
              <img src='https://devmatt.co.za/images/work_jumia.png' alt='' />
            </div>
            <div className='footer__topCenter'>
              <div className='footer__topCenterTitle'>
                <h2>New to Jumia?</h2>
                <p>
                  Subscribe to our newsletter to get updates on our latest
                  offers!
                </p>
              </div>
              <div className='footer__topCenterInput'>
                <div>
                  <MailIcon />
                  <input type='email' placeholder='Enter e-mail address' />
                </div>
                <Button variant='outlined' className='footer__centerButton'>
                  Male
                </Button>
                <Button variant='outlined' className='footer__centerButton'>
                  Female
                </Button>
              </div>
            </div>
            <div className='footer__right'>
              <div className='footer__rightTop'>
                <div className='footer__rightTopImage'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApp1_S5GJUoAXX7W5SAxpkzvFbMPPyS1zxg&usqp=CAU'
                    alt=''
                  />
                </div>
                <div className='footer__rightText'>
                  <h2>download jumia free app</h2>
                  <p>Get access to exclusive offers!</p>
                </div>
              </div>
              <div className='footer__rightBottom'>
                <Button
                  variant='outlined'
                  startIcon={<AppleIcon />}
                  className='footer__centerButton'
                >
                  Get on Apple Store
                </Button>
                <Button
                  variant='outlined'
                  startIcon={<ShopIcon />}
                  className='footer__centerButton'
                >
                  Get on Google Play
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className='footer__bottom'>
        <Container className='app__container'>
          <div className='footer__link'>
            <h2>LET US HELP YOU</h2>
            <p>Help Center</p>
            <p>How to shop on Jumia?</p>
            <p>Delivery options and timelines</p>
            <p>How to return a product on Jumia?</p>
            <p>Corporate and bulk purchases</p>
            <p>Report a Product</p>
          </div>
          <div className='footer__link'>
            <h2>ABOUT JUMIA</h2>
            <p>About us</p>
            <p>Jumia careers</p>
            <p>Jumia Express</p>
            <p>Terms and Conditions</p>
            <p>Privacy policy</p>
            <p>Jumia Prime</p>
            <p>Stay Safe</p>
            <p>Jumia Global</p>
          </div>
          <div className='footer__link'>
            <h2>MAKE MONEY WITH JUMIA</h2>
            <p>Sell on Jumia</p>
            <p>Become a Sales Consultant</p>
            <p>Become a Jumia Vendor Service Provider</p>
            <p>Become a Logistics Service Partner</p>
          </div>
          <div className='footer__link'>
            <h2>JUMIA INTERNATIONAL</h2>
            <p>Algeria</p>
            <p>Egypt</p>
            <p>Ghana</p>
            <p>Ivory Coast</p>
            <p>Kenya</p>
            <p>Morocco</p>
          </div>
        </Container>
        <Container className='app__container'>
          <div className='footer__bottomSocial'>
            <div className='footer__bottomJoin'>
              <h2>Join Us on</h2>
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <ShoppingCartIcon />
              <InstagramIcon />
            </div>
            <div className='footer__bottomLogo'>
              <h2>PAYMENT METHODS &amp; DELIVERY PARTNERS</h2>
              <CreditCardIcon />
              <AllInclusiveIcon />
              <EuroSymbolIcon />
              <AppleIcon />
              <MoneyIcon />
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <ShoppingCartIcon />
              <InstagramIcon />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
