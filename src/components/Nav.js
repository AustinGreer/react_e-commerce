import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

import Search from './Search';


function Nav() {
  const state = useSelector(state => state);
  const {cart} = state;
  const [showCategories, setShowCategories] = useState(false);
  
  return (
    <div className='navContainer'>
      <Link to='/' className='nav-header'>React Shopr</Link>
      <Search />

      <div className='navLinksWrapper'>
        <Link to='/' className='navItem'>Home</Link>
        <Divider orientation="vertical" flexItem />
        <Link to='/products' className='navItem'>Categories</Link>
        <Divider orientation="vertical" flexItem />
        <Link to='/checkout' className='navItem'>Cart ({cart.length})</Link>

      </div>
    </div>
  )
}

export default Nav