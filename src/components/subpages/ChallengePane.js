import React from 'react'
import '../mechanics_grid.css'
import schell from '../../assets/Schell.jpg'
import gee from '../../assets/Gee.jpg'
import sylvester from '../../assets/Sylvester.jpg'
import { time, space, chance, challenge, action, training, multiplayer, strategy } from './challengestext.js'

function ChallengePane (props) {

  const propToFullText = {
    'time': time,
    'space': space,
    'chance': chance,
    'challenge': challenge,
    'action': action,
    'training': training,
    'multiplayer': multiplayer,
    'strategy': strategy,
  }
  var fullText = propToFullText[props.mechanic] || 'coming soon!'

  if (props.mechanic === 'challenges') {
    return (
      <>
        <div id='activeMech' style={{color: '#e2af3b'}}>
          {props.mechanic}
        </div>
        <div id='challengetext'>
          <p>If the the Playtesting questions work from an existing assignment to relevant mechanics, these design challenges ask you think in the other direction, from mechanic to class. Click each mechanic for a challenge to create an activity or assignment that deploys that mechanic.</p>
          <p>Many of the design challenges reference chapters of these texts, which we used in our seminar. Check them out!</p>
        </div>
          <div id='schell'>
            <a href='https://www.amazon.com/The-Art-Game-Design-Edition/dp/1466598646' style={{display: 'block'}}><img src={schell} style={{objectFit: 'contain', height: '100%'}}/></a>
          </div>
          <div id='gee'>
            <a href='https://www.amazon.com/Video-Games-Learning-Literacy-Second/dp/1403984530' style={{display: 'block'}}><img src={gee} style={{objectFit: 'contain', height: '100%'}} /></a>
          </div>
          <div id='sylvester'>
            <a href='https://www.amazon.com/Designing-Games-Guide-Engineering-Experiences/dp/1449337937' style={{display: 'block'}}><img src={sylvester} style={{objectFit: 'contain', height: '100%'}}/></a>
          </div>
      </>
    )
  }

  else {
    return (
      <>
        <div id='activeMech' style={{color: '#e2af3b'}}>
          {props.mechanic}
        </div>
        <div id='challengetext'>
          {fullText}
        </div>
      </>
    )
  }



}

export default ChallengePane
