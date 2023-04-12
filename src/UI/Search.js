import React from 'react';
import './Search.css'

const Search = (props) => {
  return (
    <input onChange={props.searchHandler} type="text" placeholder='Search for animal..'/>
  );
};

export default Search;