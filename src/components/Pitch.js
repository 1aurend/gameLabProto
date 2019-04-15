import React from 'react';
import './components.css';
import './grids.css';
import pitchText from '../pitchText.js'

function Pitch() {
  return (
    <div>
        <h5>{pitchText.subtitle}</h5>
        <p>{pitchText.pitch}</p>
        <p>{pitchText.close}</p>
    </div>
  )
}

export default Pitch;
