import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Logo from './Logo';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Img from './Img';
import slLogo from './sl__logo.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <Logo to="/">
            <Img src={slLogo} alt="Simeon Lee - logo" />
          </Logo>
          <div>
            <HeaderLink to="/">
              Home
            </HeaderLink>
            <HeaderLink to="/portfolio">
              Portfolio
            </HeaderLink>
            <HeaderLink to="/about">
              About
            </HeaderLink>
            <HeaderLink to="/resume">
              Resume
            </HeaderLink>
            <HeaderLink to="/blog">
              Blog
            </HeaderLink>
            <HeaderLink to="/contact">
              Contact
            </HeaderLink>
          </div>
        </NavBar>
      </div>
    );
  }
}

export default Header;
