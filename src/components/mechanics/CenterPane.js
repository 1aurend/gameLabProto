import React from 'react'
import '../mechanics_grid.css'
import mechanicsList from './mechanicslist.js'


function findMechanic (name) {
  for (var i = 0; i < mechanicsList.length; i++) {
    if (name === mechanicsList[i].name) {
      return mechanicsList[i];
    }
  }
};


function CenterPane(props){

  console.log('getting here now');
  let pathSplit = props.location.pathname.split('/')
  let mechanic = findMechanic(pathSplit[(pathSplit.length-1)])
  console.log(mechanic);

  const movesLinks = mechanic.moves.map((move) => <h5>&nbsp;&nbsp;&nbsp;&nbsp;<span>{move}</span></h5> )



  return (
  <>
    <div id='movesLinks'>
      {movesLinks}
    </div>
    <div id='activeMech'>
      {mechanic.name}
    </div>
    <div id="centertext">
      <p>{mechanic.pitch}</p>
    </div>
  </>
  )

}

export default CenterPane;
