import React from 'react';
import PropTypes from 'prop-types';

const CardCountry = ({ nameCountry, capitalCountry, imgCountry }) => (
  <article className="card-country">
    <img src={imgCountry} width="250"></img>
    <p>{nameCountry}</p>
    <p>{capitalCountry}</p>
  </article>
);

CardCountry.propTypes = {
  nameCountry: PropTypes.string.isRequired,
  capitalCountry: PropTypes.string.isRequired,
};

export default CardCountry;
