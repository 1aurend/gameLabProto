import React from 'react';
import { Link } from 'react-router-dom';
import './grids.css'
import die1 from '../assets/dice_1.svg';
import die2 from '../assets/dice_2.svg';
import die3 from '../assets/dice_3.svg';
import die4 from '../assets/dice_4.svg';



function Nav() {
  return (
    <div>
        <div className="navLink">
          <img src={die1} alt='dice1' className="navDice"/>
          <Link className="navText" to='/mechanics' style={{color:"#dd3d27"}}>the mechanics</Link>
        </div>
        <div className="navLink">
          <img src={die2} alt='dice2' className="navDice" />
          <Link className="navText" to='/playtest' style={{color:"#e2af3b"}}>playtest assignment</Link>
        </div>
        <div className="navLink">
          <img src={die3} alt='dice3' className="navDice"/>
          <Link className="navText" to='/seminar' style={{color:"#7fc8a0"}}>the seminar</Link>
        </div>
        <div className="navLink">
          <img src={die4} alt='dice4' className="navDice"/>
          <Link className="navText" to='/examples' style={{color:"#a24f9d"}}>examples</Link>
        </div>
      </div>
  );
}


export default Nav;
