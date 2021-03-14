import React from 'react';
import logo from 'assets/image/logo.png';
import PropTypes from 'prop-types';

const Logo = (props) => {
  const styles = {
    cursor: props.logoLink ? 'pointer' : 'default',
  };

  return <div className="logo" onClick={() => (props.logoLink ? props.changeLink('main') : null)} style={styles}>
    <img src={logo} alt="" />
  </div>;
};

Logo.propTypes = {
  logoLink: PropTypes.bool.isRequired,
  changeLink: PropTypes.func.isRequired,
};

export default Logo;
