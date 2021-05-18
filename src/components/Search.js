import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../assets/image/search.svg';

const Search = (props) => {
  const [value, changeValue] = useState('');
  const inputSearch = React.createRef();
  const { changeFilter, lang } = props;

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  const checkInputKey = (e) => {
    if (e.code === 'Enter') {
      changeFilter(e.target.value);
    }
  };

  const placeHolder = lang === 0 ? 'Search' : lang === 1 ? 'Поиск' : 'Пошук';

  return (
    <div className="search">
      <input
        type="search"
        placeholder={placeHolder}
        defaultValue={value}
        onChange={(e) => {
          changeValue(e.target.value);
          props.changeFilter(e.target.value);
        }}
        ref={inputSearch}
        onKeyPress={(e) => checkInputKey(e)}
      />
      <button type="button" className="search-btn" onClick={() => props.changeFilter(value)}>
        <img className="icon-search" src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

Search.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  lang: PropTypes.number.isRequired
};

export default Search;
