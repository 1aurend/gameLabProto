import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Playtest from '../subpages/Playtest.js';
import Examples from '../subpages/Examples.js';
import Seminar from '../subpages/Seminar.js';
import MechanicsGrid from '../mechanics/MechanicsGrid.js';
import Home from './Home.js'
import ToolsDemo from '../subpages/ToolsDemo.js'
import Tetrad from '../subpages/Tetrad.js'


const NavSwitch = () => (

    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/mechanics' component={MechanicsGrid}/>
      <Route path='/seminar' component={Seminar}/>
      <Route path='/examples' component={Examples}/>
      <Route exact path='/tools' component={ToolsDemo}/>
      <Route path='/tools/playtest' component={Playtest}/>
      <Route path='/tools/tetrad' component={Tetrad}/>
      <Route path='/tools/challenges' component={Playtest}/>
    </Switch>

)

export default NavSwitch;
