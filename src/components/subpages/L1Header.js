import React from 'react';
import '../grids.css';
import devsub from '../../assets/dev_subtitle.svg'
import { Link } from 'react-router-dom'
import die1 from '../../assets/dice_1.svg'


function L1Header () {
  return (
    <>
      <div className='subNavTitle'>
        <img src={devsub} alt='subtitle' />
      </div>
      <div className='subNavHome'>
        <img src={die1} alt='dice1' className="navDice" style={{maxHeight: '4vh'}} />
        <Link className="subNavText" to='/'>home</Link>
      </div>
    </>
  )

}

export default L1Header;
