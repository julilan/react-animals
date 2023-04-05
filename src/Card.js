import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={`${props.name}`} />
      <h3>{props.name}</h3>
      <div className='likes_container'>
        <button value={props.name} name='addlike' onClick={props.addLikes}>+</button>
        {props.likes >= 0 ? <p>❤️ {props.likes}</p> : <p>💔 {props.likes}</p>}
        <button value={props.name} name='removelike' onClick={props.removeLikes}>-</button>
      </div>
      <button value={props.name} className='close' onClick={props.removeCard}>x</button>
    </div>
  );
};

export default Card;