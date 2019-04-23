import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import '../grids.css'
import '../mechanics_grid.css'
import L1Header from '../subpages/L1Header.js'
import DiceNav from '../dice_nav/DiceNav.js'
import gameLab from '../../assets/dev_subtitle.svg'
import CenterPane from './CenterPane.js'

class MechanicsGrid extends Component {

  constructor(props){
    super(props);
    this.state = {
      active: 'mechanics',
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(mech){
    this.setState({active: mech});
    console.log('this is active state: ' + this.state.active);

  }

  render() {
  return (
    <div>
      <div style={{backgroundColor: "#dd3d27"}}>
      </div>
      <div className="ninegrid" style={{backgroundColor: "#dd3d27"}}>
        <div id='mechanicstitle'>
          <img src={gameLab} alt='gameLab'style={{height: '35%', paddingTop: '5%', paddingLeft: '18%'}}/>
          <h1>the mechanics</h1>
        </div>
        <div id='diceNav'>
          <DiceNav path={this.props.location.pathname}/>
        </div>
        <div id='mechSwitch'>
            <Switch>
              <Route path={this.props.location.pathname} component={CenterPane}/>
            </Switch>
        </div>
        <div id='mechanic1'>
          <Link className="mechLink" to='/mechanics/time' onClick={(e) => this.onClick('time', e)}>Time</Link>
        </div>
        <div id="mechanic2">
          <Link className="mechLink" to='/mechanics/space' onClick={(e) => this.onClick('space', e)}>Space</Link>
        </div>
        <div id='mechanic3'>
          <Link className="mechLink" to='/mechanics/chance' onClick={(e) => this.onClick('chance', e)}>Chance</Link>
        </div>
        <div id="mechanic4">
          <Link className="mechLink" to='/mechanics/action' onClick={(e) => this.onClick('action', e)}>Action</Link>
        </div>
        <div id="mechanic5">
          <Link className="mechLink" to='/mechanics/challenge' onClick={(e) => this.onClick('challenge', e)}>Challenge</Link>
        </div>
        <div id="mechanic6">
          <Link className="mechLink" to='/mechanics/training' onClick={(e) => this.onClick('training', e)}>Training</Link>
        </div>
        <div id="mechanic7">
          <Link className="mechLink" to='/mechanics/strategy' onClick={(e) => this.onClick('strategy', e)}>Strategy</Link>
        </div>
        <div id="mechanic8">
          <Link className="mechLink" to='/mechanics/multiplayer'onClick={(e) => this.onClick('muliplayer', e)}>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}
}

export default MechanicsGrid;
