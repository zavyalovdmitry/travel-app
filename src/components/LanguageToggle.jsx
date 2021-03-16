import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LanguageToggle extends Component {
  toggleLanguage = (e) => {
    this.props.toggleLang(+e.target.value);
  }

  render() {
    return (
    <div>
      <select onChange={this.toggleLanguage}>
        <option value="0">EN</option>
        <option value="1">RU</option>
        <option value="2">BL</option>
      </select>
    </div>
    );
  }
}

LanguageToggle.propTypes = {
  toggleLang: PropTypes.func.isRequired,
};

export default LanguageToggle;
