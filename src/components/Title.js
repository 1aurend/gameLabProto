import React from 'react';
import './components.css';
import './grids.css';
import titleimg from '../assets/title.svg'

function Title() {
  return (
    <div>
      <img src={titleimg} alt='title'/>
    </div>
  )
}

// const Header = () => <h1>gameLab</h1>;

export default Title;
