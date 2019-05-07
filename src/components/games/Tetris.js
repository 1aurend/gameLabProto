import React from 'react';
import './../grids.css';
import die5 from '../../assets/dice_5.svg';
import TetrisGame from 'nilssongames-tetris';
import eggsvg from '../../assets/egg.svg'


function Tetris (props) {

  if (!props.playing) {
    return (
      <div>
        <img src={eggsvg} alt='tetris' className="easteregg" onClick={props.onClick} />
      </div>
    )
  }
  else {
    return (
      <div onClick={props.onClick}>
        <TetrisGame />
      </div>
    )
  }

}

export default Tetris;
