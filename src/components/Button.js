import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button() {
  
  return (
    <div className='button'>
      <Link to ='/product'>
      <button className='product'>All Products</button>
      </Link>
      
      <Link to="/available">
        <button className='available' >Available Now</button>
      </Link>
    </div>
  );
}

export default Button;
