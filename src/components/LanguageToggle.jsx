import React, { Component } from 'react';

class LanguageToggle extends Component {

  toggleLanguage = (e) => {
    this.props.toggleLang(+e.target.value)
  }

  render() {
    // console.log(342)
    return(
    <div>
      <select onChange={this.toggleLanguage}>
        <option value="0">EN</option>
        <option value="1">RU</option>
        <option value="2">BL</option>
      </select>
    </div>
    )}
};

export default LanguageToggle;
