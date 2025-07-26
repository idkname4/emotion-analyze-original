import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import EmotionDetector from './EmotionDetector';
import About from './About';
import HowItWorks from './HowItWorks';
import Privacy from './Privacy';
import Terms from './Terms';

// Navigation component
const Navigation = () => {
  const location = useLocation();
  
  const navStyle = {
    background: '#1976d2',
    padding: '15px 20px',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const navContainer = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white'
  };

  const navLinks = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap'
  };

  const linkStyle = (isActive) => ({
    textDecoration: 'none',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
    backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'transparent'
  });

  return (
    <nav style={navStyle}>
      <div style={navContainer}>
        <Link to="/" style={logoStyle}>
          Emotion Music App
        </Link>
        <ul style={navLinks}>
          <li>
            <Link to="/" style={linkStyle(location.pathname === '/')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle(location.pathname === '/about')}>
              About
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" style={linkStyle(location.pathname === '/how-it-works')}>
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/privacy" style={linkStyle(location.pathname === '/privacy')}>
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" style={linkStyle(location.pathname === '/terms')}>
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Footer component
const Footer = () => {
  const footerStyle = {
    background: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto',
    borderTop: '1px solid #ddd'
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: '0', color: '#666' }}>
        © 2024 Emotion-Based Music Recommender. All rights reserved.
      </p>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="App" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Navigation />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<EmotionDetector />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
