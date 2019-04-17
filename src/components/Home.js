import React, { Component } from 'react';
import Title from './Title.js';
import NavSwitch from './NavSwitch.js';
import Pitch from './Pitch.js';
import './grids.css';
import Nav from './Nav.js';
import Pacman from './Pacman.js'
import Snake from './Snake.js'
import Tetris from './Tetris.js'

const colors = {
  gray: '#3b3c3d',
  red: '#dd3d27',
  green: '#7fc8a0',
  purple: '#a3509f',
  white: '#fff',
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
      snake: false,
      tetris: false,
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

  playTetris(){
    this.setState({tetris: !this.state.tetris});
  }

  render() {
    return (
          <div className='ninegrid' style={{backgroundColor: this.state.color}}>
            <div id='title'>
              <Title />
            </div>
            <div id='pitch'>
              <Pitch text={this.state.contentUp}/>
            </div>
            <div id='navside'>
              <Nav onHover={(e) => this.onMouseOver(e)} active={this.state.contentUp} />
            </div>
            <div id='pacman'>
              <Pacman playing={this.state.pacman} onClick={() => this.playPacman()} color={this.state.color}/>
            </div>
            <div id='snake'>
              <Snake playing={this.state.snake} onClick={() => this.playSnake()} color={this.state.color}/>
            </div>
            <div id='tetris'>
              <Tetris playing={this.state.tetris} onClick={() => this.playTetris()} color={this.state.color}/>
            </div>
          </div>
    )
  }
}

export default Home;
