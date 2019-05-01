import React, { Component } from 'react'
import '../mechanics_grid.css'
import mechanicsList from './mechanicslist_clean.js'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Collapsible from 'react-collapsible'


function findMechanic (name) {
  for (var i = 0; i < mechanicsList.length; i++) {
    if (name === mechanicsList[i].name) {
      return mechanicsList[i];
    }
  }
  return ({
    name: 'coming soon!',
    pitch: "Mechanics are the interactions and relationships that make a game a system. Mechanics are what make a game interactive rather than entertainment you just take in. Put simply, mechanics are what make a game work. For this reason, designing with mechanics in mind is the key way teachers can apply the logic of game design to the classroom.",
  })
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


  const movesLinks = mechUp.moves ? movesColors.map((move) => <h5 className='movesLinksText' onClick={props.onClick(move.name)} key={move.name} style={{color: move.color}}> &nbsp;&nbsp;&nbsp;&nbsp;<span>{move.name}</span></h5> ) : 'coming soon!'

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
        <p>{mechUp.go}</p>
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
        {mechUp.name}
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

  else if (props.move) {

    return (
    <>
      <div id='movesLinks'>
        {movesLinks}
      </div>
      <div id='activeMech'>
        {props.mechanic}
      </div>
      <div id="centertext">
        <h5>What is it?</h5>
        <p>{moveUp.what}</p>
        <h5>What can it do and how?</h5>
          {effects}
        {/*<h5 style={{paddingTop: '10px'}}>Examples</h5>
        <ul>
          {examples}
        </ul>*/}
      </div>
    </>
    )
  }
}



export default withRouter(CenterPane);
