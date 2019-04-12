import React from 'react';
import Title from './Header.js';
import NavSwitch from './NavSwitch.js';
import Pitch from './Pitch.js';
import './grids.css';

function App() {
  return (
    <div className='ninegrid'>
      <div id='title'>
        <Title />
      </div>
      <div id='pitch'>
        <Pitch />
      </div>
      <div id='navside'>
        <NavSwitch />
      </div>
    </div>
  )
}

export default App;
