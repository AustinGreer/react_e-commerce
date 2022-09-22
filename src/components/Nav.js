import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav-container'>
      <Link to='/' className='nav-header'>React Shopr</Link>

      <div id='nav-links-wrapper'>
        <Link to='/products'>Products</Link>
        <Link to='/checkout'>Cart</Link>
      </div>
    </div>
  )
}

export default Nav