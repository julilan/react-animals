import React from 'react';
import Search from '../UI/Search';
import Card from '../UI/Card';
import './Animals.css';

const Birds = (props) => {

  const searchFilter = props.data.filter(item => {
    return item.name.toLowerCase().includes(props.searchInput)
  })

  return (
    <div className='wrapper'>
      <h2>Birds remaining: {props.data.length}</h2>
      <Search searchHandler={props.searchHandler}/>
      <div className="animals_container">
        {searchFilter.map((item) => <Card 
        key={item.name} 
        name={item.name} 
        likes={item.likes} 
        removeCard={() => props.removeHandler(item.name, 'birds')} // binding the data to send it up to the parent
        addLikes={() => props.likesHandler(item.name, 'add', 'birds')} 
        removeLikes={() => props.likesHandler(item.name, 'remove', 'birds')}/>)}
      </div>
    </div>
  );
};

export default Birds;