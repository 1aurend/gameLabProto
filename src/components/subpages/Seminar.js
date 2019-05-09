import React, { Component } from 'react';
import '../grids.css'
import syllabus1 from '../../assets/letsplay-syllabus-1.png'
import syllabus2 from '../../assets/letsplay-syllabus-2.png'
import egg from '../../assets/egg.svg'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'
import gameLab from '../../assets/dev_subtitle.svg'
import Snake from '../games/Snake.js'
import { Link } from 'react-router-dom'


class Seminar extends Component {

  constructor (){
    super();
    this.state = {
      snake: false,
    }
  }

  playSnake(){
    this.setState({snake: !this.state.snake});
  }


  render (){

      return(
          <div className="ninegrid" style={{backgroundColor: '#e2af3b'}}>
            <div id='mechanicstitle'>
              <Link to='/'><div id='titleimg'></div></Link>
              <div className='pageTitle'><Link to='/seminar'><h1 style={{color: '#e2af3b'}}>the seminar</h1></Link></div>
              <div id='subpageDiceNav'>
                <DiceNav path={this.props.location.pathname}/>
              </div>
            </div>
            <div id='dotsleftbenddownleft0'></div>
            <div id='dotsrightubendright'></div>
            <div id='snaketile'>
              <div style={{position: 'absolute'}}>
                <Snake playing={this.state.snake} onClick={() => this.playSnake()} />
              </div>
            </div>

            <div id='seminarBlurb'>
              <p>In Spring 2019, we taught a Bok Seminar for graduate students called Let’s Play! What Games can Teach us about Motivation and Engagement. We used Jesse Schell’s The Art of Game Design as our textbook. (We think it should be required reading for all teachers.) Each week we discussed a different game mechanic or design principle, and participants designed assignments that deployed that mechanic. View our full syllabus below.
              </p>
            </div>
            <div id='syllabusrow'>
              <div className='syllabustile'>
                <img src={syllabus1} alt='syllabus page 1'/>
              </div>
              <div className='syllabustile'>
                <img src={syllabus2} alt='syllabus page 2'/>
              </div>
            </div>
          </div>
    )
  }
}

export default Seminar;
