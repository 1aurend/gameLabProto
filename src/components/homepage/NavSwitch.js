import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Playtest from '../subpages/Playtest.js';
import Examples from '../subpages/Examples.js';
import Seminar from '../subpages/Seminar.js';
import MechanicsGrid from '../mechanics/MechanicsGrid.js';
import Home from './Home.js'


const NavSwitch = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/mechanics' component={MechanicsGrid}/>
      <Route path='/playtest' component={Playtest}/>
      <Route path='/seminar' component={Seminar}/>
      <Route path='/examples' component={Examples}/>
    </Switch>

)

export default NavSwitch;
