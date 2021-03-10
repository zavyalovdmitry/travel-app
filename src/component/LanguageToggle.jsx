import React, { Component } from "react";

class LanguageToggle extends Component {
  render() {
    return  <div>
    <select>
      <option value="ru">RU</option>
      <option value="en">EN</option>
      <option value="bl">BL</option>
    </select>
  </div>
  }
}

export default LanguageToggle;