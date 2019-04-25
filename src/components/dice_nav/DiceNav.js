import './dice_nav.scss';
import './../grids.css'
import React, { Component } from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import die1 from '../../assets/dice_1.svg'
import die2 from '../../assets/dice_2.svg';
import die3 from '../../assets/dice_3.svg';
import die4 from '../../assets/dice_4.svg';
import die5 from '../../assets/dice_5.svg';
import { Link } from 'react-router-dom'




class DiceNav extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
      path: '',
    }

    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      active: !this.state.active
    });
  }

  componentDidMount() {
    this.setState({
      path: this.props.path
    });
  }

  render() {
    let leftDice;
    let rightDice;
    let tooltipLeftDice;
    let tooltipRightDice;
    let leftDiceLinks;
    let rightDiceLinks;
    let reMech = /^\/mechanics/
    let reTools = /^\/tools/
    let reSem = /^\/seminar/
    let reEx = /^\/examples/

    console.log('here is path: ' + this.props.path);

    if (reSem.test(this.props.path) || reTools.test(this.props.path) || reEx.test(this.props.path)) {
      leftDice = [die1, die2]
      tooltipLeftDice = ['start', 'mechanics']
      leftDiceLinks = ['/', '/mechanics']
    }
    else if (reMech.test(this.props.path)) {
      leftDice = [die1, die3]
      tooltipLeftDice = ['start', 'seminar']
      leftDiceLinks = ['/', '/seminar']
    }

    if (reSem.test(this.props.path) || reMech.test(this.props.path)) {
      rightDice = [die4, die5]
      tooltipRightDice = ['tools', 'examples']
      rightDiceLinks = ['/tools', '/examples']
    }
    else if (reTools.test(this.props.path)) {
      rightDice = [die3, die5]
      tooltipRightDice = ['seminar', 'examples']
      rightDiceLinks = ['/seminar', '/examples']
    }
    else if (reEx.test(this.props.path) ) {
      rightDice = [die3, die4]
      tooltipRightDice = ['seminar', 'tools']
      rightDiceLinks = ['/seminar', '/tools']
    }

    var centerColor = this.state.active ? {backgroundColor: '#fcf5eb'} : {backgroundColor: '#fcf5eb'}
    console.log(centerColor);
    console.log(leftDice);


    return (
      <div className="container">
        <ButtonGroup>
          <StaggeredMotion
            defaultStyles={[
              { x: -45, o: 0 },
              { x: -45, o: 0 },
            ]}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === prevInterpolatedStyles.length - 1
                ? {
                  x: spring(this.state.active ? 0 : -45, { stiffness: 330, damping: 20 }),
                  o: spring(this.state.active ? 1 : 0, { stiffness: 330, damping: 20 }),
                } : {
                  x: spring(prevInterpolatedStyles[i + 1].x, { stiffness: 330, damping: 20 }),
                  o: spring(prevInterpolatedStyles[i + 1].o, { stiffness: 330, damping: 20 }),
                };
            })}
          >
            {interpolatingStyles =>
              <ButtonGroup>
                {interpolatingStyles.map((style, i) =>
                  <Button
                    key={i}
                    style={{
                      position: 'relative',
                      right: style.x,
                      opacity: style.o,
                      pointerEvents: this.state.active ? 'auto' : 'none',
                    }}
                  >
                    <Tooltip text={tooltipLeftDice[i]} />
                      <Link to={leftDiceLinks[i]} style={{height: '100%', width: '100%', display: 'block'}}>
                        <img src={leftDice[i]} alt="dice" style={{height: '40px', width: '40px', margin: '0px'}} />
                      </Link>
                 </Button>
                )}
              </ButtonGroup>
            }
          </StaggeredMotion>

          <Motion
            defaultStyle={{ s: 0.675 }}
            style={{ s: spring(this.state.active ? 1 : 0.675, { stiffness: 330, damping: 14 }) }}
          >
            {interpolatingStyles =>
              <Button
                className="button--large"
                onClick={this._onClick}
                style={{
                  transform: 'scale(' + interpolatingStyles.s + ')'
                }}
                style={centerColor}
              >
                <span className={this.state.active ? 'icon active' : 'icon'} />
              </Button>
            }
          </Motion>

          <StaggeredMotion
            defaultStyles={[
              { x: -45, o: 0 },
              { x: -45, o: 0 },
            ]}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {
                  x: spring(this.state.active ? 0 : -45, { stiffness: 330, damping: 20 }),
                  o: spring(this.state.active ? 1 : 0, { stiffness: 330, damping: 20 }),
                } : {
                  x: spring(prevInterpolatedStyles[i - 1].x, { stiffness: 330, damping: 20 }),
                  o: spring(prevInterpolatedStyles[i - 1].o, { stiffness: 330, damping: 20 }),
                };
            })}
          >
            {interpolatingStyles =>
              <ButtonGroup>
                {interpolatingStyles.map((style, i) =>
                  <Button
                    key={i}
                    style={{
                      position: 'relative',
                      left: style.x,
                      opacity: style.o,
                      pointerEvents: this.state.active ? 'auto' : 'none',
                    }}
                  >
                    <Tooltip text={tooltipRightDice[i]} />
                    <Link to={rightDiceLinks[i]} style={{height: '100%', width: '100%', display: 'block'}}>
                      <img src={rightDice[i]} alt="dice" style={{height: '40px', width: '40px', margin: '0px'}} />
                    </Link>
                  </Button>
                )}
              </ButtonGroup>
            }
          </StaggeredMotion>
        </ButtonGroup>
      </div>
    );
  }
}


const Tooltip = (props) => <span className="tooltip">{props.text}</span>;

const ButtonGroup = (props) => <div className="button-group" style={props.style}>{props.children}</div>;

const Button = (props) => <button className='button' style={props.style} onClick={props.onClick}>{props.children}</button>;



export default DiceNav;
