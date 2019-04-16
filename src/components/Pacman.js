import React from 'react';
import './grids.css';
import die5 from '../assets/dice_5.svg';
import PacmanGame from 'pacman-react';
import pacmansvg from '../assets/pacman.svg';


function Pacman (props) {

  if (!props.playing) {
    return (
      <div className="navLink">
        <img src={pacmansvg} alt='pacman' className="navDice" onClick={props.onClick} />
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
