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
      <Route exact path='/mechanics' render={(props) => <MechanicsGrid {...props} mechanic={'mechanics'}/>} />
      <Route exact path='/mechanics/' render={(props) => <MechanicsGrid {...props} mechanic={'mechanics'}/>} />
      <Route path='/mechanics/time' render={(props) => <MechanicsGrid {...props} mechanic={'time'}/>} />
      <Route path='/mechanics/space' render={(props) => <MechanicsGrid {...props} mechanic={'space'}/>} />
      <Route path='/mechanics/chance' render={(props) => <MechanicsGrid {...props} mechanic={'chance'}/>} />
      <Route path='/mechanics/challenge' render={(props) => <MechanicsGrid {...props} mechanic={'challenge'}/>} />
      <Route path='/mechanics/multiplayer' render={(props) => <MechanicsGrid {...props} mechanic={'multiplayer'}/>} />
      <Route path='/mechanics/action' render={(props) => <MechanicsGrid {...props} mechanic={'action'}/>} />
      <Route path='/mechanics/strategy' render={(props) => <MechanicsGrid {...props} mechanic={'strategy'}/>} />
      <Route path='/mechanics/training' render={(props) => <MechanicsGrid {...props} mechanic={'training'}/>} />
      <Route path='/seminar' component={Seminar}/>
      <Route path='/examples' component={Examples}/>
      <Route exact path='/tools' component={ToolsDemo}/>
      <Route path='/tools/playtest' component={Playtest}/>
      <Route path='/tools/tetrad' component={Tetrad}/>
      <Route path='/tools/challenges' component={Playtest}/>
    </Switch>

)

export default NavSwitch;
