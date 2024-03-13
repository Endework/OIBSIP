import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='Hero--section'>
      <div className="Hero--text">
          <h1>Make Your place <br/> a better living</h1>
          <p>Urban crafty furniture with modern, simple and elegant designs for your home</p>
          <button className="btn btn-outline-success bg-success text-dark" type="submit">
    <Link to="/card" className="link">Buy now</Link>
</button>

      </div>
    </div>
  )
}

export default Hero
