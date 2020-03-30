import React from 'react';

// components
import Search from './search'
import Nav from './nav'
import Options from './options'

function Menu() {
  return (
    <div className="Menu"> 
			<Search />
			<Nav />
			<Options />
    </div>
  ) 
}

export default Menu;
