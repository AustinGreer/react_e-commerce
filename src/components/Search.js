import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className='searchWrapper'>
        <input 
          type="text"
          placeholder="Search for products..."
          name="search"
          className="searchInput"
        />
        <button className="searchSubmit"><SearchIcon fontSize='large' /></button>
      </div>
  )
}

export default Search