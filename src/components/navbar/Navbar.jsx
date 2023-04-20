import React from 'react';
import './Navbar.scss';

export default function Navbar () {
  return (
    <nav className="navbar__container">
        <div className="navbar__logo">
            S
        </div>
        <ul className="navbar__navlist">
            <li className="navbar__navItem">
                <a href="#home" className="navbar__navlink">HOME</a>
            </li>
            <li className="navbar__navItem">
                <a href="#about" className="navbar__navlink">ABOUT</a>
            </li>
            <li className="navbar__navItem">
                <a href="#projects" className="navbar__navlink">PROJECTS</a>
            </li>
            <li className="navbar__navItem">
                <a href="#contact" className="navbar__navlink">CONTACT</a>
            </li>
        </ul>
        <div className="navbar__burger">
            <div className="navbar__dash"></div>
            <div className="navbar__dash"></div>
            <div className="navbar__dash"></div>
        </div>
    </nav>
  )
}
