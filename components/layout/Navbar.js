import React from 'react';
import Hamburger from './Hamburger';

export default function Navbar({ isHome }) {
  return (
    <nav className={`navbar ${isHome ? 'isHome' : ''}`}>
      <div className="innerNav">
        <div className="logo">FreshVegs</div>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">content</a>
          </li>
        </ul>
        <Hamburger />
      </div>
    </nav>
  );
}
