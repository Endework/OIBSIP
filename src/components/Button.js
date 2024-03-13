import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css';

function Button() {
  
  return (
    <div className='button'>
      <NavLink to='/product' activeClassName='active'>
        <button className='product'>All Products</button>
      </NavLink>
      
      <NavLink to="/available" activeClassName='active'>
        <button className='available'>Available Now</button>
      </NavLink>
    </div>
  );
}

export default Button;
