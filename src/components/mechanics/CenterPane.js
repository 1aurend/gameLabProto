import React from 'react'
import '../mechanics_grid.css'


function CenterPane(props){

  console.log('getting here now');
  let pathSplit = props.location.pathname.split('/')
  let mechanic = pathSplit[(pathSplit.length-1)]

  return (
  <>
    <div id='movesLinks'>
      <h5>moves links here...</h5>
    </div>
    <div id='activeMech'>
      {mechanic}
    </div>
    <div id="centertext">
      <p>Mechanics are the interactions and relationships that make a game a system. Mechanics are what make a game interactive rather than entertainment you just take in. Put simply, mechanics are what make a game work. For this reason, designing with mechanics in mind is the key way teachers can apply the logic of game design to the classroom.</p>
      <p>Use our mechanic inventory to explore implementing game mechanics in your class.</p>
    </div>
  </>
  )

}

export default CenterPane;
