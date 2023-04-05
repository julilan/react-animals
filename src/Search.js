import React from 'react';
import './Search.css'

const Search = (props) => {
  return (
    <input onChange={props.searchHandler} type="text" />
  );
};

export default Search;