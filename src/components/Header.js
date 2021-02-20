import React from "react";
import "../css/Header.css";
import { Container, Button, Badge, IconButton } from "@material-ui/core";
import {
  Search,
  PermIdentity,
  HelpOutline,
  ShoppingCartOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='header'>
        <Container>
          <div className='header__container'>
            <div className='header__left'>
              <Link to='/'>
                <img
                  src='https://www.cgiainstitute.org/wp-content/uploads/2019/04/Jumia-logo.jpg'
                  alt='humia logo'
                />
              </Link>
            </div>
            <div className='header__center'>
              <div className='header__search'>
                <Search />
                <input
                  type='text'
                  placeholder='Search products, brands and categories'
                />
              </div>
              <Button
                variant='contained'
                style={{
                  backgroundColor: "#f6881E",
                  color: "#FFF",
                  fontWeight: "600",
                  marginRight: "10px",
                }}
              >
                Search
              </Button>
            </div>
            <div className='header__right'>
              <div className='header__rightIcons'>
                <PermIdentity />
                <h2>Login</h2>
                <ExpandMoreOutlined />
              </div>
              <div className='header__rightIcons'>
                {" "}
                <HelpOutline />
                <h2>Help</h2>
                <ExpandMoreOutlined />
              </div>

              <div className='header__rightIcons'>
                {" "}
                <IconButton aria-label='Show cart Items'>
                  <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
                <h2>Cart</h2>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
