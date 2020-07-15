/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const history = useHistory();
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
    history.push('/places');
  };

  return (
    <form className="Nav_search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="search"
        placeholder="Où allez-vous ?"
      />
      <input
        type="date"
        min={new Date().toISOString().split('T')[0]}
        placeholder="Date d'arrivée        "
      />
      <input
        type="date"
        min={new Date().toISOString().split('T')[0]}
        placeholder="Date de départ        "
      />
      <input type="number" placeholder="Ajoutez des voyageurs" min="0" max="10" />
      <input onClick={callSearchFunction} type="submit" value="Rechercher" />
    </form>
  );
};

export default Search;
