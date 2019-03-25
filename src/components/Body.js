import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Playtest from './Playtest.js';
import Examples from './Examples.js';
import MechanicsRoutes from './Mechanics.js'


const Body = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/mechanics' component={MechanicsRoutes}/>
      <Route path='/playtest' component={Playtest}/>
      <Route path='/examples' component={Examples}/>
    </Switch>
  </main>
)

export default Body;
