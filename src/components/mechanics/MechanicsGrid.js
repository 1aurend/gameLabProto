import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import '../grids.css'
import '../mechanics_grid.css'
import DiceNav from '../dice_nav/DiceNav.js'
import gameLab from '../../assets/dev_subtitle.svg'
import CenterPane from './CenterPane.js'
import ChallengePane from '../subpages/ChallengePane.js'

class MechanicsGrid extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeMech: props.mechanic,
      activeMove: false,
    }
    this.onClickMech = this.onClickMech.bind(this)
    this.onClickMove = this.onClickMove.bind(this)

  }

  componentDidUpdate(prevProps, prevState) {
  if (this.props.location !== prevProps.location) {
     {/*this.setState({ activeMech: this.props.location.pathname === '/mechanics' || this.props.location.pathname === '/mechanics/' ? 'mechanics' : this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length-1]});*/}
     this.setState({activeMech: this.props.mechanic})
  }
}

  onClickMech(mech){
    this.setState(
      {
        activeMech: mech,
        activeMove: false,
      }
    );
    {/*^^unnecessary? now always being updated via Route?*/}
  }

  onClickMove = (move) => (e) => {
    this.setState(
      {
        activeMove: move,
      }
    )
  }


  render() {

    let center
    let background = this.props.backgroundColor
    let title
    let linkPath
    if (this.props.dChallenges) {
      center = <ChallengePane mechanic={this.state.activeMech} />
      title = 'design challenges'
      linkPath = '/tools/challenges/'
    }
    else {
      center = <CenterPane mechanic={this.state.activeMech} move={this.state.activeMove} onClick={(e) => this.onClickMove(e)} />
      title = 'the mechanics'
      linkPath = '/mechanics/'
    }

    let fontColor = ['','','','','','','','']
    fontColor.fill('#fcf5eb', 0, 8)
    let theMechanics = ['time', 'space', 'chance', 'action', 'challenge', 'training', 'strategy', 'multiplayer']
    for (var i = 0; i < theMechanics.length; i++) {
        if (this.state.activeMech === theMechanics[i] && !this.props.dChallenges) {
          fontColor[i] = '#7fc8a0'
        }
        else if (this.state.activeMech === theMechanics[i] && this.props.dChallenges) {
          fontColor[i] = '#e2af3b'
        }
    }

  return (
    <div>
      <div style={{backgroundColor: background}}>
      </div>
      <div className="ninegrid" style={{backgroundColor: background}}>
        <div id='mechanicstitle'>
          <img src={gameLab} alt='gameLab' className='gameLab' style={{maxHeight: '50%'}}/>
          <div className='pageTitle'><h1 style={{color: background}}>{title}</h1></div>
        </div>
        <div id='diceNav'>
          <DiceNav path={this.props.location.pathname}/>
        </div>
        <div id='centerPane'>
          {center}
        </div>
        <div id='mechanic1'>
          <Link className="mechLink" to={linkPath + 'time'} onClick={(e) => this.onClickMech('time', e)} style={{color: fontColor[0]}}>Time</Link>
        </div>
        <div id="mechanic2">
          <Link className="mechLink" to={linkPath + 'space'} onClick={(e) => this.onClickMech('space', e)} style={{color: fontColor[1]}}>Space</Link>
        </div>
        <div id='mechanic3'>
          <Link className="mechLink" to={linkPath + 'chance'} onClick={(e) => this.onClickMech('chance', e)} style={{color: fontColor[2]}}>Chance</Link>
        </div>
        <div id="mechanic4">
          <Link className="mechLink" to={linkPath + 'action'} onClick={(e) => this.onClickMech('action', e)} style={{color: fontColor[3]}}>Action</Link>
        </div>
        <div id="mechanic5">
          <Link className="mechLink" to={linkPath + 'challenge'} onClick={(e) => this.onClickMech('challenge', e)} style={{color: fontColor[4]}}>Challenge</Link>
        </div>
        <div id="mechanic6">
          <Link className="mechLink" to={linkPath + 'training'} onClick={(e) => this.onClickMech('training', e)} style={{color: fontColor[5]}}>Training</Link>
        </div>
        <div id="mechanic7">
          <Link className="mechLink" to={linkPath + 'strategy'} onClick={(e) => this.onClickMech('strategy', e)} style={{color: fontColor[6]}}>Strategy</Link>
        </div>
        <div id="mechanic8">
          <Link className="mechLink" to={linkPath + 'multiplayer'}onClick={(e) => this.onClickMech('multiplayer', e)} style={{color: fontColor[7]}}>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}
}

export default (MechanicsGrid);
