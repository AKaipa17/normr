import React from 'react';

function Search() {
  return (
    <div className="Search">
			<form action="#">
				<button type="submit" className="searchButton">	
					<i className="fa fa-search"></i>
				</button>
				<input type="text" className="searchTerm" placeholder="SEARCH HERE..." />
			</form>
		</div>

  ) 
}

export default Search;
