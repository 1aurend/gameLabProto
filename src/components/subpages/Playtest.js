import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'
import gameLab from '../../assets/dev_subtitle.svg'
import { Link } from 'react-router-dom'
import tetrad from '../../assets/tetrad.svg'
import designchallenge from '../../assets/designchallenge.svg'


function Playtest (props) {

  return(
    <div className="reallybiggrid" style={{backgroundColor: '#30AEA4'}}>

      <div id='mechanicstitle'>
        <Link to='/'><div id='titleimg'></div></Link>
        <div className='pageTitle'><Link to='/tools/playtest'><h1 style={{color: '#30AEA4'}}>playtesting</h1></Link></div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
      </div>
      <div id='toolsNav'>
        <div id='tetradrow'>
          <Link className='imgLink' to='/tools/tetrad'><img src={ tetrad } /></Link>
          <Link className='pLink' to='/tools/tetrad'><h4>The<br />Tetrad</h4></Link>
        </div>
        <div id='designchallengerow'>
          <Link className='imgLink' to='/tools/challenges'><img src={ designchallenge } /></Link>
          <Link className='pLink' to='/tools/challenges'><h4>Design<br />Challenges</h4></Link>
        </div>
      </div>

      <div id='dotsleftbenddownleft'></div>
      <div id='dotsleftbendrightdown'></div>
      <div id='dotsrightbenddownright'></div>
      <div id='dotsrightstrip2'></div>

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
