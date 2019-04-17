import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'

function MechanicsGrid() {
  return (
    <div>
      <h2>Mechanics</h2>
      <div>
      <div className="wrapper">
        <button className="one">
          <Link className="links" to='/mechanics/time'>Time</Link>
        </button>
        <button className="two">
          <Link className="links" to='/mechanics/space'>Space</Link>
        </button>
        <button className="three">
          <Link className="links" to='/mechanics/chance'>Chance</Link>
        </button>
        <button className="four">
          <Link className="links" to='/mechanics/chance'>Action</Link>
        </button>
        <button className="five">
          <Link className="links" to='/mechanics/chance'>Risk</Link>
        </button>
        <button className="six">
          <Link className="links" to='/mechanics/chance'>Challenge</Link>
        </button>
        <button className="seven">
          <Link className="links" to='/mechanics/chance'>Training</Link>
        </button>
        <button className="eight">
          <Link className="links" to='/mechanics/chance'>Strategy</Link>
        </button>
        <button className="nine">
          <Link className="links" to='/mechanics/chance'>Role-Play</Link>
        </button>
      </div>
      <div style={{padding: "10px"}}>
        <button className="button">
          <Link className="buttonLink" to='/'>Home</Link>
        </button>
      </div>
  </div>
</div>
  );
}

export default MechanicsGrid;
