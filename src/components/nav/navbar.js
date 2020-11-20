import React from 'react';
import './navbar.css';

function Navbar() {
    return (
      <nav className="sticky">
          <ul className="ul-nav">
              <li className="li-nav"><a href="#">Home</a></li>
              <li className="li-nav"><a href="#work">Work</a></li>
              <li className="li-nav"><a href="#contact">Contact</a></li>
          </ul>
      </nav>
    );
  }
  
  export default Navbar;
  