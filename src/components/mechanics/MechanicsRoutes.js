import React from 'react';
import{ Link, Switch, Route } from 'react-router-dom';
import MechanicsGrid from './MechanicsGrid';
import mechanicsList from './mechanicslist.js'
import Moves from './Moves.js'
import Page from './MovePage.js'
import Mechanic from './Mechanic.js'



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
