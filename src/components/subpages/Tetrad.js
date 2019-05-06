import React from 'react';
import '../grids.css'
import tetrad from '../../assets/color-tetrad-new.png'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import gameLab from '../../assets/dev_subtitle.svg'
import Collapsible from 'react-collapsible'

function Tetrad (props) {

  return(
    <div className="biggrid" style={{backgroundColor: '#30AEA4'}}>

      <div id='mechanicstitle'>
        <div id='titleimg'></div>
        <div className='pageTitle'><h1 style={{color: '#30AEA4'}}>the tetrad</h1></div>
        <div id='subpageDiceNav'>
          <DiceNav path={props.location.pathname}/>
        </div>
      </div>
      
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
          <img src={tetrad} alt='tetrad' style={{width: '100%'}}/>

        </div>
      </div>
)

}

export default Tetrad;
