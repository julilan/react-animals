import React from 'react';
import Search from '../UI/Search';
import Card from '../UI/Card';
import './List.css';

const List = (props) => {
  const searchFilter = props.data.filter(item => {
    return item.name.toLowerCase().includes(props.searchInput)
  })

  return (
    <div className='wrapper'>
      <h2>{props.title} remaining: {props.data.length}</h2>
      <Search searchHandler={props.searchHandler}/>
      <div className="list_container">
        {searchFilter.map((item) => <Card 
        key={item.name} 
        name={item.name} 
        likes={item.likes} 
        removeCard={() => props.removeHandler(item.name, props.title)} // binding the data to send it up to the parent
        addLikes={() => props.likesHandler(item.name, 'add', props.title)} 
        removeLikes={() => props.likesHandler(item.name, 'remove', props.title)}/>)}
      </div>
    </div>
  );
};

export default List;