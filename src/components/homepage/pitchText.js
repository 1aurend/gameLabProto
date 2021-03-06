import React from 'react';
import { Link } from 'react-router-dom';
import go from '../../assets/go.svg'
import goPurp from '../../assets/goPurple.svg'

const about = (
  <>
    <h5 style={{textAlign:'center'}}>Welcome to gameLab!<br />the Learning Lab’s game design toolbox<br />for teachers</h5>
    <p>So why game design? On one fundamental level, game designers and teachers do the same thing-design experiences. Of course, they design (arguably) different kinds of experiences, but game designers seem to be the most successful experience crafters out there-just look at the market share of games! Thus, we as teachers have a lot to learn from their toolkit for crafting dynamic, challenging experiences, which put users at the center.</p>
    <p>The tools here apply the logic of games to the classroom, not to turn the classroom into a game, but so that we can be intentional about centering experience in our instructional design.</p>
  </>
)


const theMechanics = (
  <>
    <h5 style={{textAlign:'center'}}>The Mechanics</h5>
    <p>Mechanics are the interactions and relationships that make a game a system. They make the game interactive rather than something you just take in. Put simply, mechanics are what make a game work. For this reason, mechanics are the key way teachers can apply the logic of game design to the classroom.</p>
    <p>Use our mechanic inventory to explore implementing game mechanics in your class.</p>
    <div style={{minWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center', paddingTop: '1rem'}}><Link to='/mechanics' style={{height:"1.5rem"}}><img src={go} alt='go!' style={{height: '1.5rem'}}></img></Link></div>
  </>
)


const toolsDemo = (
  <>
    <p>Ready to try out our toolkit? Here are three ways to get started:</p>
    <Link className='pLink' to='/tools/playtest' style={{textAlign:'center'}}><h4>“Playtest” Your Assignment</h4></Link>
    <p>Use these questions to think like a game designer about an already existing assignment or class activity and up the assignment’s XP.</p>
    <Link className='pLink' to='/tools/tetrad' style={{textAlign:'center'}}><h4>The Tetrad</h4></Link>
    <p>Game designer Jesse Schell uses a tetrad to break down games into their component elements. Not surprisingly, analyzing classes using this tetrad leads to key insights about how they work.</p>
    <Link className='pLink' to='/tools/challenges' style={{textAlign:'center'}}><h4>Design Challenges</h4></Link>
    <p>Not sure where to begin? Try out some of the design challenges we used in our seminar for crafting game-infused assignments.</p>
  </>
)


const theSeminar = (
  <>
    <h5 style={{textAlign:'center'}}>The Seminar</h5>
    <p>In Spring 2019, we taught a Bok Seminar for graduate students called Let’s Play! What Games can Teach us about Motivation and Engagement. We used Jesse Schell’s The Art of Game Design as our textbook. (We think it should be required reading for all teachers.) Each week we discussed a different game mechanic or design principle, and participants designed assignments that deployed that mechanic. You can <Link to='/seminar' style={{color: '#fcf5eb', textDecoration: 'underline'}}>view our full syllabus</Link> here.</p>
  </>
)


const examples = (
  <>
    <h5 style={{textAlign:'center'}}>Examples</h5>
    <p>View our curated collection of sample assignments and activities that explicitly incorporate game mechanics to get some ideas!</p>
    <div style={{minWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center', paddingTop: '1rem'}}><Link to='/examples' style={{height:"1.5rem"}}><img src={goPurp} alt='go!' style={{height: '1.5rem'}}></img></Link></div>
  </>
)

    export {
      about,
      theMechanics,
      toolsDemo,
      theSeminar,
      examples
    };
