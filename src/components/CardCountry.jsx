import React from 'react';
import PropTypes from 'prop-types';

import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

const CardCountry = ({ id, nameCountry, capitalCountry, imgSrc }) => (

  <Link to={`/country/${id}`}  className="card-country">
    {/* <article className="card-country" onClick={ () => changeLink('detail')}> */}
    {/* <article className="card-country"> */}
      <img src={imgSrc} width="250" alt={id}></img>
      <p>{nameCountry}</p>
      <p>{capitalCountry}</p>
    {/* </article> */}
  </Link>

);

CardCountry.propTypes = {
  nameCountry: PropTypes.string.isRequired,
  capitalCountry: PropTypes.string.isRequired,
  // changeLink: PropTypes.func.isRequired,
};

export default CardCountry;
