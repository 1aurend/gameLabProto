import React from 'react';
import Title from './Header.js';
import NavSwitch from './NavSwitch.js';
import Pitch from './Pitch.js';
import './grids.css';
import Nav from './Nav.js'

function Home() {
  return (
    <div className='ninegrid'>
      <div id='title'>
        <Title />
      </div>
      <div id='pitch'>
        <Pitch />
      </div>
      <div id='navside'>
        <Nav />
      </div>
    </div>
  )
}

export default Home;
