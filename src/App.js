import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AvailableCard from './components/AvailableCard';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <HeroSection/>
        <Routes>
          <Route path="/available" element={<AvailableCard />} />
          <Route path="/product" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
