import React from 'react';

// components
import ProductItem from './productitem'

function ProductList() {
  return (
    <div className="ProductList"> 
      <div className="product-row"> 
        <ProductItem imgURL="/" name="Product-name-1" price="$120" />
      </div>
    </div>
  ) 
}

export default ProductList;
