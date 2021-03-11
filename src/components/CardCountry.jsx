import React from 'react';
import PropTypes from 'prop-types';

const CardCountry = ({ nameCountry, capitalCountry }) => (
  <article className="card-country">
    <p>{nameCountry}</p>
    <p>{capitalCountry}</p>
  </article>
);

CardCountry.propTypes = {
  nameCountry: PropTypes.string.isRequired,
  capitalCountry: PropTypes.string.isRequired,
};

export default CardCountry;
