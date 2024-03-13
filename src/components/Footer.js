import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='row'>
        <div className='col'>
            <p>AE Furnishers</p>
        </div>
        <div className='col link'>
            <a href='/'>Home</a>
            
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col'>
            <p>AE@p limited</p>
        </div>
        <div className='col'>
            <p>privacy</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
