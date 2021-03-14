import React from 'react';
import Logo from 'components/Logo';
import Search from 'components/Search';
import LanguageToggle from 'components/LanguageToggle';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header>
    <Logo logoLink={props.logoLink} changeLink={props.changeLink}/>
    {props.searchVisible ? <Search changeFilter={props.changeFilter}/> : null}
    <LanguageToggle />
  </header>
);

Header.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  logoLink: PropTypes.bool.isRequired,
  changeLink: PropTypes.func.isRequired,
};

export default Header;
