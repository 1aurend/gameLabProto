import React from 'react';
import{ Link } from 'react-router-dom';

const Playtest = () => (
  <div>
    <h2>Playtest Your Assignment</h2>
    <p>Questions from Game Design for Crafting Classroom Experiences</p>
    <h3>Coming soon!</h3>
    <button className="button">
      <Link className="buttonLink" to='/'>Home</Link>
    </button>
  </div>
);

export default Playtest;
