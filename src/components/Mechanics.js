import React from 'react';
import{ Link, Switch, Route } from 'react-router-dom';
import './components.css';
import MechanicsGrid from './MechanicsGrid';
import mechanicsList from '../mechanicslist.js'
import Moves from './Moves.js'
import Page from './MovePage.js'


// console.log(JSON.stringify(mechanicsList));

function findMechanic (name) {
  for (var i = 0; i < mechanicsList.length; i++) {
    if (name === mechanicsList[i].name) {
      return mechanicsList[i];
    }
  }
};

function Mechanic(props) {

  console.log(JSON.stringify(props));

  const name = props.match.path.split("/")[2]
  console.log(name);

  const mechanic = findMechanic(name);
  const width = "300px"

  console.log(JSON.stringify(mechanic));

  if (!mechanic) {
    return <h2>Are you sure that's a mechanic??</h2>
  }
  return (
    <div>
      <h2>{mechanic.name}</h2>
      <h4>What is it?</h4>
      <p>{mechanic.what}</p>
      <h4>The Pitch</h4>
      <p>{mechanic.pitch}</p>
      <h4>Moves</h4>
      <Moves {...props} moves={mechanic.moves}/>
      <img src={mechanic.image} width={width} alt={mechanic.imgalt} style={{padding: '20px'}} />
        <div style={{padding: '20px'}}>
          <button className="button">
            <Link className="buttonLink" to='/mechanics'>Back to List</Link>
          </button>
        </div>
    </div>
  );
}


function MechanicsRoutes(props) {

  console.log(JSON.stringify(props));
  const level = props.location.pathname.split("/");
  console.log(level);
  let nestedPath;

  if (level.length === 4) {
    nestedPath = <Route path={props.location.pathname} component={Page}/>
  }
  else {
    nestedPath = <Route path={props.location.pathname} component={Mechanic}/>
  }

    return (
      <Switch>
        <Route exact path='/mechanics' component={MechanicsGrid}/>
        {nestedPath}
      </Switch>
    );


}


export default MechanicsRoutes;
