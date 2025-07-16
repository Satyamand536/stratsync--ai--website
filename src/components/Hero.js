import React from 'react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Revenue Retention</span>
          <br />Copilot for Modern SaaS
        </h1>
        <p className="hero-description">
          StratSync.ai uses advanced AI to predict and prevent customer churn, helping you retain revenue and grow your business with intelligent insights.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">
            <span>Start Free Trial</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="secondary-btn">
            <i className="fas fa-play"></i>
            <span>Watch Demo</span>
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">95%</span>
            <span className="stat-label">Accuracy Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">40%</span>
            <span className="stat-label">Churn Reduction</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Companies</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="dashboard-preview">
          <div className="dashboard-header">
            <div className="dashboard-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="dashboard-content">
            <div className="chart-container">
              <div className="chart-bar" style={{ height: '60%' }}></div>
              <div className="chart-bar" style={{ height: '80%' }}></div>
              <div className="chart-bar" style={{ height: '45%' }}></div>
              <div className="chart-bar" style={{ height: '90%' }}></div>
              <div className="chart-bar" style={{ height: '70%' }}></div>
            </div>
            <div className="metrics">
              <div className="metric">
                <span className="metric-label">Retention Rate</span>
                <span className="metric-value">94.2%</span>
              </div>
              <div className="metric">
                <span className="metric-label">Risk Score</span>
                <span className="metric-value low-risk">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 