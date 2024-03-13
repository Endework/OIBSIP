import React from 'react'
import './HeroSection.css'
import Button from './Button'
import Card from './Card'

function HeroSection() {
  return (
    <div className="container" style={ {borderTopRightRadius:'30px', borderTopLeftRadius:'30px'}}>
      <div className='hero'>
      <div className='hero--text'>
        <h1>Our Collection</h1>
        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
      </div>
      <Button/>
      <Card/>
      </div>
    </div>
    
  )
}

export default HeroSection
