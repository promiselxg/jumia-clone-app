import React from 'react'
import '../css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import Button from '@material-ui/core/Button'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__leftLogoBox'>
          <img
            src='https://www.cgiainstitute.org/wp-content/uploads/2019/04/Jumia-logo.jpg'
            alt='humia logo'
          />
        </div>
      </div>
      <div className='header__center'>
        <div className='header__centerSearch'>
          <SearchIcon className='header__centerIcon' />
          <input
            type='text'
            placeholder='Search products, brands and categories'
          />
        </div>
        <Button
          variant='contained'
          style={{
            backgroundColor: '#f6881E',
            color: '#FFF',
            fontWeight: '600',
          }}
        >
          Search
        </Button>
      </div>
      <div className='header__right'>
        <div className='header__rightLinks'>
          <PermIdentityIcon style={{ alignItem: 'center' }} />
          <h2>Login</h2>
          <ExpandMoreOutlinedIcon />
        </div>
        <div className='header__rightLinks'>
          <HelpOutlineIcon />
          <h2>Help</h2>
          <ExpandMoreOutlinedIcon />
        </div>
        <div className='header__rightLinks'>
          <ShoppingCartOutlinedIcon />
          <h2>Cart</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
