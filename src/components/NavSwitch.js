import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Playtest from './Playtest.js';
import Examples from './Examples.js';
import Seminar from './Seminar.js';
import MechanicsRoutes from './Mechanics.js';


const NavSwitch = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Nav}/>
      <Route path='/mechanics' component={MechanicsRoutes}/>
      <Route path='/playtest' component={Playtest}/>
      <Route path='/examples' component={Seminar}/>
      <Route path='/examples' component={Examples}/>
    </Switch>
  </main>
)

export default NavSwitch;
