import React, { Component } from "react";
import logo from './../assets/image/rss.svg';

class Footer extends Component {
  render() {
    return   <footer>
    <p className="creators"> <span>Created by </span> 
      <a href="https://github.com/antoniosk10">Anton Skorobogaty</a>
      <a href="https://github.com/fpastl">Stas Smoliar</a>
      <a href="https://github.com/zavyalovdmitry">Dmitry Zavyalov</a> </p>
    <a href="https://rs.school/react/" className='logo'><img src={logo} alt="rss"/></a>
   </footer>;
  }
}

export default Footer;