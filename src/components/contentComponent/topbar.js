import React from 'react';

// components
import HambMenu from './hambmenu'
import Logo from '../img/logo.png'

function Topbar() {
  return (
    <div className="Topbar"> 
    	<div class="logo">
				<a href="/">
					<img src={Logo} alt="Logo" />
				</a>
			</div>
      <HambMenu />
    </div>
  ) 
}

export default Topbar;
