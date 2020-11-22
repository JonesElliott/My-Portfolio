import React from 'react';
import './navbar.css';

function Navbar() {
    return (
      <nav className="sticky">
          <ul className="ul-nav">
              <li className="li-nav"><a href="#">Home</a></li>
              <li className="li-nav"><a href="#work">Projects</a></li>
              <li className="li-nav"><a href="#contact">Contact</a></li>
              <li className="li-nav"><a href="https://github.com/JonesElliott" target="_blank"><i class="fab fa-github"></i></a></li>
              <li className="li-nav"><a href="https://twitter.com/MrPotatoCode" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
              <li className="li-nav"><a href="https://www.linkedin.com/in/elliott-jones-0006a586/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
              <li className="li-nav"><a href="./react-portfolio/assets/ElliottJones-Resume.pdf" target="_blank"><i class="fas fa-file"></i></a></li>
              {/* <li className="li-nav"><a href="./assets/ElliottJones-Resume.pdf" target="_blank"><i class="fas fa-file"></i></a></li> */}
          </ul>
      </nav>
    );
  }
  
  export default Navbar;
  