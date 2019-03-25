import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
        <button className="button">
          <Link className="buttonLink" to='/mechanics'>Mechanics</Link>
        </button>
        <button className="button">
          <Link className="buttonLink" to='/playtest'>Playtest</Link>
        </button>
        <button className="button">
          <Link className="buttonLink" to='/examples'>Examples</Link>
        </button>
      </div>
  );
}


export default Home;
