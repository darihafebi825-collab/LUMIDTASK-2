import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We collaborate with startups, small businesses, and established brands across various industries. Whether you\'re launching a new venture or refreshing an existing brand, we tailor our designs to fit your unique needs.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary depending on the project\'s scope. Branding projects typically take 2–4 weeks, while web design & development can range from 4–8 weeks. We\'ll provide a clear timeline after discussing your project.',
  },
  {
    q: 'What do you need from me to get started?',
    a: "We'll need details about your business, goals, and any existing branding materials. If you have a vision or inspiration in mind, sharing references helps us align with your expectations.",
  },
  {
    q: 'How many revisions do you offer?',
    a: 'We typically include 2–3 rounds of revisions in our process to fine-tune your project. Additional revisions can be accommodated based on the project scope.',
  },
  {
    q: 'Can I request a custom package?',
    a: "Absolutely! If our standard services don't fit your needs, we can create a custom design package tailored specifically for you.",
  },
  {
    q: 'Can you work with my existing brand guidelines?',
    a: 'Of course! If you already have a brand identity, we ensure all designs align with your existing guidelines while still bringing fresh creativity.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply reach out to us! Send us an email or fill out our contact form, and we\'ll set up a free consultation to discuss your project.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-left">
            <p className="section-label">FAQs</p>
            <h2 className="faq-heading">Frequently Asked Questions.</h2>
            <p className="faq-sub">
              We know every project is unique, and you might have some questions before getting started.
            </p>
            <Link to="/contact" className="btn-outline faq-cta">
              Contact us
            </Link>
          </div>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-icon">{open === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
