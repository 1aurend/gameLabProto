import React from 'react';
import './components.css';
import './grids.css';
import pitchText from '../pitchText.js'

function Pitch(props) {

  const text = props.text;
  console.log(JSON.stringify(props));
  console.log(text);

  if (text === '0') {
    return (
      <div>
          <h5>{pitchText.subtitle}</h5>
          <p>{pitchText.pitch}</p>
          <p>{pitchText.close}</p>
      </div>
    )
  }
else {
  return (
    <div>
        <h2>{text}</h2>
    </div>
  )
}

}

export default Pitch;
