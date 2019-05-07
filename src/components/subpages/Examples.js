import React from 'react';
import '../grids.css'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'

import gameLab from '../../assets/dev_subtitle.svg'
import { Link } from 'react-router-dom'

function Examples (props) {

  return(
    <div className="biggrid" style={{backgroundColor: '#a3509f'}}>

      <div id='mechanicstitle'>
        <Link to='/'><div id='titleimg'></div></Link>
        <div className='pageTitle'><Link to='/examples'><h1 style={{color: '#a3509f'}}>examples</h1></Link></div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
      </div>

      <div id='dotsleftbenddownleft0'></div>
      <div id='dotsrightbenddownright'></div>
      <div id='dotsbottomubenddown'></div>


        <div id='exampleBlurb'>
          <p>In Spring 2019, we taught a Bok Seminar for graduate students called Let’s Play! What Games can Teach us about Motivation and Engagement. We used Jesse Schell’s The Art of Game Design as our textbook. (We think it should be required reading for all teachers.) Each week we discussed a different game mechanic or design principle, and participants designed assignments that deployed that mechanic. View our full syllabus below.
          </p>
        </div>
      </div>
)

}


export default Examples;
