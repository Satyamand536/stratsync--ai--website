import React from 'react';

const features = [
  {
    icon: 'fas fa-brain',
    title: 'AI-Powered Predictions',
    desc: 'Our machine learning algorithms analyze customer behavior patterns to predict churn risk with 95% accuracy.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Real-time Analytics',
    desc: 'Monitor customer health scores and retention metrics in real-time with intuitive dashboards.'
  },
  {
    icon: 'fas fa-bell',
    title: 'Smart Alerts',
    desc: 'Get instant notifications when customers show signs of churn, allowing proactive intervention.'
  },
  {
    icon: 'fas fa-users',
    title: 'Customer Segmentation',
    desc: 'Automatically segment customers based on behavior, usage patterns, and risk factors.'
  },
  {
    icon: 'fas fa-robot',
    title: 'Automated Actions',
    desc: 'Trigger personalized retention campaigns and interventions based on AI recommendations.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Data Security',
    desc: 'Enterprise-grade security with SOC 2 compliance and end-to-end encryption.'
  }
];

const Features = () => (
  <section id="features" className="features">
    <div className="container">
      <div className="section-header">
        <h2>Why Choose StratSync.ai?</h2>
        <p>Advanced AI-powered insights to transform your customer retention strategy</p>
      </div>
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">
              <i className={f.icon}></i>
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features; 