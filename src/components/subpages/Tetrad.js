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
          <p>Decide which class or assignment you want to analyze. Then, brainstorm as many things as you can that fit each category. We recommended using color coded cards or post-its to keep things organized. Don’t worry if some things seem to fit more than one category: Arranging furniture may be a mechanic and also an aesthetic choice.</p>
        </Collapsible>
        <Collapsible trigger="I'm stuck on..." className='Collapsible__trigger'>
          <Collapsible trigger="Aesthetics" className='Collapsible__trigger'>
            <p>What does your classroom look like? Do you ever use color in meaningful ways? What does your classroom sound like? What are the aesthetics of the things your students produce?</p>
          </Collapsible>
          <Collapsible trigger="Story" className='Collapsible__trigger'>
            <p>What’s the narrative structure of your class content? What kinds of explanations and narratives will students create?</p>
          </Collapsible>
          <Collapsible trigger="Technology" className='Collapsible__trigger'>
            <p>Does your classroom use any literal tech? A projector? Laptops? Other tools? What about “low tech” materials, like pens, paper, and whiteboards?</p>
          </Collapsible>
        </Collapsible>
        <Collapsible trigger="I've filled my tetrad: Now what?" className='Collapsible__trigger'>
          <p>Start with your immediate observations. Does any one category outweigh the others? Does this make sense in the context of your class? Next you might ask: What’s significant about the items that fit more than one category? Do you see strong interactions between, say, the mechanics and aesthetics of your classroom? How would modifying one impact the other? Did the process of making the tetrad lead to any new insights about or perspectives on your class?</p>
        </Collapsible>
      </div>
      <div id='tetradpng'>
        <img src={tetradpng} alt='tetrad' style={{width: '100%'}}/>

      </div>
    </div>
)

}

export default Tetrad;
