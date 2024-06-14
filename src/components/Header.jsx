import React from 'react';
import { Navbar, NavItem, Icon, Image } from 'react-materialize';
import 'materialize-css';

const Header = () => {
  return (
    <div>
    <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="/">
    <img src={`${process.env.PUBLIC_URL}/logo.png`} style={{ maxWidth: '65px', maxHeight: '65px' }}/>
    </a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="login">
    Войти
  </NavItem>
</Navbar>
</div>
  );
};

export default Header;