import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <hr/>
      <div className='bottom'>
        <li className='nav-link'>
          <Link to="/">Home</Link>
        </li>
        <li className='nav-link'>
          <Link to="/privacy">Privacy</Link>
        </li>
      </div>
    </div>
  )
}

export default Footer;
