import React, { Component } from 'react';
import Logo from '../../assets/img/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="pokedex__header">
        <img alt="" src={Logo} className="pokedex__header-logo" />
      </header>
    );
  }
}

export default Header;