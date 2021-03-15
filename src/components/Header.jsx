import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import LanguageToggle from './LanguageToggle';
import PropTypes from 'prop-types';

class Header extends Component {
render() {
  return(
  <header>
    <Logo logoLink={this.props.logoLink} changeLink={this.props.changeLink}/>
    {this.props.searchVisible ? <Search lang={this.props.lang} changeFilter={this.props.changeFilter}/> : null}
    <LanguageToggle toggleLang={this.props.toggleLang}/>
  </header>
  )}
};

Header.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  logoLink: PropTypes.bool.isRequired,
  // changeLink: PropTypes.func.isRequired,
};

export default Header;
