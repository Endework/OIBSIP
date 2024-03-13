import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Section from './components/Section';
import Card from './components/Card'; // Import the Card component
import Cart from './components/Cart'; // Import the Cart component
import Data from './components/Data'; // Import the Data

function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(Array(Data.length).fill(1)); // Define quantity here
  
  const addToCart = (card, index) => {
    setCart(prevCart => [...prevCart, {...card, quantity: quantity[index]}]);
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((item, i) => i !== index));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  

  return (
    <Router>
      <Routes>
      <Route path="/card" element={<Card cart={cart} setCart={setCart} addToCart={addToCart} quantity={quantity} setQuantity={setQuantity} />} />

        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} getTotalPrice={getTotalPrice} />} />
        <Route path="/" element={
          <div className="App">
            <Nav/>
            <Hero/>
            <Section/>
            <Footer/>
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
