import React from 'react';
import './Animals.css'
import Card from './Card';
import Search from './Search';

const Animals = (props) => {

  const searchFilter = props.data.filter(item => {
    return item.name.includes(props.searchInput)
  })

  return (
    <div>
      <h2>Animals: {props.data.length}</h2>
      <Search searchHandler={props.searchHandler}/>
      <div className="animals_container">
        {searchFilter.map((item) => <Card 
        key={item.name} 
        name={item.name} 
        likes={item.likes} 
        removeCard={() => props.removeHandler(item.name)} // binding the data to send it up to the parent
        addLikes={() => props.likesHandler(item.name, 'add')} 
        removeLikes={() => props.likesHandler(item.name, 'remove')}/>)}
      </div>
    </div>
  );

};

export default Animals;