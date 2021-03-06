import React from 'react';
import { Link } from 'react-router-dom';
import './grids.css'
import die1 from '../assets/dice_1.svg';
import die1inv from '../assets/dice_1_invert.svg'
import die2 from '../assets/dice_2.svg';
import die2inv from '../assets/dice_2_invert.svg'
import die3 from '../assets/dice_3.svg';
import die3inv from '../assets/dice_3_invert.svg'
import die4 from '../assets/dice_4.svg';
import die4inv from '../assets/dice_4_invert.svg'
import die5 from '../assets/dice_5.svg';
import die5inv from '../assets/dice_5_invert.svg'


const colors = {
  gray: '#3b3c3d',
  red: '#dd3d27',
  green: '#7fc8a0',
  purple: '#a3509f',
  white: '#fff',
  gold: '#e2af3b',
  blue: '#30AEA4'

}



function Nav(props) {

  if (props.active === '0') {
    return (
      <div>
          <div className="navLink">
            <img src={die1inv} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} />
            <Link className="navText" to='/' onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} style={{color:"#fcf5eb"}}>about</Link>
          </div>
          <div className="navLink">
            <img src={die2} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} />
            <Link className="navText" to='/mechanics' onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} style={{color:"#dd3d27"}}>the mechanics</Link>
          </div>
          <div className="navLink">
            <img src={die3} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} />
            <Link className="navText" to='/seminar' onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} style={{color:"#e2af3b"}}>the seminar</Link>
          </div>
          <div className="navLink">
            <img src={die4} alt='dice3' className="navDice" onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} />
            <Link className="navText" to='/playtest' onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} style={{color:"#30AEA4"}}>tools demo</Link>
          </div>
          <div className="navLink">
            <img src={die5} alt='dice4' className="navDice" onMouseOver={props.onHover({num:'4', color: '#a3509f'})} />
            <Link className="navText" to='/examples' onMouseOver={props.onHover({num:'4', color: '#a3509f'})} style={{color:"#a24f9d"}}>examples</Link>
          </div>
        </div>
    );
  }
  else if (props.active === '1') {
    return (
      <div>
          <div className="navLink">
            <img src={die1} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} />
            <Link className="navText" to='/' onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} style={{color:"#3b3c3d"}}>about</Link>
          </div>
          <div className="navLink">
            <img src={die2inv} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} />
            <Link className="navText" to='/mechanics' onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} style={{color:"#fcf5eb"}}>the mechanics</Link>
          </div>
          <div className="navLink">
            <img src={die3} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} />
            <Link className="navText" to='/seminar' onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} style={{color:"#e2af3b"}}>the seminar</Link>
          </div>
          <div className="navLink">
            <img src={die4} alt='dice3' className="navDice" onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} />
            <Link className="navText" to='/playtest' onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} style={{color:"#30AEA4"}}>tools demo</Link>
          </div>
          <div className="navLink">
            <img src={die5} alt='dice4' className="navDice" onMouseOver={props.onHover({num:'4', color: '#a3509f'})} />
            <Link className="navText" to='/examples' onMouseOver={props.onHover({num:'4', color: '#a3509f'})} style={{color:"#a24f9d"}}>examples</Link>
          </div>
        </div>
    );
  }
