import React from 'react';
import{ Link, Switch, Route } from 'react-router-dom';
import './components.css';
import MechanicsGrid from './MechanicsGrid';
import Mechanic from './Mechanic'

function MechanicsRoutes(props) {

  console.log(JSON.stringify(props.match));
  
  return (
    <Switch>
      <Route exact path='/mechanics' component={MechanicsGrid}/>
      <Route path='/mechanics/:id' component={Mechanic}/>
    </Switch>
  );
}

export default MechanicsRoutes;
