import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import '../grids.css'
import '../mechanics_grid.css'
import '../backgrounds.css'
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
    this.onClick = this.onClick.bind(this)
    console.log('constructor log = ' + props.mechanic);

  }

  componentDidUpdate(prevProps, prevState) {
  if (this.props.location !== prevProps.location || this.props.dChallenges !== prevProps.dChallenges || this.props.mechanic !== prevProps.mechanic) {
     this.setState({
       activeMech: this.props.mechanic,
       activeMove: false,
     })
     console.log('update log = ' + this.props.mechanic);
  }
}

  onClick = (move) => (e) => {
    this.setState(
      {
        activeMove: move,
      }
    )
  }


  render() {

    console.log('render state mech: ' + this.state.activeMech);
    console.log('render prop mech: ' + this.props.mechanic);
    console.log('here is dChallenges: ' + this.props.dChallenges);

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
      center = <CenterPane mechanic={this.state.activeMech} move={this.state.activeMove} onClick={(e) => this.onClick(e)} />
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
          <Link to='/'><div id='titleimg'></div></Link>
          <div className='pageTitle'><Link to={linkPath}><h1 style={{color: background}}>{title}</h1></Link></div>
          <div id='diceNav'>
            <DiceNav path={this.props.location.pathname}/>
          </div>
        </div>

        <div id='centerPane'>
          {center}
        </div>
        <div id='dotsleftstrip1'></div>
        <div id='dotsrightstrip1'></div>
        <div className='grid9mech' id='mechanic1'>
          <Link to={linkPath + 'time'}><img src={gridColors.time.svg} alt='hourglass' /></Link>
          <Link className="mechLink" to={linkPath + 'time'} style={{color: gridColors.time.font}}>Time</Link>
        </div>
        <div className='grid9mech' id="mechanic2">
          <Link to={linkPath + 'space'}><img src={gridColors.space.svg} alt='checkerboard' /></Link>
          <Link className="mechLink" to={linkPath + 'space'} style={{color: gridColors.space.font}}>Space</Link>
        </div>
        <div className='grid9mech' id='mechanic3'>
          <Link to={linkPath + 'chance'}><img src={gridColors.chance.svg} alt='hand of cards' /></Link>
          <Link className="mechLink" to={linkPath + 'chance'} style={{color: gridColors.chance.font}}>Chance</Link>
        </div>
        <div className='grid9mech' id="mechanic4">
          <Link to={linkPath + 'action'}><img src={gridColors.action.svg} alt='dominos' /></Link>
          <Link className="mechLink" to={linkPath + 'action'} style={{color: gridColors.action.font}}>Action</Link>
        </div>
        <div className='grid9mech' id="mechanic5">
          <Link to={linkPath + 'challenge'}><img src={gridColors.challenge.svg} alt='mountain' /></Link>
          <Link className="mechLink" to={linkPath + 'challenge'} style={{color: gridColors.challenge.font}}>Challenge</Link>
        </div>
        <div className='grid9mech' id="mechanic6">
          <Link to={linkPath + 'training'}><img src={gridColors.training.svg} alt='checkerboard' /></Link>
          <Link className="mechLink" to={linkPath + 'training'} style={{color: gridColors.training.font}}>Training</Link>
        </div>
        <div className='grid9mech' id="mechanic8">
          <Link to={linkPath + 'strategy'}><img src={gridColors.strategy.svg} alt='chess knight' /></Link>
          <Link className="mechLink" to={linkPath + 'strategy'} style={{color: gridColors.strategy.font}}>Strategy</Link>
        </div>
        <div className='grid9mech' id="mechanic7">
          <Link to={linkPath + 'multiplayer'}><img src={gridColors.multiplayer.svg} alt='controllers' /></Link>
          <Link className="mechLink" to={linkPath + 'multiplayer'} style={{color: gridColors.multiplayer.font}}>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}
}

export default (MechanicsGrid);
