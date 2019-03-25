import React from 'react';
import{ Link, Switch, Route } from 'react-router-dom';
import './components.css';
// import Page from './MovePage.js'
import MechanicsGrid from './MechanicsGrid.js'


function Moves(props) {

  const moves = props.moves
  console.log(moves);
  console.log(JSON.stringify(props));

  return (
    <div>
    {
      moves.map(move => (
          <button className="button" key={move}>
              <Link className="buttonLink" to={`${props.location.pathname}/${move}`}>{move}</Link>
          </button>
          ))
        }
    </div>
  )

}


export default Moves;
