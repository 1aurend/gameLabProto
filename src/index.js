import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import NavSwitch from './components/homepage/NavSwitch.js'

render((
  <BrowserRouter>
    <NavSwitch />
  </BrowserRouter>
), document.getElementById('root'));
