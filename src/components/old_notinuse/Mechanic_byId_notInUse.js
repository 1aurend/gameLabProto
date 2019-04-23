import React from 'react';
import{ Link } from 'react-router-dom';
import './components.css'
import mechanicsList from '../mechanicslist.js'


console.log(JSON.stringify(mechanicsList));

function findMechanic (number) {
  for (var i = 0; i < mechanicsList.length; i++) {
    if (number === mechanicsList[i].id) {
      return mechanicsList[i];
    }
  }
};

function Mechanic(props) {

  console.log(JSON.stringify(props));

  const number = parseInt(props.match.params.id, 10);
  console.log(number);

  const mechanic = findMechanic(number);
  const width = "500px"

  console.log(JSON.stringify(mechanic));

  if (!mechanic) {
    return <h2>Are you sure that's a mechanic??</h2>
  }
  return (
    <div>
      <h2>{mechanic.name}</h2>
      <img src={mechanic.image} width={width} alt={mechanic.imgalt} />
      <button className="button">
        <Link className="buttonLink" to='/mechanics'>Back to List</Link>
      </button>
    </div>
  );
}

export default Mechanic;
