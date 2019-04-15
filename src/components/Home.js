import React, { Component } from 'react';
import Title from './Title.js';
import NavSwitch from './NavSwitch.js';
import Pitch from './Pitch.js';
import './grids.css';
import Nav from './Nav.js';

const colors = {
  gray: '#3b3c3d',
  red: '#dd3d27',
  green: '#7fc8a0',
  purple: '#a3509f',
  white: '#fff',
  gold: '#e2af3b',
  blue: '#07b6cd'

}

class Home extends Component {

  constructor (props){
    super(props);
    this.state = {
      contentUp: '0',
      color: '#3b3c3d',
    }

    this.onMouseOver = this.onMouseOver.bind(this);

  }

  onMouseOver = (params) => (e) => {
    this.setState({contentUp: params.num, color: params.color});
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
          </div>
    )
  }
}

export default Home;
