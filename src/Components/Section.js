import React from 'react'
import './Section.css'

function Section() {
  return (
    <div>
      <section id='sec1'>
        <div className='left'>
        <div className='image'>
            <img src='/' alt=''/>
            </div>
        </div>
        <div className='right'>
    <h3>Bank Modern App</h3>
    <p>Modern landing page for a fictitious bank based on a Figma mockup. I used React, TailwindCSS, and made use of the Framer Motion library to insert smooth animations.</p>
    <div className='links'>
        <p>React</p>
        <p>Landing page</p>
        <p>TailwindCSS</p>
        
    </div>
    <div className='external'>
    <i class="fa-brands fa-github"></i>
    <i class="fa-solid fa-up-right-from-square"></i>
    </div>
        </div>
      </section>
      <section id='sec2'>
        
        <div className='left'>
    <h3>Bank Modern App</h3>
    <p>Modern landing page for a fictitious bank based on a Figma mockup. I used React, TailwindCSS, and made use of the Framer Motion library to insert smooth animations.</p>
    <div className='links'>
        <p>React</p>
        <p>Landing page</p>
        <p>TailwindCSS</p>
        
    </div>
    <div className='external'>
    <i class="fa-brands fa-github"></i>
    <i class="fa-solid fa-up-right-from-square"></i>
    </div>
        </div>
        <div className='right'>
        <div className='image'>
            <img src='/' alt=''/>
            </div>
        </div>
      </section>
    <section id='sec3'>
    <div className='left'>
        <img src='/' alt=''/>
    </div>
    <div className='right'>
    <h3>Bank Modern App</h3>
    <p>Modern landing page for a fictitious bank based on a Figma mockup. I used React, TailwindCSS, and made use of the Framer Motion library to insert smooth animations.</p>
    <div className='links'>
        <p>React</p>
        <p>Landing page</p>
        <p>TailwindCSS</p>
        
    </div>
    <div className='external'>
    <i class="fa-brands fa-github"></i>
    <i class="fa-solid fa-up-right-from-square"></i>
    </div>
        </div>
    </section>
    <section id='exp'>
    <h3>Key Expertise</h3>
    <div className='row'>
        <div className='col'><p>Web development</p></div>
        <div className='col'><p>React</p></div>
        <div className='col'><p>Bootstrap</p></div>
    </div>
    <div className='row'>
    <div className='col'><p>JavaScript</p></div>
    <div className='col'><p>Github</p></div>
    <div className='col'><p>Vs Code</p></div>
    
    </div>
    </section>
     <section id='desc'>
    <div className='image'>
        <img src='/' alt=''/>
    </div>
    <div className='text'>
        <h5>Who am I</h5>
    <p>Hello! I'm Emanuele (Delmo for my friends), I'm interested in and study computer science in my free time and not.

Almost Doctor in Computer Engineering at "La Sapienza" in Rome, a few years ago I decided to put myself to the test by creating digital content and from that moment I realized that I could combine business with pleasure and start a path as a Web Developer.

In addition to my passion for innovation, I have always had a passion for music. I've been playing drums for over 10 years but now I'm just playing drums.</p>
    </div>
     </section>
     <section id='ask'>
<h3>Do you have a question</h3>
<p>You can find me via</p>
<div className='info'>
    <img src='/' alt=''/>
    <div className="contact">
        <h5>Endework Abera</h5>
        <p>info@endeowrk.com</p>
    </div>
    <div className='buttons'>
        <button>Linkedin</button>
        <button>Github</button>
    </div>
</div>
     </section>
    </div>
  )
}

export default Section
