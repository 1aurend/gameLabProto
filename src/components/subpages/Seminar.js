import React from 'react';
import{ Link } from 'react-router-dom';
import L1Header from './L1Header.js'
import '../grids.css'
import syllabus1 from '../../assets/letsplay-syllabus-1.png'
import syllabus2 from '../../assets/letsplay-syllabus-2.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'

function Seminar (props) {

  return(
      <div className="biggrid" style={{backgroundColor: '#e2af3b'}}>
        <div id='subpagetitle'>
          <img src={gameLab} alt='gameLab'style={{height: '35%', paddingTop: '5%', paddingLeft: '18%'}}/>
          <h1 style={{color: '#e2af3b', paddingLeft: '7%'}}>the seminar</h1>
        </div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
        <div id='seminarBlurb'>
          <p style={{color: '#3b3c3d'}}>In Spring 2019, we taught a Bok Seminar for graduate students called Let’s Play! What Games can Teach us about Motivation and Engagement. We used Jesse Schell’s The Art of Game Design as our textbook. (We think it should be required reading for all teachers.) Each week we discussed a different game mechanic or design principle, and participants designed assignments that deployed that mechanic. View our full syllabus below.
          </p>
        </div>
        <div id='syllabus1'>
          <img src={syllabus1} alt='syllabus page 1' style={{width: '100%'}}/>
        </div>
        <div id='syllabus2'>
          <img src={syllabus2} alt='syllabus page 1' style={{width: '100%'}}/>
        </div>
      </div>
)

}

export default Seminar;
