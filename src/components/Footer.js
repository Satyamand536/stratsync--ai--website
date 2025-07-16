import React from 'react';

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="logo-icon small">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="13" stroke="url(#gradient2)" strokeWidth="1.5" strokeDasharray="3 1.5"/>
                <circle cx="15" cy="15" r="10" stroke="url(#gradient2)" strokeWidth="1"/>
                <path d="M11 9C11 9 13.5 11.25 15 15C16.5 18.75 18.75 21 18.75 21" stroke="url(#gradient2)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M18.75 21C18.75 21 16.5 18.75 15 15C13.5 11.25 11 9 11 9" stroke="url(#gradient2)" strokeWidth="1.5" strokeLinecap="round"/>
                <text x="15" y="18" textAnchor="middle" fill="url(#gradient2)" fontSize="9" fontWeight="bold">s</text>
                <circle cx="16.5" cy="10.5" r="0.75" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#006699"/>
                    <stop offset="100%" stopColor="#009977"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>StratSync</span>
          </div>
          <p>AI-powered revenue retention platform helping SaaS companies reduce churn and grow revenue.</p>
        </div>
        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 StratSync.ai. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 