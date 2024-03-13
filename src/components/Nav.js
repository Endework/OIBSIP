import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Nav.css'

function Nav() {
  return (
    <div className='Navigation'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <ScrollLink className="navbar-brand" to="home" smooth={true}>AE Furnishers</ScrollLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <ScrollLink className="nav-link active" to="home" smooth={true}>Home</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="about" smooth={true}>About Us</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="product" smooth={true}>Products</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="join" smooth={true}>Contact</ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
