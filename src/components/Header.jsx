import React from 'react';
import Logo from 'components/Logo';
import Search from 'components/Search';
import LanguageToggle from 'components/LanguageToggle';

const Header = () => (
  <header>
    <Logo />
    <Search />
    <LanguageToggle />
  </header>
);

export default Header;
