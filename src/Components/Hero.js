import React from 'react';
import useTypewriter from 'react-typewriter-hook';
import './Hero.css'

function MagicWriter({ tag, text }) {
  const Typing = useTypewriter(text);
  const Tag = tag;
  return <Tag>{Typing}</Tag>;
}

function Hero() {
  return (
    <div className='hero-section' id='hero'>
      <MagicWriter tag='h1' text='Welcome! 😊' />
      <MagicWriter tag='h3' text="I'm Endework Abera." />
      <MagicWriter tag='h4' text='A Junior Web developer.' />
      <MagicWriter tag='h5' text='Graduated with Electrical and Computer engineering.' />
      {/* <div className='buttons'>
        <button>Linkedin</button>
        <button>Github</button>
        <button>Gmail</button>
      </div> */}
    </div> 
  )
}

export default Hero;
