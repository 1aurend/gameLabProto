import React, { Component } from 'react';
import '../grids.css'
import DiceNav from '../dice_nav/DiceNav.js'
import '../subpages.css'
import '../backgrounds.css'
import wipsvg from '../../assets/wip.svg'
import Signature from '../games/Signature.js'
import gameLab from '../../assets/dev_subtitle.svg'
import { Link } from 'react-router-dom'

import ThumbArgumentReconstruction from '../../assets/Examples/Example_ArgumentReconstruction.png'
import ThumbChanceinMusicTheory from '../../assets/Examples/Example_ChanceinMusicTheory.png'
import ThumbDesigningLanguageGames from '../../assets/Examples/Example_DesigningLanguageGames.png'
import ThumbEcologyInfographics from '../../assets/Examples/Example_EcologyInfographics.png'
import ThumbForeignLanguageforBusiness from '../../assets/Examples/Example_ForeignLanguageforBusiness.png'
import ThumbLeveledWritingPrompts from '../../assets/Examples/Example_LeveledWritingPrompts.png'
import ThumbPausesinDiscussion from '../../assets/Examples/Example_PausesinDiscussion.png'
import ThumbRolePlayinLifeSciences from '../../assets/Examples/Example_RolePlayinLifeSciences.png'
import ThumbSpatialBrainstorming from '../../assets/Examples/Example_SpatialBrainstorming.png'
import ThumbTimeWalkthrough from '../../assets/Examples/Example_TimeWalkthrough.png'


class Examples extends Component {

  constructor (){
    super();
    this.state = {
      signature: false,
    }
  }

  showSignature(){
    this.setState({signature: !this.state.signature});
  }


  render (){

      return(
        <div className="biggrid" style={{backgroundColor: '#a3509f'}}>

          <div id='mechanicstitle'>
            <Link to='/'><div id='titleimg'></div></Link>
            <div className='pageTitle'><Link to='/examples'><h1 style={{color: '#a3509f'}}>examples</h1></Link></div>
            <div id='subpageDiceNav'>
              <DiceNav path={this.props.location.pathname}/>
            </div>
          </div>

          <div id='dotsleftbenddownleft0'></div>
          <div id='dotsrightbenddownright'></div>
          <div id='signaturetile'>
            <div style={{position: 'absolute'}}>
              <Signature playing={this.state.signature} onClick={() => this.showSignature()} />
            </div>
          </div>
            <div id='exampleBlurb'>
              <div style={{minWidth:'100%', margin: '1rem 0', display:'flex', flexDirection:'row', justifyContent:'center'}}><img src={wipsvg} alt='under construction' style={{height: '2rem'}}></img></div>
              <p>We’re curating a collection of assignments and class activities that explicitly incorporate game mechanics. While our collection is still under construction, here are some samples of assignment prompts at various stages of development.</p>
            </div>
            <div id='exampleSet'>
              <div class='exampleTile'>
                <a href='../Examples/Example_ArgumentReconstruction.pdf'><h6 style={{display:'block',textAlign:'center'}}>Argument Reconstruction</h6><img src={ ThumbArgumentReconstruction }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_ChanceinMusicTheory.pdf'><h6 style={{display:'block',textAlign:'center'}}>Chance in Music Theory</h6><img src={ ThumbChanceinMusicTheory }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_DesigningLanguageGames.pdf'><h6 style={{display:'block',textAlign:'center'}}>Designing Language Games</h6><img src={ ThumbDesigningLanguageGames }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_EcologyInfographics.pdf'><h6 style={{display:'block',textAlign:'center'}}>Ecology Infographics</h6><img src={ ThumbEcologyInfographics }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_ForeignLanguageforBusiness.pdf'><h6 style={{display:'block',textAlign:'center'}}>Foreign Language for Business</h6><img src={ ThumbForeignLanguageforBusiness }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_LeveledWritingPrompts.pdf'><h6 style={{display:'block',textAlign:'center'}}>Leveled Writing Prompts</h6><img src={ ThumbLeveledWritingPrompts }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_PausesinDiscussion.pdf'><h6 style={{display:'block',textAlign:'center'}}>Pauses in Discussion</h6><img src={ ThumbPausesinDiscussion }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_RolePlayinLifeSciences.pdf'><h6 style={{display:'block',textAlign:'center'}}>Role Play in Life Sciences</h6><img src={ ThumbRolePlayinLifeSciences }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_SpatialBrainstorming.pdf'><h6 style={{display:'block',textAlign:'center'}}>Spatial Brainstorming</h6><img src={ ThumbSpatialBrainstorming }/></a>
              </div>
              <div class='exampleTile'>
                <a href='../Examples/Example_TimeWalkthrough.pdf'><h6 style={{display:'block',textAlign:'center'}}>Time Walkthrough</h6><img src={ ThumbTimeWalkthrough }/></a>
              </div>
            </div>
          </div>
      )
  }
}


export default Examples;
