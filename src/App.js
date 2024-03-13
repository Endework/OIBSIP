import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Section from './Components/Section';
import Privacy from './Components/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isPrivacyPage = location.pathname === '/privacy';

  return (
    <div className="App">
      {!isPrivacyPage && <Nav/>}
      <Routes>
        <Route path="/" element={<><Hero/><Section/></>} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {!isPrivacyPage && <Footer/>}
    </div>
  );
}

export default App;
