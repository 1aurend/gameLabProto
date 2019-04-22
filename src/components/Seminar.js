import React from 'react';
import{ Link } from 'react-router-dom';
import './components.css'
import L1Header from './L1Header.js'
import './grids.css'
import syllabus1 from '../assets/letsplay-syllabus-1.png'
import syllabus2 from '../assets/letsplay-syllabus-2.png'
import FancyMenu from './FancyMenu.js'

function Seminar () {

  return(
    <>
      <div className="ninegrid" style={{backgroundColor: '#e2af3b'}}>
        <div id='fancyMenu'>
          <FancyMenu />
        </div>
        <div id='syllabus1'>
          <img src={syllabus1} alt='syllabus page 1' style={{width: '100%', paddingLeft: '0%'}}/>
        </div>
        <div id='syllabus2'>
          <img src={syllabus2} alt='syllabus page 1' style={{width: '100%', paddingLeft: '0%'}}/>
        </div>
      </div>
    </>
)

}

export default Seminar;
