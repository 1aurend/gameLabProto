import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'

function Tetrad (props) {

  return(
      <div className="biggrid" style={{backgroundColor: '#30AEA4'}}>
        <div id='mechanicstitle'>
          <img src={gameLab} alt='gameLab' className='gameLab' style={{maxHeight: '50%'}}/>
          <div className='pageTitle'><h1 style={{color: '#30AEA4', fontSize: '3.5rem', paddingTop: '0'}}>the tetrad</h1></div>
        </div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
        <div id='seminarBlurb'>
          <p style={{paddingTop: '1rem'}}>Schell’s tetrad is one way of breaking games down into components and analyzing the interactions between them. Analyzing your own classroom in this way is a great first step for thinking like a game designer. You can use the tetrad to analyze your course at the level of an entire syllabus, a single course meeting or unit, or something as small as a single assignment. Each level will yield distinct insights.
          </p>
        </div>
        <div id='playtestpng'>
          <img src={playtestpng} alt='playtest your assignment' style={{width: '100%'}}/>
        </div>
      </div>
)

}

export default Tetrad;
