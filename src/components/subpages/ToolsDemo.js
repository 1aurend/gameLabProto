import React from 'react';
import '../grids.css'
import playtestpng from '../../assets/playtest-assignment-tall.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'
import egg from '../../assets/egg.svg'
import gameLab from '../../assets/dev_subtitle.svg'
import { Link } from 'react-router-dom'
import playtest from '../../assets/playtest.svg'
import tetrad from '../../assets/tetrad.svg'
import designchallenge from '../../assets/designchallenge.svg'
import Tetris from '../games/Tetris.js'



function ToolsDemo (props) {

  return(
      <div className="ninegrid" style={{backgroundColor: '#30AEA4'}}>

        <div id='mechanicstitle'>
          <Link to='/'><div id='titleimg'></div></Link>
          <div className='pageTitle'><Link to='/tools'><h1 style={{color: '#30AEA4'}}>tools demo</h1></Link></div>
          <div id='subpageDiceNav'>
            <DiceNav path={props.location.pathname}/>
          </div>
        </div>
        <div id='dotsleftbenddownleft'></div>
        <div id='dotsleftbendrightdown'></div>
        <div id='dotsbottomline'></div>
        <div id='dotsrightstrip2'></div>
        <div id='tetristile'>
          <Link to='/'><img className='easteregg' src={egg} alt='easter egg' /></Link>
        </div>
        <div id='toolsBlurb'>
          <p>Ready to try out our toolkit? Here are three ways to get started:</p>
          <div id='toolsCols'>
            <div id='playtestcol'>
              <Link className='imgLink' to='/tools/playtest'><img src={ playtest } /></Link>
              <Link className='pLink' to='/tools/playtest'><h4>“Playtest”<br />Your Assignment</h4></Link>
              <p>Use these questions to think like a game designer about an already existing assignment or class activity and up the assignment’s XP.</p>
            </div>
            <div id='tetradcol'>
              <Link className='imgLink' to='/tools/tetrad'><img src={ tetrad } /></Link>
              <Link className='pLink' to='/tools/tetrad'><h4>The<br />Tetrad</h4></Link>
              <p>Game designer Jesse Schell uses a tetrad to break down games into their component elements. Not surprisingly, analyzing classes using this tetrad leads to key insights about how they work.</p>
            </div>
            <div id='designchallengecol'>
              <Link className='imgLink' to='/tools/challenges'><img src={ designchallenge } /></Link>
              <Link className='pLink' to='/tools/challenges'><h4>Design<br />Challenges</h4></Link>
              <p>Not sure where to begin? Try out some of the design challenges we used in our seminar for crafting game-infused assignments.</p>
            </div>
          </div>
      </div>
    </div>
)

}

export default ToolsDemo;
