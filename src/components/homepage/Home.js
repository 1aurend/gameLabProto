import React, { Component } from 'react';
import Title from './Title.js';
import NavSwitch from './NavSwitch.js';
import Pitch from './Pitch.js';
import '../grids.css';
import '../backgrounds.css'
import { Link } from 'react-router-dom'
import Pacman from '../games/Pacman.js'
import NavSimp from './Nav_simplified.js'
import egg from '../../assets/egg.svg'


const colors = {
  gray: '#3b3c3d',
  red: '#dd3d27',
  green: '#7fc8a0',
  purple: '#a3509f',
  white: '#fcf5eb',
  gold: '#e2af3b',
  blue: '#30AEA4'
}

class Home extends Component {

  constructor (props){
    super(props);
    this.state = {
      contentUp: '0',
      color: '#3b3c3d',
      pacman: false,
    }

    this.onMouseOver = this.onMouseOver.bind(this);

  }



  onMouseOver = (params) => (e) => {
    this.setState({contentUp: params.num, color: params.color});
  }

  playPacman(){
    this.setState({pacman: !this.state.pacman});
  }

  playSnake(){
    this.setState({snake: !this.state.snake});
  }


  render() {

    let latch = ('8px solid ' + this.state.color)
    let opening = ('3px solid ' + this.state.color)
    console.log(latch);

    return (
          <div className='ninegrid' style={{backgroundColor: this.state.color}}>
            <div id='boxhandle'></div>
            <div id='hometile'>
              <div id='boxopening' style={{borderBottom: opening}}>
                <div id='boxlatch' style={{border: latch}}></div>
              </div>
              <div id='hometitle'>
                <Link to='/'><div id='titleimg'></div></Link>
                <div className='pageTitle'><Link to='/'><h1 style={{color: this.state.color}}>the toolbox</h1></Link></div>
              </div>
              <div id='pitch'>
                <div style={{color: this.state.color}}><Pitch text={this.state.contentUp}/></div>
              </div>
            </div>
            <div id='navside'>
              <NavSimp onHover={(e) => this.onMouseOver(e)} active={this.state.contentUp} />
            </div>
            <div id='pacmantile'>
              <div style={{position: 'absolute'}}>
                <Pacman playing={this.state.pacman} onClick={() => this.playPacman()} />
              </div>
            </div>
            <div id='dotsleftbendrightdown2'></div>
            <div id='dotsrightstrip3'></div>
          </div>
    )
  }
}

export default Home;
