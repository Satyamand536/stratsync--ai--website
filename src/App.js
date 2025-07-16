import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #006699 0%, #009977 100%)',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>
            <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" strokeDasharray="4 2"/>
              <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="1.5"/>
              <path d="M15 12C15 12 18 15 20 20C22 25 25 28 25 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M25 28C25 28 22 25 20 20C18 15 15 12 15 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <text x="20" y="24" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">s</text>
              <circle cx="22" cy="14" r="1" fill="white"/>
            </svg>
          </div>
          <div>StratSync.ai</div>
          <div style={{ fontSize: '1rem', marginTop: '0.5rem', opacity: 0.8 }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App; 