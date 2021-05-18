import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Search from './Search';
import LanguageToggle from './LanguageToggle';

class Header extends Component {
  render() {
    const { logoLink, searchVisible, lang, changeFilter, toggleLang } = this.props;
    return (
      <header>
        <Logo logoLink={logoLink} />
        {searchVisible ? <Search lang={lang} changeFilter={changeFilter} /> : null}
        <LanguageToggle toggleLang={toggleLang} lang={lang} />
      </header>
    );
  }
}

Header.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  logoLink: PropTypes.bool.isRequired,
  lang: PropTypes.number.isRequired,
  toggleLang: PropTypes.func.isRequired
};

export default Header;
