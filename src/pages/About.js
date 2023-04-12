import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <h2>About this app</h2>
      <ul className='about_list'>
        <li>Animals app done with React and navigation added with React Router</li>
        <li>Animal and bird cards have image, animal name, likes count, add/remove likes buttons and remove card button</li>
        <li>Animals and birds pages have search feature</li>
      </ul>
    </div>
  )
}

export default About;