import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: 99,
    features: [
      'Up to 1,000 customers',
      'Basic churn predictions',
      'Email alerts',
      'Standard support'
    ],
    featured: false,
    btn: 'Get Started'
  },
  {
    name: 'Professional',
    price: 299,
    features: [
      'Up to 10,000 customers',
      'Advanced AI predictions',
      'Real-time dashboards',
      'Automated campaigns',
      'Priority support'
    ],
    featured: true,
    btn: 'Get Started',
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 999,
    features: [
      'Unlimited customers',
      'Custom AI models',
      'API access',
      'Dedicated support',
      'Custom integrations'
    ],
    featured: false,
    btn: 'Contact Sales'
  }
];

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="container">
      <div className="section-header">
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your business needs</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div className={`pricing-card${plan.featured ? ' featured' : ''}`} key={i}>
            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
            <div className="pricing-header">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="pricing-features">
              {plan.features.map((f, idx) => (
                <li key={idx}><i className="fas fa-check"></i> {f}</li>
              ))}
            </ul>
            <button className={`pricing-btn${plan.featured ? ' featured' : ''}`}>{plan.btn}</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing; 