/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="Nav_search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="search"
        placeholder="Où allez-vous ?"
      />
      <input onClick={callSearchFunction} type="submit" value="Rechercher" />
    </form>
  );
};

export default Search;
