import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Nav.css';

function Nav() {
  return (
    <div>
      <nav>
        <li className='nav-logo nav-link'>
          <a href='/' ><img src='/' alt=''/></a>
        </li>
        <li className='nav-link'>
          <ScrollLink to="sec1" smooth={true}>Project</ScrollLink>
        </li>
        <li className='nav-link'>
          <ScrollLink to="desc" smooth={true}>About Me</ScrollLink>
        </li>
        <li className='nav-link'>
          <ScrollLink to="ask" smooth={true}>Contact me</ScrollLink>
        </li>
      </nav>
    </div>
  )
}

export default Nav;
