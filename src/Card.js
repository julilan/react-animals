import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={`${props.name}`} />
      <h3>{props.name}</h3>
      <div className='likes_container'>
        <button onClick={props.removeLikes}><span class="material-symbols-outlined">thumb_down</span></button>
        {props.likes >= 0 ? <p>❤️ {props.likes}</p> : <p>💔 {props.likes}</p>}
        <button onClick={props.addLikes}><span class="material-symbols-outlined">thumb_up</span></button>
      </div>
      <button className='close' onClick={props.removeCard}>x</button>
    </div>
  );
};

export default Card;