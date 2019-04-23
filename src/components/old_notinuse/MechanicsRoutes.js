import React from 'react';
import{ Link, Switch, Route } from 'react-router-dom';
import './components.css';
import Mechanics from './MechanicsGrid';
import Mechanic from './Mechanics.js'
import mechanicsList from '../mechanicslist.js'


function MechanicsRoutes(props) {

  console.log(JSON.stringify(props));

  return (
    <Switch>
      <Route exact path='/mechanics' component={Mechanics}/>
      <Route path={props.location.pathname} render={(props) => <Mechanic {...props}/>} />
    </Switch>
  );

}


export default MechanicsRoutes;



function MovesRoutes(props) {

  console.log(JSON.stringify(props));
  const root = props.match.path.split("/")[2]

  return (
    <Switch>
      <Route exact path={`/mechanics/${root}`} component={MechanicsGrid}/>
      <Route path={props.location.pathname} component={Page}/>
    </Switch>
  );

}

}
else if (level.length === 3) {
  return (
    <Switch>
      <Route exact path='/mechanics' component={MechanicsGrid}/>
      <Route path={props.location.pathname} component={Page}/>
    </Switch>
  );
}
else {
  return (
    <Switch>
      <Route exact path='/mechanics' component={MechanicsGrid}/>
    </Switch>
  )
}
