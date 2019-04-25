import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'
import { toolsDemo } from '../homepage/pitchText.js'

function ToolsDemo (props) {

  return(
      <div className="ninegrid" style={{backgroundColor: '#30AEA4'}}>
        <div id='mechanicstitle'>
          <img src={gameLab} alt='gameLab' className='gameLab' style={{maxHeight: '50%'}}/>
          <div className='pageTitle'><h1 style={{color: '#30AEA4', fontSize: '4rem', paddingTop: '0'}}>tools demo</h1></div>
        </div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
        <div id='seminarBlurb'>
          {toolsDemo}
        </div>
      </div>
)

}

export default ToolsDemo;
