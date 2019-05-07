import React from 'react';
import './../grids.css';
import die5 from '../../assets/dice_5.svg';
import PacmanGame from 'pacman-react';
import eggsvg from '../../assets/egg.svg';


function Pacman (props) {

  if (!props.playing) {
    return (
      <div>
        <img src={eggsvg} alt='pacman' className="easteregg" onClick={props.onClick} />
      </div>
    )
  }
  else {
    return (
      <div onClick={props.onClick}>
        <PacmanGame />
      </div>
    )
  }

}

export default Pacman;
