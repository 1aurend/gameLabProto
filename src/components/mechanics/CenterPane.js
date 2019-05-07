import React, { Component } from 'react'
import '../mechanics_grid.css'
import mechanicsList from './mechanicslist_clean.js'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Collapsible from 'react-collapsible'
import wipsvg from '../../assets/wip_gold.svg'


function findMechanic (name) {
  for (var i = 0; i < mechanicsList.length; i++) {
    if (name === mechanicsList[i].name) {
      return mechanicsList[i];
    }
  }
}

function findMove (mech, move) {
  for (var i = 0; i < mechanicsList.length; i++) {
    if (mech === mechanicsList[i].name) {
      for (var j = 0; j < mechanicsList[i].moves.length; j++) {
        if (move === mechanicsList[i].moves[j].name) {
          return mechanicsList[i].moves[j];
        }
      }
    }
  }
  return ({
    name: 'coming soon!',
    what: '',
    effects: '',
    examples: '',
  })
}


function CenterPane (props) {

  let mechUp = findMechanic(props.mechanic)
  let moveUp = props.move ? findMove(props.mechanic, props.move) : false

  if (mechUp === undefined) {
    return <></>
  }

  let movesColors = []
  if (props.mechanic !== 'mechanics' && mechUp.moves) {
    for (var i = 0; i < mechUp.moves.length; i++) {
      if (mechUp.moves[i].name === props.move) {
        let move =
        {
          name: mechUp.moves[i].name,
          color: '#e2af3b',
        }
        movesColors.push(move)
      }
      else {
        let move =
        {
          name: mechUp.moves[i].name,
          color: '#7fc8a0',
        }
        movesColors.push(move)
      }
    }
  }


  const movesLinks = mechUp.moves ? movesColors.map((move) => <h5 className='movesLinksText' onClick={props.onClick(move.name)} key={move.name} style={{color: move.color}}><span>{move.name}</span></h5> ) : 'coming soon!'

  const effects = moveUp.effects ? moveUp.effects.map((effect) =>
    <Collapsible trigger={effect.what} className='Collapsible__trigger' key={effect.what}>
      <ul>
      {effect.how.map((how) => <li key={how}>{how}</li>)}
      </ul>
    </Collapsible>)
     : 'coming soon!'

  const examples = moveUp.examples ? moveUp.examples.map((example) => <li key={example}>{example}</li>) : 'coming soon!'


  if (props.mechanic === 'mechanics') {
    return (
    <>
      <div id='activeMech'>
        {mechUp.name}
      </div>
      <div id="landingtext">
        <p>{mechUp.pitch}</p>
        <p>{mechUp.structure}</p>
        <p>{mechUp.go} <Link to='/tools/challenges' style={{color: '#7fc8a0'}}>design challenges!</Link></p>
      </div>
    </>
    )
  }

  else if (!props.move && props.mechanic !== 'mechanics') {

    return (
    <>
      <div id='movesLinks'>
        {movesLinks}
      </div>
      <div id='activeMech'>
        {props.mechanic}
      </div>
      <div id="centertext">
        <h5>The Pitch</h5>
        <p>{mechUp.pitch}</p>
        <h5>What is it?</h5>
        <p>{mechUp.what}</p>
      </div>
    </>
    )
  }

  else if (props.move && effects !== 'coming soon!') {

    return (
    <>
      <div id='movesLinks'>
        {movesLinks}
      </div>
      <div id='activeMech'>
        <Link to={'/mechanics/' + mechUp.name} onClick={props.onClick(false)}>{mechUp.name}</Link>
      </div>
      <div id="centertext">
        <h5>What is it?</h5>
        <p>{moveUp.what}</p>
        <h5>What can it do and how?</h5>
          {effects}
      </div>
    </>
    )
  }

  else if (props.move && effects === 'coming soon!') {

    return (
    <>
      <div id='movesLinks'>
        {movesLinks}
      </div>
      <div id='activeMech'>
        <Link to={'/mechanics/' + mechUp.name} onClick={props.onClick(false)}>{mechUp.name}</Link>
      </div>
      <div id="centertext">
        <img src={wipsvg} alt="under construction" style={{height: '100px'}}></img>
      </div>
    </>
    )
  }
}



export default withRouter(CenterPane);