else if (props.active === '2') {
  return (
    <div>
        <div className="navLink">
          <img src={die1} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} />
          <Link className="navText" to='/' onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} style={{color:"#3b3c3d"}}>about</Link>
        </div>
        <div className="navLink">
          <img src={die2} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} />
          <Link className="navText" to='/mechanics' onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} style={{color:"#dd3d27"}}>the mechanics</Link>
        </div>
        <div className="navLink">
          <img src={die3inv} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} />
          <Link className="navText" to='/seminar' onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} style={{color:"#fcf5eb"}}>the seminar</Link>
        </div>
        <div className="navLink">
          <img src={die4} alt='dice3' className="navDice" onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} />
          <Link className="navText" to='/playtest' onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} style={{color:"#30AEA4"}}>tools demo</Link>
        </div>
        <div className="navLink">
          <img src={die5} alt='dice4' className="navDice" onMouseOver={props.onHover({num:'4', color: '#a3509f'})} />
          <Link className="navText" to='/examples' onMouseOver={props.onHover({num:'4', color: '#a3509f'})} style={{color:"#a24f9d"}}>examples</Link>
        </div>
      </div>
  );
}
else if (props.active === '3') {
  return (
    <div>
        <div className="navLink">
          <img src={die1} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} />
          <Link className="navText" to='/' onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} style={{color:"#3b3c3d"}}>about</Link>
        </div>
        <div className="navLink">
          <img src={die2} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} />
          <Link className="navText" to='/mechanics' onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} style={{color:"#dd3d27"}}>the mechanics</Link>
        </div>
        <div className="navLink">
          <img src={die3} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} />
          <Link className="navText" to='/seminar' onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} style={{color:"#e2af3b"}}>the seminar</Link>
        </div>
        <div className="navLink">
          <img src={die4inv} alt='dice3' className="navDice" onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} />
          <Link className="navText" to='/playtest' onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} style={{color:"#fcf5eb"}}>tools demo</Link>
        </div>
        <div className="navLink">
          <img src={die5} alt='dice4' className="navDice" onMouseOver={props.onHover({num:'4', color: '#a3509f'})} />
          <Link className="navText" to='/examples' onMouseOver={props.onHover({num:'4', color: '#a3509f'})} style={{color:"#a24f9d"}}>examples</Link>
        </div>
      </div>
  );

}
else if (props.active === '4') {
  return (
    <div>
        <div className="navLink">
          <img src={die1} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} />
          <Link className="navText" to='/' onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} style={{color:"#3b3c3d"}}>about</Link>
        </div>
        <div className="navLink">
          <img src={die2} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} />
          <Link className="navText" to='/mechanics' onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} style={{color:"#dd3d27"}}>the mechanics</Link>
        </div>
        <div className="navLink">
          <img src={die3} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} />
          <Link className="navText" to='/seminar' onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} style={{color:"#e2af3b"}}>the seminar</Link>
        </div>
        <div className="navLink">
          <img src={die4} alt='dice3' className="navDice" onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} />
          <Link className="navText" to='/playtest' onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} style={{color:"#30AEA4"}}>tools demo</Link>
        </div>
        <div className="navLink">
          <img src={die5inv} alt='dice4' className="navDice" onMouseOver={props.onHover({num:'4', color: '#a3509f'})} />
          <Link className="navText" to='/examples' onMouseOver={props.onHover({num:'4', color: '#a3509f'})} style={{color:"#fcf5eb"}}>examples</Link>
        </div>
      </div>
  );

}
  else {
    return (
      <div>
          <div className="navLink">
            <img src={die1inv} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} />
            <Link className="navText" to='/' onMouseOver={props.onHover({num:'0', color: '#3b3c3d'})} style={{color:"#3b3c3d"}}>about</Link>
          </div>
          <div className="navLink">
            <img src={die2} alt='dice1' className="navDice" onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} />
            <Link className="navText" to='/mechanics' onMouseOver={props.onHover({num:'1', color: '#dd3d27'})} style={{color:"#dd3d27"}}>the mechanics</Link>
          </div>
          <div className="navLink">
            <img src={die3} alt='dice2' className="navDice" onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} />
            <Link className="navText" to='/seminar' onMouseOver={props.onHover({num:'2', color: '#e2af3b'})} style={{color:"#e2af3b"}}>the seminar</Link>
          </div>
          <div className="navLink">
            <img src={die3} alt='dice3' className="navDice" onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} />
            <Link className="navText" to='/playtest' onMouseOver={props.onHover({num:'3', color: '#30AEA4'})} style={{color:"#30AEA4"}}>tools demo</Link>
          </div>
          <div className="navLink">
            <img src={die4} alt='dice4' className="navDice" onMouseOver={props.onHover({num:'4', color: '#a3509f'})} />
            <Link className="navText" to='/examples' onMouseOver={props.onHover({num:'4', color: '#a3509f'})} style={{color:"#a24f9d"}}>examples</Link>
          </div>
        </div>
    );
  }

}


export default Nav;
