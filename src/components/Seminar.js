import React from 'react';
import{ Link } from 'react-router-dom';
import './components.css'

const Seminar = () => (
  <div>
    <h2>Sample Assignments Incorporating Game Mechanics</h2>
    <p className="test">This will be organized somehow...</p>
    <h3>Coming soon!</h3>
    <button className="button">
      <Link className="buttonLink" to='/'>Home</Link>
    </button>
  </div>
);

export default Seminar;
