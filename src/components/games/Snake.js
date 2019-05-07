import React from 'react';
import './../grids.css';
import die5 from '../../assets/dice_5.svg';
import SnakeGame from 'nilssongames-snake';
import eggsvg from '../../assets/egg.svg'


function Snake (props) {

  if (!props.playing) {
    return (
      <div>
        <img src={eggsvg} alt='snake' className="easteregg" onClick={props.onClick} />
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
