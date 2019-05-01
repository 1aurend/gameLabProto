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

      <Route exact path='/mechanics' render={(props) => <MechanicsGrid {...props} mechanic={'mechanics'} backgroundColor={'#dd3d27'}/>} />
      <Route exact path='/mechanics/' render={(props) => <MechanicsGrid {...props} mechanic={'mechanics'} backgroundColor={'#dd3d27'}/>} />

      <Route path='/mechanics/time' render={(props) => <MechanicsGrid {...props} mechanic={'time'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/space' render={(props) => <MechanicsGrid {...props} mechanic={'space'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/chance' render={(props) => <MechanicsGrid {...props} mechanic={'chance'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/challenge' render={(props) => <MechanicsGrid {...props} mechanic={'challenge'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/multiplayer' render={(props) => <MechanicsGrid {...props} mechanic={'multiplayer'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/action' render={(props) => <MechanicsGrid {...props} mechanic={'action'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/strategy' render={(props) => <MechanicsGrid {...props} mechanic={'strategy'} backgroundColor={'#dd3d27'}/>} />
      <Route path='/mechanics/training' render={(props) => <MechanicsGrid {...props} mechanic={'training'} backgroundColor={'#dd3d27'}/>} />

      <Route path='/seminar' component={Seminar}/>
      <Route path='/examples' component={Examples}/>
      <Route exact path='/tools' component={ToolsDemo}/>
      <Route path='/tools/playtest' component={Playtest}/>
      <Route path='/tools/tetrad' component={Tetrad}/>

      <Route exact path='/tools/challenges' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'challenges'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/time' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'time'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/space' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'space'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/chance' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'chance'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/action' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'action'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/challenge' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'challenge'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/strategy' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'strategy'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/multiplayer' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'multiplayer'} backgroundColor={'#30AEA4'}/>}/>
      <Route path='/tools/challenges/training' render={(props) => <MechanicsGrid {...props} dChallenges={true} mechanic={'training'} backgroundColor={'#30AEA4'}/>}/>

    </Switch>

)

export default NavSwitch;
