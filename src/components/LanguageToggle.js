import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
class LanguageToggle extends Component {
  toggleLanguage = (e) => {
    const { toggleLang } = this.props;

    toggleLang(+e.target.value);
  };

  render() {
    const { lang } = this.props;

    return (
      <div>
        <select onChange={this.toggleLanguage} value={lang}>
          <option value="0">EN</option>
          <option value="1">RU</option>
          <option value="2">BY</option>
        </select>
      </div>
    );
  }
}

LanguageToggle.propTypes = {
  toggleLang: PropTypes.func.isRequired,
  lang: PropTypes.number.isRequired
};

export default LanguageToggle;
