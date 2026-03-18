import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 2000,
    yearlyPrice: 1500,
    desc: 'For startups & small businesses needing consistent designs.',
    features: [
      '10 design requests/month',
      'Social Media & Marketing Assets',
      'Conceptual sketches and mood boards',
      '2 Revisions per request',
      '5-day turnaround per request',
      'Pause or cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    monthlyPrice: 4500,
    yearlyPrice: 3375,
    desc: 'For growing brands that need a steady flow of creative assets.',
    features: [
      'Unlimited design requests',
      'Web & UI/UX Design',
      'Motion Graphics & Animations',
      'Priority Support',
      '3-day turnaround per request',
      'Pause or cancel anytime',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    monthlyPrice: 6500,
    yearlyPrice: 4875,
    desc: 'For businesses that demand premium, high-volume design solutions.',
    features: [
      'Unlimited design & revisions',
      'Web, Branding & Motion Design',
      'Custom Illustrations & 3D Graphics',
      '1:1 Creative Strategy Sessions',
      '24–48 hour turnaround',
      'Pause or cancel anytime',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <p className="section-label">Pricing</p>
          <h2 className="pricing-heading">Pricing Plans.</h2>
          <p className="pricing-sub">
            We offer flexible subscription-based design plans, giving you unlimited access to premium creative services.
          </p>

          <div className="billing-toggle">
            <button
              className={`toggle-btn ${!yearly ? 'active' : ''}`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${yearly ? 'active' : ''}`}
              onClick={() => setYearly(true)}
            >
              Yearly
              <span className="save-badge">Save 25%</span>
            </button>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-tag">Most popular</span>}
              <div className="plan-top">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-currency">$</span>
                  <span className="price-value">
                    {yearly
                      ? plan.yearlyPrice.toLocaleString()
                      : plan.monthlyPrice.toLocaleString()}
                  </span>
                  <span className="price-period">/month</span>
                </div>
                {yearly && (
                  <p className="yearly-note">
                    Billed as ${(plan.yearlyPrice * 12).toLocaleString()}/year
                  </p>
                )}
                <p className="plan-desc">{plan.desc}</p>
                <Link to="/contact" className={plan.popular ? 'btn-primary plan-cta' : 'btn-outline plan-cta'}>
                  Get started
                </Link>
              </div>

              <div className="plan-divider" />

              <ul className="plan-features">
                <p className="features-label">What's included:</p>
                {plan.features.map((f) => (
                  <li key={f} className="plan-feature">
                    <span className="feat-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
