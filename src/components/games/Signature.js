import React from 'react';
import './../grids.css';
import eggsvg from '../../assets/egg.svg'


function Signature (props) {

  if (!props.playing) {
    return (
      <div>
        <img src={eggsvg} className="easteregg" onClick={props.onClick} />
      </div>
    )
  }
  else {
    return (
      <div onClick={props.onClick}>
        <p>LL Made by Lauren, Phil, James, and Damina</p>
      </div>
    )
  }

}

export default Signature;
