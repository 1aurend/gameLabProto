import React, { Component } from 'react'
import '../mechanics_grid.css'
import mechanicsList from './mechanicslist.js'
import { Link } from 'react-router-dom'


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


function CenterPane (props) {

  let contentUp = findMechanic(props.mechanic);

  const movesLinks = contentUp.moves ? contentUp.moves.map((move) => <h5 className='movesLinksText' onClick={props.onClick(move)}> &nbsp;&nbsp;&nbsp;&nbsp;<span>{move}</span></h5> ) : 'coming soon!'
  const movesInText = contentUp.moves ? contentUp.moves.map((move) => <li>{move}</li>) : 'coming soon!'
  const effects = contentUp.why ? contentUp.why.map((effect) => <li>{effect}</li>) : 'coming soon!'

  if (props.mechanic === 'mechanics') {
    return (
    <>
      <div id='movesLinks'>
        {movesLinks}
      </div>
      <div id='activeMech'>
        {contentUp.name}
      </div>
      <div id="centertext">
        <p>{contentUp.pitch}</p>
      </div>
    </>
    )
  }

  else if (!props.move && props.mechanic != 'mechanics') {

    return (
    <>
      <div id='movesLinks'>
        {movesLinks}
      </div>
      <div id='activeMech'>
        {contentUp.name}
      </div>
      <div id="centertext">
        <h5>The Pitch</h5>
        <p>{contentUp.pitch}</p>
        <h5>What is it?</h5>
        <p>{contentUp.what}</p>
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
        {props.move}
      </div>
      <div id="centertext">
        <h5>What is it?</h5>
        <p>{contentUp.pitch}</p>
        <h5>What can it do and how?</h5>
        <p>{contentUp.what}</p>
        <h5>Examples</h5>
        <ul>{effects}</ul>
        <h5>How do I deploy it?</h5>
        <ul>{movesInText}</ul>
      </div>
    </>
    )
  }
}



export default CenterPane;
