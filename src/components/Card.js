import React, {useState} from 'react'
import './Card.css'
import data from './data'

function Card() {
  const [stars, setStars] = useState(data.map(() => false)) // Initialize an array of booleans

  function toggleStar(index) {
    const newStars = [...stars]; 
    newStars[index] = !newStars[index]; 
    setStars(newStars);
    
  }
  
  return (
    <>
      <div className="container" style={{borderBottomLeftRadius:'30px', borderBottomRightRadius:'30px'}}>
        <div className="row">
          {data.map((item, index) =>
            <div key={index} className="col-sm-4">
              <div className='card'>
                <img className='card--image' src={item.image} alt='capputino coffee'/>
                <div className="card--text">
                  <div className="card--title--price">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                  </div>
                  <div className="star">
                    <div class="left">
                      <img src={stars[index] ? './images/star_fill.svg' : './images/star.svg'} alt='' onClick={() => toggleStar(index)}/>
                      <p>{item.rating} <span>({item.votes})</span></p>
                    </div>
                    <p className='status' style={{display:item.available? 'none':'block'}}>Sold Out</p>
                  </div>
                </div>
                <p className='card--tag' style={{display: item.popular ? 'block': 'none'}}>Popular</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Card
