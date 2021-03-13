import React from 'react';
import PropTypes from 'prop-types';

const CardCountry = ({ nameCountry, capitalCountry, changeLink }) => (
  <article className="card-country" onClick={ () => changeLink('detail')}>
    <p>{nameCountry}</p>
    <p>{capitalCountry}</p>
  </article>
);

CardCountry.propTypes = {
  nameCountry: PropTypes.string.isRequired,
  capitalCountry: PropTypes.string.isRequired,
  changeLink: PropTypes.func.isRequired,
};

export default CardCountry;
