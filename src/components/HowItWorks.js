import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Connect Your Data',
    desc: 'Integrate with your existing CRM, analytics, and customer data platforms in minutes.'
  },
  {
    number: 2,
    title: 'AI Analysis',
    desc: 'Our AI analyzes customer behavior patterns and identifies at-risk customers.'
  },
  {
    number: 3,
    title: 'Take Action',
    desc: 'Receive actionable insights and automated recommendations to retain customers.'
  }
];

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <div className="section-header">
        <h2>How StratSync Works</h2>
        <p>Three simple steps to transform your retention strategy</p>
      </div>
      <div className="steps-container">
        {steps.map((step, i) => (
          <React.Fragment key={step.number}>
            <div className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="step-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks; 