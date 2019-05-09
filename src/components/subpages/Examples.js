import React from 'react';
import '../grids.css'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'
import wipsvg from '../../assets/wip.svg'

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
          <p>We’re curating a collection of assignments and class activities that explicitly incorporate game mechanics. While our collection is still under construction, here are some samples of assignment prompts at various stages of development.</p>
          <div style={{minWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}><img src={wipsvg} alt='under construction' style={{height: '2rem'}}></img></div>
        </div>
      </div>
)

}


export default Examples;
