import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


import Search from './Search';


function Nav() {
  const state = useSelector(state => state);
  const {cart} = state;
  
  return (
    <div className='navContainer'>
      <Link to='/' className='nav-header'>React Shopr</Link>
      <Search />

      <div className='navLinksWrapper'>
        <Link to='/'>Home</Link>
        <Divider orientation="vertical" flexItem />
        <Link to='/products'>Categories</Link>
        <Divider orientation="vertical" flexItem />
        <Link to='/checkout'>Cart ({cart.length})</Link>

      </div>
    </div>
  )
}

export default Nav