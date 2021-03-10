import React, { Component } from "react";
import Logo from './Logo';
import Search from './Search';
import LanguageToggle from './LanguageToggle';

class Header extends Component {
  render() {
    return <header>
      <Logo/>
      <Search/>
      <LanguageToggle/>
    </header>;
  }
}

export default Header;