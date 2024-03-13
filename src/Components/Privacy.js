import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

function Privacy() {
  return (
    <div className='privacy'>
        <div className='home'>
          <li className='nav-link'>
            <Link to="/">Home</Link>
          </li>
        </div>
        <h2 className='text-center'>Privacy Statement</h2>
      <p className='text-justify'>I deeply respect and prioritize the privacy of my clients. Please be assured that any personal information shared will be used solely for the purpose of our direct communication. I am committed to maintaining the confidentiality of your information and will not utilize it for any other purposes. Your trust is of utmost importance to me, and I am dedicated to safeguarding your personal details. Feel confident that your information is secure and treated with the highest level of respect and discretion.</p>
    </div>
  )
}

export default Privacy;
