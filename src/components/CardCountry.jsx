import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardCountry = ({
  id, nameCountry, capitalCountry, imgSrc,
}) => (

  <Link to={`/country/${id}`} className="card-country" style={{ backgroundImage: `url(${imgSrc})` }}>
    <div className="card-country__content">
      <p>{nameCountry}</p>
      <p>{capitalCountry}</p>
    </div>
  </Link>

);

CardCountry.propTypes = {
  nameCountry: PropTypes.string.isRequired,
  capitalCountry: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default CardCountry;
