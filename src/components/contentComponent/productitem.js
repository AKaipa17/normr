import React from 'react';

const ProductItem = (props) => {
  return (
    <div className="ProductItem"> 
			<a href="/" className="product-link">
				<img className="product-img" src={props.imgURL} alt="/" />
			</a>
			<div className="product-info">
				<a href="/" className="product-name">
						<h3 className="title">{props.name}</h3>
				</a>
				<div className="price">
					<span className="prod-price">{props.price}</span>
				</div>
			</div>
    </div>
  ) 
}

export default ProductItem;
