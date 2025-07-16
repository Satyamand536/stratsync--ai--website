import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="4 2"/>
              <circle cx="20" cy="20" r="14" stroke="url(#gradient1)" strokeWidth="1.5"/>
              <path d="M15 12C15 12 18 15 20 20C22 25 25 28 25 28" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M25 28C25 28 22 25 20 20C18 15 15 12 15 12" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round"/>
              <text x="20" y="24" textAnchor="middle" fill="url(#gradient1)" fontSize="12" fontWeight="bold">s</text>
              <circle cx="22" cy="14" r="1" fill="url(#gradient1)"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#006699' }}/>
                  <stop offset="100%" style={{ stopColor: '#009977' }}/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">StratSync</span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li><a href="#demo" className="cta-button" onClick={() => scrollToSection('demo')}>Get Demo</a></li>
        </ul>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 