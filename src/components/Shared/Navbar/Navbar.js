import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  import logo from '../../../images/fisker-logo.png'

const Navbar = () => {
    return (
        <>
      <Nav>
        <NavLink to='/'>
          <img style={{width: '100px'}} className='img-fluid' src={logo} alt=""/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          {/* <NavLink to='/services' activeStyle>
            Services
          </NavLink> */}
          <NavLink to='/dashboard' activeStyle>
          Dashboard
          </NavLink>
          <NavLink to='/admin' activeStyle>
            Admin
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
    );
};

export default Navbar;