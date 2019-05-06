import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'
import { toolsDemo } from '../homepage/pitchText.js'

function ToolsDemo (props) {

  return(
      <div className="biggrid" style={{backgroundColor: '#30AEA4'}}>

        <div id='mechanicstitle'>
          <div id='titleimg'></div>
          <div className='pageTitle'><h1 style={{color: '#30AEA4'}}>tools demo</h1></div>
          <div id='subpageDiceNav'>
            <DiceNav path={props.location.pathname}/>
          </div>
        </div>
        <div id='toolsBlurb'>
          {toolsDemo}
        </div>
      </div>

)

}

export default ToolsDemo;
