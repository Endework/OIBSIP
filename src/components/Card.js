// Card.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import Data from './Data';

function Card({ cart, setCart }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [quantity, setQuantity] = useState(Array(Data.length).fill(1));

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filterCards = (card) => {
    if (selectedFilter === 'All') {
      return true; // Display all cards
    } else {
      return card.tag === selectedFilter;
    }
  };

  const addToCart = (card, index) => {
    setCart(prevCart => [...prevCart, {...card, quantity: quantity[index], totalPrice: quantity[index] * card.price}]);
  };
  

  return (
    <div>
      <div className="container d-flex justify-content-between bg-primary py-3">
      <button className="btn  bg-dark text-light" type="submit">
    <Link to="/" className="link">Home</Link>
</button>
      <div className='navigation'>
  <input type='checkbox' id='all' checked={selectedFilter === 'All'} onChange={() => handleFilterChange('All')} />
  <label htmlFor='all'>All</label>

  <input type='checkbox' id='chair' checked={selectedFilter === 'Chair'} onChange={() => handleFilterChange('Chair')} />
  <label htmlFor='chair'>Chair</label>

  <input type='checkbox' id='bed' checked={selectedFilter === 'Bed'} onChange={() => handleFilterChange('Bed')} />
  <label htmlFor='bed'>Bed</label>

  <input type='checkbox' id='sofa' checked={selectedFilter === 'Sofa'} onChange={() => handleFilterChange('Sofa')} />
  <label htmlFor='sofa'>Sofa</label>

  <input type='checkbox' id='CupBoard' checked={selectedFilter === 'CupBoard'} onChange={() => handleFilterChange('CupBoard')} />
  <label htmlFor='CupBoard'>CupBoard</label>

  <input type='checkbox' id='table' checked={selectedFilter === 'Table'} onChange={() => handleFilterChange('Table')} />
  <label htmlFor='table'>Table</label>
</div>

        <div>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping fs-1 text-dark"></i>
          </Link>
        </div>
      </div>
      <div className='items'>
        <div className='container'>
          <div className='row'>
            {Data.map((card, index) => {
              return (
                filterCards(card) && (
                  <div className='col' key={index}>
                    <div className='card'>
                      <img src={card.image} className='card-img-top' alt={card.tag} />
                      <div className='card-body'>
                        <div className='items--text'>
                          <p className='card-text tag'>{card.tag}</p>
                          <p className='card-text price'>Price ${card.price}</p>
                        </div>
                        <select onChange={(e) => {
                          let newQuantity = [...quantity];
                          newQuantity[index] = Number(e.target.value);
                          setQuantity(newQuantity);
                        }}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                        <button onClick={() => addToCart(card, index)}>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
