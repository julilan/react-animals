import React from 'react';
import Card from './Card';
import Search from './Search';
import './Animals.css'

const Animals = (props) => {

  const searchFilter = props.data.filter(item => {
    return item.name.toLowerCase().includes(props.searchInput)
  })

  return (
    <div className='wrapper'>
      <h2>Animals remaining: {props.data.length}</h2>
      <Search searchHandler={props.searchHandler}/>
      <div className="animals_container">
        {searchFilter.map((item) => <Card 
        key={item.name} 
        name={item.name} 
        likes={item.likes} 
        removeCard={() => props.removeHandler(item.name, 'animals')} // binding the data to send it up to the parent
        addLikes={() => props.likesHandler(item.name, 'add', 'animals')} 
        removeLikes={() => props.likesHandler(item.name, 'remove', 'animals')}/>)}
      </div>
    </div>
  );

};

export default Animals;