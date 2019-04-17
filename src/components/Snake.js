import React from 'react';
import './grids.css';
import die5 from '../assets/dice_5.svg';
import SnakeGame from 'nilssongames-snake';
import pacmansvg from '../assets/pacman.svg';
import pacmaninvsvg from '../assets/pacman_invert.svg';


function Snake (props) {

  var icon = pacmansvg;

  if (props.color === '#e2af3b') {
    icon = pacmaninvsvg;
  }

  if (!props.playing) {
    return (
      <div className="navLink">
        <img src={icon} alt='pacman' className="navDice" onClick={props.onClick} />
      </div>
    )
  }
  else {
    return (
      <div onClick={props.onClick}>
        <SnakeGame />
      </div>
    )
  }

}

export default Snake;
