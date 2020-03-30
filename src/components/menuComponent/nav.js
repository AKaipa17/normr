import React from 'react';

function Nav() {
  return (
    <div className="Nav">
    <nav className="nav-names">
      <ul className="nav-content">
        <li className="nav-list">
          <a href="/" className="nav-item">Prints</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-item">T-shirts</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-item">Hoodies</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-item">Jackets</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-item">Dresses</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-item">Tops</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-item">Coats</a>
        </li>
      </ul>
    </nav>
    <nav className="nav-counter">
      <ul className="nav-content">
        <li className="nav-list">
          <a href="/" className="nav-counter">(4)</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-counter">(4)</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-counter">(4)</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-counter">(2)</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-counter">(1)</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-counter">(1)</a>
        </li>
        <li className="nav-list">
          <a href="/" className="nav-counter">(3)</a>
        </li>
      </ul>
    </nav>
    </div>
  ) 
}

export default Nav;
