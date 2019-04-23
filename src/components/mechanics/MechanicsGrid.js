import React from 'react';
import { Link } from 'react-router-dom';
import '../grids.css'
import '../mechanics_grid.css'
import L1Header from '../subpages/L1Header.js'
import DiceNav from '../dice_nav/DiceNav.js'
import gameLab from '../../assets/dev_subtitle.svg'

function MechanicsGrid(props) {
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
          <DiceNav path={props.location.pathname}/>
        </div>
        <div id='movesLinks'>
          links to moves go here...
        </div>
        <div id='activeMech'>
          about
        </div>
        <div id='mechanic1'>
          <Link className="mechLink" to='/mechanics/time'>Time</Link>
        </div>
        <div id="mechanic2">
          <Link className="mechLink" to='/mechanics/space'>Space</Link>
        </div>
        <div id='mechanic3'>
          <Link className="mechLink" to='/mechanics/chance'>Chance</Link>
        </div>
        <div id="mechanic4">
          <Link className="mechLink" to='/mechanics/chance'>Action</Link>
        </div>
        <div id="centertext">
          <p>Mechanics are the interactions and relationships that make a game a system. Mechanics are what make a game interactive rather than entertainment you just take in. Put simply, mechanics are what make a game work. For this reason, designing with mechanics in mind is the key way teachers can apply the logic of game design to the classroom.</p>
          <p>Use our mechanic inventory to explore implementing game mechanics in your class.</p>
        </div>
        <div id="mechanic5">
          <Link className="mechLink" to='/mechanics/chance'>Challenge</Link>
        </div>
        <div id="mechanic6">
          <Link className="mechLink" to='/mechanics/chance'>Training</Link>
        </div>
        <div id="mechanic7">
          <Link className="mechLink" to='/mechanics/chance'>Strategy</Link>
        </div>
        <div id="mechanic8">
          <Link className="mechLink" to='/mechanics/chance'>Multiplayer</Link>
        </div>
      </div>
</div>
  );
}

export default MechanicsGrid;
