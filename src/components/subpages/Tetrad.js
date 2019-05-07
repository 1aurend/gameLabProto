import React from 'react';
import '../grids.css'
import tetradpng from '../../assets/color-tetrad-new.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'
import gameLab from '../../assets/dev_subtitle.svg'
import Collapsible from 'react-collapsible'
import { Link } from 'react-router-dom'
import playtest from '../../assets/playtest.svg'
import designchallenge from '../../assets/designchallenge.svg'


function Tetrad (props) {

  return(
    <div className="biggrid" style={{backgroundColor: '#30AEA4'}}>

      <div id='mechanicstitle'>
        <Link to='/'><div id='titleimg'></div></Link>
        <div className='pageTitle'><Link to='/tools/tetrad'><h1 style={{color: '#30AEA4'}}>the tetrad</h1></Link></div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
      </div>
      <div id='toolsNav'>
        <div id='playtestrow'>
          <Link className='imgLink' to='/tools/playtest'><img src={ playtest } /></Link>
          <Link className='pLink' to='/tools/playtest'><h4>“Playtest”<br />Your Assignment</h4></Link>
        </div>
        <div id='designchallengerow'>
          <Link className='imgLink' to='/tools/challenges'><img src={ designchallenge } /></Link>
          <Link className='pLink' to='/tools/challenges'><h4>Design<br />Challenges</h4></Link>
        </div>
      </div>

      <div id='dotsleftbenddownleft'></div>
      <div id='dotsleftbendrightdown'></div>
      <div id='dotsrightstrip2'></div>

      <div id='seminarBlurb'>
        <p>Schell’s tetrad is one way of breaking games down into components and analyzing the interactions between them. Analyzing your own classroom in this way is a great first step for thinking like a game designer. You can use the tetrad to analyze your course at the level of an entire syllabus, a single course meeting or unit, or something as small as a single assignment. Each level will yield distinct insights.
        </p>
        <Collapsible trigger="How do I start?" className='Collapsible__trigger'>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
        </Collapsible>
        <Collapsible trigger="I know what Mechanics are, but what do you mean by the others?" className='Collapsible__trigger'>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
        </Collapsible>
        <Collapsible trigger="I've filled out the tetrad for my class. Now what?" className='Collapsible__trigger'>
          <p>This is the collapsible content. It can be any element or React component you like.</p>
        </Collapsible>
      </div>
      <div id='tetradpng'>
        <img src={tetradpng} alt='tetrad' style={{width: '100%'}}/>

      </div>
    </div>
)

}

export default Tetrad;
