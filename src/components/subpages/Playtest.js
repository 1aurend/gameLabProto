import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'

function Playtest (props) {

  return(
      <div className="reallybiggrid" style={{backgroundColor: '#30AEA4'}}>
        <div id='subpagetitle'>
          <img src={gameLab} alt='gameLab'style={{height: '35%', paddingTop: '5%', paddingLeft: '18%'}}/>
          <h1 style={{color: '#30AEA4', fontSize: '250%', marginLeft: '7%'}}>playtest your assignment</h1>
        </div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
        <div id='seminarBlurb'>
          <p style={{color: '#3b3c3d'}}>In Spring 2019, we taught a Bok Seminar for graduate students called Let’s Play! What Games can Teach us about Motivation and Engagement. We used Jesse Schell’s The Art of Game Design as our textbook. (We think it should be required reading for all teachers.) Each week we discussed a different game mechanic or design principle, and participants designed assignments that deployed that mechanic. View our full syllabus below.
          </p>
        </div>
        <div id='playtestpng'>
          <img src={playtestpng} alt='playtest your assignment' style={{width: '100%'}}/>
        </div>
      </div>
)

}

export default Playtest;
