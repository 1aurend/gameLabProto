import React from 'react';
import '../grids.css'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'

function Examples (props) {

  return(
      <div className="ninegrid" style={{backgroundColor: '#a3509f'}}>
        <div id='subpagetitle'>
          <img src={gameLab} alt='gameLab'style={{height: '35%', paddingTop: '5%', paddingLeft: '18%'}}/>
          <h1 style={{color: '#a3509f', paddingLeft: '12%'}}>examples</h1>
        </div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
        <div id='seminarBlurb'>
          <p style={{color: '#fcf5eb'}}>In Spring 2019, we taught a Bok Seminar for graduate students called Let’s Play! What Games can Teach us about Motivation and Engagement. We used Jesse Schell’s The Art of Game Design as our textbook. (We think it should be required reading for all teachers.) Each week we discussed a different game mechanic or design principle, and participants designed assignments that deployed that mechanic. View our full syllabus below.
          </p>
        </div>
      </div>
)

}


export default Examples;
