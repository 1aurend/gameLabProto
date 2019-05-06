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
import greenTime from '../../assets/time_green.svg'
import goldTime from '../../assets/time_gold.svg'
import greenSpace from '../../assets/space_green.svg'
import goldSpace from '../../assets/space_gold.svg'
import greenChance from '../../assets/chance_green.svg'
import goldChance from '../../assets/chance_gold.svg'
import greenChallenge from '../../assets/challenge_green.svg'
import goldChallenge from '../../assets/challenge_gold.svg'
import greenAction from '../../assets/action_green.svg'
import goldAction from '../../assets/action_gold.svg'
import greenStrategy from '../../assets/strategy_green.svg'
import goldStrategy from '../../assets/strategy_gold.svg'
import greenTraining from '../../assets/training_green.svg'
import goldTraining from '../../assets/training_gold.svg'
import greenMultiplayer from '../../assets/multiplayer_green.svg'
import goldMultiplayer from '../../assets/multiplayer_gold.svg'



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
        green: greenTime,
        gold: goldTime,
      },
      space: {
        font: '#fcf5eb',
        svg: spacesvg,
        green: greenSpace,
        gold: goldSpace,
      },
      chance: {
        font: '#fcf5eb',
        svg: chancesvg,
        green: greenChance,
        gold: goldChance,
      },
      action: {
        font: '#fcf5eb',
        svg: actionsvg,
        green: greenAction,
        gold: goldAction,
      },
      challenge: {
        font: '#fcf5eb',
        svg: challengesvg,
        green: greenChallenge,
        gold: goldChallenge,
      },
      training: {
        font: '#fcf5eb',
        svg: trainingsvg,
        green: greenTraining,
        gold: goldTraining,
      },
      strategy: {
        font: '#fcf5eb',
        svg: strategysvg,
        green: greenStrategy,
        gold: goldStrategy,
      },
      multiplayer: {
        font: '#fcf5eb',
        svg: multiplayersvg,
        green: greenMultiplayer,
        gold: goldMultiplayer,
      },
    }

    for (var i = 0; i < Object.keys(gridColors).length; i++) {
        if (this.state.activeMech === Object.keys(gridColors)[i] && !this.props.dChallenges) {
          let key = Object.keys(gridColors)[i]
          gridColors[key]['font'] = '#7fc8a0'
          gridColors[key]['svg'] = gridColors[key]['green']
        }
        else if (this.state.activeMech === Object.keys(gridColors)[i] && this.props.dChallenges) {
          let key = Object.keys(gridColors)[i]
          gridColors[key]['font'] = '#e2af3b'
          gridColors[key]['svg'] = gridColors[key]['gold']
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
          <img src={gridColors.chance.svg} alt='hand of cards' />
          <Link className="mechLink" to={linkPath + 'chance'} onClick={(e) => this.onClickMech('chance', e)} style={{color: gridColors.chance.font}}>Chance</Link>
        </div>
        <div class='grid9mech' id="mechanic4">
          <img src={gridColors.action.svg} alt='dominos' />
          <Link className="mechLink" to={linkPath + 'action'} onClick={(e) => this.onClickMech('action', e)} style={{color: gridColors.action.font}}>Action</Link>
        </div>
        <div class='grid9mech' id="mechanic5">
          <img src={gridColors.challenge.svg} alt='mountain' />
          <Link className="mechLink" to={linkPath + 'challenge'} onClick={(e) => this.onClickMech('challenge', e)} style={{color: gridColors.challenge.font}}>Challenge</Link>
        </div>
        <div class='grid9mech' id="mechanic6">
          <img src={gridColors.training.svg} alt='checkerboard' />
          <Link className="mechLink" to={linkPath + 'training'} onClick={(e) => this.onClickMech('training', e)} style={{color: gridColors.training.font}}>Training</Link>
        </div>
        <div class='grid9mech' id="mechanic7">
          <img src={gridColors.strategy.svg} alt='chess knight' />
          <Link className="mechLink" to={linkPath + 'strategy'} onClick={(e) => this.onClickMech('strategy', e)} style={{color: gridColors.strategy.font}}>Strategy</Link>
        </div>
        <div class='grid9mech' id="mechanic8">
          <img src={gridColors.multiplayer.svg} alt='controllers' />
          <Link className="mechLink" to={linkPath + 'multiplayer'}onClick={(e) => this.onClickMech('multiplayer', e)} style={{color: gridColors.multiplayer.font}}>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}
}

export default (MechanicsGrid);
