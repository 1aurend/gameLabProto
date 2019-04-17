import React from 'react';
import './components.css';
import './grids.css';
import { about, examples, theMechanics, theSeminar, toolsDemo } from '../pitchText.js'

function Pitch(props) {

  const navNum = props.text;
  console.log(JSON.stringify(props));

  const numToFullText = {
    '0': about,
    '1': theMechanics,
    '2': theSeminar,
    '3': toolsDemo,
    '4': examples,
  }
  var fullText = numToFullText[navNum]

  return <div>{fullText}</div>;

}

export default Pitch;
