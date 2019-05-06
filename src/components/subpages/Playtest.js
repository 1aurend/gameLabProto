import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'

function Playtest (props) {

  return(
    <div className="biggrid" style={{backgroundColor: '#30AEA4'}}>

      <div id='mechanicstitle'>
        <div id='titleimg'></div>
        <div className='pageTitle'><h1 style={{color: '#30AEA4'}}>playtest your assignment</h1></div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
      </div>
        <div id='seminarBlurb'>
          <p>If you have an existing assignment or activity you’d like to update using game design pedagogy, the questions below are the place to start. Each set of questions prompts you to think about how you might incorporate one of the mechanics from our inventory. You can run your assignment through all ten or pick and choose the ones that are most relevant.
          </p>
        </div>
        <div id='playtestpng'>
          <img src={playtestpng} alt='playtest your assignment' style={{width: '100%'}}/>
        </div>
      </div>
)

}

export default Playtest;
