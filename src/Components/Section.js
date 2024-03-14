import React from 'react'
import './Section.css'

function Section() {
  return (
    <div>
        
      <section id='sec1'>
        
        <div className='left'>
        <div className='image'>
            <img src={process.env.PUBLIC_URL + '/images/coffee.PNG'} alt=''/>
            </div>
        </div>
        <div className='right'>
    <h3>Coffee shop ☕</h3>
    <p> A fictitious coffee shop website that serves as a testament to my expertise in web development and API integration. This website showcases a diverse coffee menu, populated in real-time using an API to fetch data. </p>
    <div className='links'>
        <p>React</p>
        <p>API</p>
        <p>Bootstrap</p>
        
    </div>
    <div className='external'>
    <a href="https://github.com/Endework/OIBSIP/tree/coffee"><i class="fa-brands fa-github"></i></a>
    <a href="https://coffeenew1.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i></a>
    </div>
        </div>
      </section>
      <section id='sec2'>
        
        <div className='left'>
        <h3>Furniture  App 🪑</h3>
    <p>FurniShop is an e-commerce website for a fictional furniture company. Built with React, the website offers  features like a diverse furniture catalog and a smooth checkout process. Users can easily browse through the extensive range of beautifully designed furniture, filter products based on various criteria.</p>
    <div className='links'>
        <p>React</p>
        <p>Landing page</p>
        <p>Bootstrap</p>
        
    </div>
    <div className='external'>
    <a href="https://github.com/Endework/OIBSIP/tree/ecomm" ><i class="fa-brands fa-github text-dark"></i></a>
    <a href="https://aefurnishers.netlify.app/"><i class="fa-solid fa-up-right-from-square text-dark"></i></a>
    </div>
        </div>
        <div className='right'>
        <div className='image'>
            <img src={process.env.PUBLIC_URL + '/images/ecomm.png'} alt=''/>
            </div>
        </div>
      </section>
    <section id='sec3'>
    <div className='left'>
        <img id='weather' src={process.env.PUBLIC_URL + '/images/weather.png'} alt=''/>
    </div>
    <div className='right'>
    <h3>Weather  App 🌤️ ☁️</h3>
    <p>WeatherApp is a dynamic web application built with React that allows users to get real-time weather updates. By leveraging a weather API, the app provides current weather information for any location searched by the user. </p>
    <div className='links'>
        <p>React</p>
        <p>Landing page</p>
        <p>Bootstrap</p>
        
    </div>
    <div className='external'>
    <a href="https://github.com/Endework/OIBSIP/tree/weather"><i class="fa-brands fa-github"></i></a>
    <a href="https://forcastapp1.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i></a>
    </div>
        </div>
    </section>
    <section id='exp'>
    <h3>Key Expertise</h3>
    <div className='row'>
    <div className='col-6 col-md-4'><p>Web development</p></div>
    <div className='col-6 col-md-4'><p>React</p></div>
    <div className='col-6 col-md-4'><p>Bootstrap</p></div>
</div>
<div className='row'>
    <div className='col-6 col-md-4'><p>JavaScript</p></div>
    <div className='col-6 col-md-4'><p>Github</p></div>
    <div className='col-6 col-md-4'><p>Vs Code</p></div>
</div>

    </section>
     <section id='desc'>
    <div className='image'>
        <img src={process.env.PUBLIC_URL + '/images/comp.jpg'} alt=''/>
    </div>
    <div className='text'>
        <h5>Who am I</h5>
    <p>Hailing from the vibrant city of Addis Ababa, Ethiopia, I am a passionate individual who finds joy in the realms of coding and design. My leisure time is often spent exploring culinary arts, where I express my creativity through the medium of cooking. Beyond these interests, I am a professional web developer, dedicated to crafting user-friendly interfaces and immersive online experiences. As a woman in tech, I am proud to contribute to the dynamic and ever-evolving world of technology.</p>
    </div>
     </section>
     <section id='ask'>
<h3>Do you have a question ?</h3>
<p>You can find me via</p>
<div className='info'>
    <div className="image"><img id='profile' src={process.env.PUBLIC_URL + '/images/profile.png'} alt=''/></div>
    <div className="contact">
        <h5>Endework Abera</h5>
        <p>endework99@gmail.com</p>
    </div>
    <div className='buttons'>
        <a href="https://www.linkedin.com/in/endeworkabera/"><button>Linkedin</button></a>
        <a href="https://github.com/Endework"><button>Github</button></a>
    </div>
</div>
     </section>
    </div>
  )
}

export default Section
