import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav.js';
import Playtest from './Playtest.js';
import Examples from './Examples.js';
import Seminar from './Seminar.js';
import MechanicsRoutes from './Mechanics.js';
import Home from './Home.js'


const NavSwitch = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/mechanics' component={MechanicsRoutes}/>
      <Route path='/playtest' component={Playtest}/>
      <Route path='/examples' component={Seminar}/>
      <Route path='/examples' component={Examples}/>
    </Switch>

)

export default NavSwitch;
