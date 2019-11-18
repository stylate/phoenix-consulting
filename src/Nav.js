import React from 'react';
import './Nav.css';
import logo from './phoenixlogo.png';

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-contents">
        <img src={logo} className="Nav-logo" alt="phoenix logo" />
        <nav>
          <ul>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">services</a>
            </li>
            <li>
              <a href="">team</a>
            </li>
            <li>
              <a href="">articles</a>
            </li>
            <li>
              <a href="">join</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
