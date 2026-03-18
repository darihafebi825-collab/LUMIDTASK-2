import React from 'react';
import { Link } from 'react-router-dom';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We start by understanding your goals, audience, and vision. Through in-depth research and strategy sessions, we lay the foundation for a powerful design.',
  },
  {
    num: '02',
    title: 'Concept & Design',
    desc: "With insights in place, we craft initial concepts, exploring bold and creative directions that align with your brand's identity and objectives.",
  },
  {
    num: '03',
    title: 'Development & Execution',
    desc: "Once the design is perfected, we bring it to life, whether it's a website, brand identity, or motion graphics, ensuring high performance and flawless execution.",
  },
  {
    num: '04',
    title: 'Launch & Optimization',
    desc: 'We ensure a smooth launch. Plus, we provide ongoing support, optimizations, and guidance to keep your brand at its best.',
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-container">

        {/* Left — sticky */}
        <div className="process-left">
          <p className="process-label">
            <span className="process-dot" />
            Our process
          </p>

          <h2 className="process-heading">
            <span className="heading-bold">
              We believe in a streamlined, collaborative approach{' '}
            </span>
            <span className="heading-light">
              that brings your vision to life, efficiently and effectively.
            </span>
          </h2>

          <Link to="/contact" className="process-cta">
            Let's get started ↗
          </Link>
        </div>

        {/* Right — stacked cards */}
        <div className="process-right">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-card-header">
                <span className="step-num">{step.num}.</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}