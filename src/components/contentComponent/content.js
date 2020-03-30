import React from 'react';

// components
import Topbar from './topbar'
import ProductList from './productlist'

function Content() {
  return (
    <div className="ContentWrapper"> 
			<Topbar />
			<ProductList />
    </div>
  ) 
}

export default Content;
