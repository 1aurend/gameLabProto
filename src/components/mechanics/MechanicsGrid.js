import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import '../grids.css'
import '../mechanics_grid.css'
import DiceNav from '../dice_nav/DiceNav.js'
import gameLab from '../../assets/dev_subtitle.svg'
import CenterPane from './CenterPane.js'

class MechanicsGrid extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeMech: props.location.pathname === '/mechanics' || props.location.pathname === '/mechanics/' ? 'mechanics' : props.location.pathname.split('/')[props.location.pathname.split('/').length-1],
      activeMove: false,
    }
    this.onClickMech = this.onClickMech.bind(this)
    this.onClickMove = this.onClickMove.bind(this)

    console.log(props.location.pathname);
    console.log('activeMech: ' + this.state.activeMech);
  }

  onClickMech(mech){
    this.setState(
      {
        activeMech: mech,
        activeMove: false,
      }
    );
    console.log('this is active state: ' + this.state.active);
  }

  onClickMove = (move) => (e) => {
    this.setState(
      {
        activeMove: move,
      }
    )
  }


  render() {

    console.log('here is activeMech: ' + this.state.activeMech);

    let fontColor = ['','','','','','','','']
    fontColor.fill('#fcf5eb', 0, 8)

    let theMechanics = ['time', 'space', 'chance', 'action', 'challenge', 'training', 'strategy', 'multiplayer']
    let pathTest = this.props.location.pathname.split('/')
    for (var i = 0; i < theMechanics.length; i++) {
        if (this.state.activeMech === theMechanics[i]) {
          fontColor[i] = '#7fc8a0'
        }
    }

  return (
    <div>
      <div style={{backgroundColor: "#dd3d27"}}>
      </div>
      <div className="ninegrid" style={{backgroundColor: "#dd3d27"}}>
        <div id='mechanicstitle'>
          <img src={gameLab} alt='gameLab' className='gameLab' style={{maxHeight: '50%'}}/>
          <div className='pageTitle'><h1>the mechanics</h1></div>
        </div>
        <div id='diceNav'>
          <DiceNav path={this.props.location.pathname}/>
        </div>
        <div id='centerPane'>
            <CenterPane mechanic={this.state.activeMech} move={this.state.activeMove} onClick={(e) => this.onClickMove(e)} />
        </div>
        <div id='mechanic1'>
          <Link className="mechLink" to='/mechanics/time' onClick={(e) => this.onClickMech('time', e)} style={{color: fontColor[0]}}>Time</Link>
        </div>
        <div id="mechanic2">
          <Link className="mechLink" to='/mechanics/space' onClick={(e) => this.onClickMech('space', e)} style={{color: fontColor[1]}}>Space</Link>
        </div>
        <div id='mechanic3'>
          <Link className="mechLink" to='/mechanics/chance' onClick={(e) => this.onClickMech('chance', e)} style={{color: fontColor[2]}}>Chance</Link>
        </div>
        <div id="mechanic4">
          <Link className="mechLink" to='/mechanics/action' onClick={(e) => this.onClickMech('action', e)} style={{color: fontColor[3]}}>Action</Link>
        </div>
        <div id="mechanic5">
          <Link className="mechLink" to='/mechanics/challenge' onClick={(e) => this.onClickMech('challenge', e)} style={{color: fontColor[4]}}>Challenge</Link>
        </div>
        <div id="mechanic6">
          <Link className="mechLink" to='/mechanics/training' onClick={(e) => this.onClickMech('training', e)} style={{color: fontColor[5]}}>Training</Link>
        </div>
        <div id="mechanic7">
          <Link className="mechLink" to='/mechanics/strategy' onClick={(e) => this.onClickMech('strategy', e)} style={{color: fontColor[6]}}>Strategy</Link>
        </div>
        <div id="mechanic8">
          <Link className="mechLink" to='/mechanics/multiplayer'onClick={(e) => this.onClickMech('multiplayer', e)} style={{color: fontColor[7]}}>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}
}

export default MechanicsGrid;
