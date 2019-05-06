import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import '../grids.css'
import '../mechanics_grid.css'
import DiceNav from '../dice_nav/DiceNav.js'
import gameLab from '../../assets/dev_subtitle.svg'
import CenterPane from './CenterPane.js'
import ChallengePane from '../subpages/ChallengePane.js'
import timesvg from '../../assets/time.svg'
import spacesvg from '../../assets/space.svg'
import actionsvg from '../../assets/action.svg'
import chancesvg from '../../assets/chance.svg'
import challengesvg from '../../assets/challenge.svg'
import strategysvg from '../../assets/strategy.svg'
import multiplayersvg from '../../assets/multiplayer.svg'
import trainingsvg from '../../assets/training.svg'
import timesvg_invert from '../../assets/time_invert.svg'
import spacesvg_invert from '../../assets/space_invert.svg'
import actionsvg_invert from '../../assets/action_invert.svg'
import chancesvg_invert from '../../assets/chance_invert.svg'
import challengesvg_invert from '../../assets/challenge_invert.svg'
import strategysvg_invert from '../../assets/strategy_invert.svg'
import multiplayersvg_invert from '../../assets/multiplayer_invert.svg'
import trainingsvg_invert from '../../assets/training_invert.svg'


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
     this.setState({activeMech: this.props.mechanic})
  }
}

  onClickMech(mech){
    this.setState(
      {
        activeMove: false,
      }
    );
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

    let gridColors = {
      time: {
        font: '#fcf5eb',
        svg: timesvg,
        invsvg: timesvg_invert
      },
      space: {
        font: '#fcf5eb',
        svg: spacesvg,
        invsvg: spacesvg_invert
      },
      chance: {
        font: '#fcf5eb',
        svg: chancesvg,
        svg: chancesvg_invert,
      },
      action: {
        font: '#fcf5eb',
        svg: actionsvg,
        svg: actionsvg_invert
      },
      challenge: {
        font: '#fcf5eb',
        svg: challengesvg,
        svg: challengesvg_invert
      },
      training: {
        font: '#fcf5eb',
        svg: trainingsvg,
        svg: trainingsvg_invert
      },
      strategy: {
        font: '#fcf5eb',
        svg: strategysvg,
        svg: strategysvg_invert
      },
      multiplayer: {
        font: '#fcf5eb',
        svg: multiplayersvg,
        svg: multiplayersvg_invert
      },
    }

    for (var i = 0; i < Object.keys(gridColors).length; i++) {
        if (this.state.activeMech === Object.keys(gridColors)[i] && !this.props.dChallenges) {
          let key = Object.keys(gridColors)[i]
          gridColors[key]['font'] = '#7fc8a0'
          gridColors[key]['svg'] = gridColors[key]['invsvg']
          console.log(gridColors[key]['svg']);
        }
        else if (this.state.activeMech === Object.keys(gridColors)[i] && this.props.dChallenges) {
          let key = Object.keys(gridColors)[i]
          gridColors[key]['font'] = '#e2af3b'
        }
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
      <div className="biggrid" style={{backgroundColor: background}}>
        <div id='mechanicstitle'>
          <div id='titleimg'></div>
          <div className='pageTitle'><h1 style={{color: background}}>{title}</h1></div>
          <div id='diceNav'>
            <DiceNav path={this.props.location.pathname}/>
          </div>
        </div>

        <div id='centerPane'>
          {center}
        </div>
        <div id='dotsleftstrip'></div>
        <div id='dotsrightstrip'></div>
        <div class='grid9mech' id='mechanic1'>
          <img src={gridColors.time.svg} alt='hourglass' />
          <Link className="mechLink" to={linkPath + 'time'} onClick={(e) => this.onClickMech('time', e)} style={{color: gridColors.time.font}}>Time</Link>
        </div>
        <div class='grid9mech' id="mechanic2">
          <img src={gridColors.space.svg} alt='checkerboard' />
          <Link className="mechLink" to={linkPath + 'space'} onClick={(e) => this.onClickMech('space', e)} style={{color: gridColors.space.font}}>Space</Link>
        </div>
        <div class='grid9mech' id='mechanic3'>
          <img src={chancesvg} alt='hand of cards' />
          <Link className="mechLink" to={linkPath + 'chance'} onClick={(e) => this.onClickMech('chance', e)} style={{color: fontColor[2]}}>Chance</Link>
        </div>
        <div class='grid9mech' id="mechanic4">
          <img src={actionsvg} alt='dominos' />
          <Link className="mechLink" to={linkPath + 'action'} onClick={(e) => this.onClickMech('action', e)} style={{color: fontColor[3]}}>Action</Link>
        </div>
        <div class='grid9mech' id="mechanic5">
          <img src={challengesvg} alt='mountain' />
          <Link className="mechLink" to={linkPath + 'challenge'} onClick={(e) => this.onClickMech('challenge', e)} style={{color: fontColor[4]}}>Challenge</Link>
        </div>
        <div class='grid9mech' id="mechanic6">
          <img src={trainingsvg} alt='checkerboard' />
          <Link className="mechLink" to={linkPath + 'training'} onClick={(e) => this.onClickMech('training', e)} style={{color: fontColor[5]}}>Training</Link>
        </div>
        <div class='grid9mech' id="mechanic7">
          <img src={strategysvg} alt='chess knight' />
          <Link className="mechLink" to={linkPath + 'strategy'} onClick={(e) => this.onClickMech('strategy', e)} style={{color: fontColor[6]}}>Strategy</Link>
        </div>
        <div class='grid9mech' id="mechanic8">
          <img src={multiplayersvg} alt='controllers' />
          <Link className="mechLink" to={linkPath + 'multiplayer'}onClick={(e) => this.onClickMech('multiplayer', e)} style={{color: fontColor[7]}}>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}
}

export default (MechanicsGrid);
