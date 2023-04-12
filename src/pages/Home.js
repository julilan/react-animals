import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div className='landing_page'>
    <figure>
      <Link to="/animals">
      <figcaption>Animals</figcaption>
      <img src="https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="hedgehog" />
      </Link>
    </figure>
    <figure>
      <Link to="/birds">
      <figcaption>Birds</figcaption>
      <img src="https://images.unsplash.com/photo-1605296448627-acb9a215ffb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="owl" />
      </Link>
    </figure>
  </div>
  );
};

export default Home;