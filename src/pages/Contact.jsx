import React, { useState } from 'react';
import './Contact.css';

const faqs = [
  { q: 'What types of businesses do you work with?', a: 'We work with startups, scale-ups, and established brands across all industries — from tech to fashion to hospitality.' },
  { q: 'How long does a typical project take?', a: 'Most branding projects take 4–8 weeks. Web design and development projects range from 6–16 weeks depending on scope.' },
  { q: 'What do you need from me to get started?', a: 'A brief overview of your project, goals, timeline, and budget. We\'ll handle the rest in our discovery call.' },
  { q: 'How many revisions do you offer?', a: 'All packages include at least two rounds of revisions. Additional revisions can be added to any project.' },
  { q: 'Can I request a custom package?', a: 'Absolutely. We build custom scopes for clients with unique needs — just reach out and we\'ll put something together.' },
  { q: 'Can you work with my existing brand guidelines?', a: 'Yes. We\'re happy to work within established brand systems or help you evolve them.' },
  { q: 'How do I get started?', a: 'Fill out the contact form on this page or email us directly at hello@scarlet.com. We respond within 24 hours.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main className="cp-page">

      {/* ── CONTACT SECTION ── */}
      <section className="cp-section">
        <div className="cp-wrap">

          {/* LEFT */}
          <div className="cp-left">
            <p className="cp-label"><span className="cp-dot" />Contact us</p>
            <h1 className="cp-title">
              Get in <span className="cp-title-muted">Touch.</span>
            </h1>
            <p className="cp-desc">
              We know every project is unique, and you might
              have some questions before getting started.
            </p>

            <div className="cp-contact-block">
              <a href="mailto:hello@scarlet.com" className="cp-email">hello@scarlet.com</a>
              <a href="tel:+1234567890" className="cp-phone">(123) 456-7890</a>
            </div>

            <div className="cp-rule" />

            <div className="cp-address-block">
              <p className="cp-info-label">Address:</p>
              <p className="cp-info-val">123 Street, Metropolis, State, ZIP</p>
            </div>

            <div className="cp-rule" />

            <div className="cp-socials">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter/x</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="cp-right">
            {sent ? (
              <div className="cp-success">
                <div className="cp-success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="cp-resend">Send another</button>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="cp-field">
                  <label htmlFor="name">Name*</label>
                  <input id="name" name="name" type="text" placeholder="John"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="cp-field">
                  <label htmlFor="email">Email*</label>
                  <input id="email" name="email" type="email" placeholder="contact@gmail.com"
                    value={form.email} onChange={handleChange} required />
                </div>
                <div className="cp-field">
                  <label htmlFor="message">Message*</label>
                  <textarea id="message" name="message" rows={7}
                    placeholder="Project inquiry..."
                    value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="cp-submit">Send Message</button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="cp-faq-section">
        <div className="cp-wrap">

          {/* LEFT */}
          <div className="cp-left">
            <p className="cp-label"><span className="cp-dot" />FAQs</p>
            <h2 className="cp-faq-title">
              Frequently Asked<br />
              <span className="cp-title-muted">Questions.</span>
            </h2>
            <p className="cp-desc">
              We know every project is unique, and you might
              have some questions before getting started.
            </p>
          </div>

          {/* RIGHT — ACCORDION */}
          <div className="cp-right">
            <div className="cp-accordion">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className={`cp-acc-item${openFaq === i ? ' open' : ''}`}
                >
                  <button
                    className="cp-acc-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <svg
                      className="cp-acc-icon"
                      width="18" height="18" viewBox="0 0 18 18" fill="none"
                    >
                      <path d="M4 6.5L9 11.5L14 6.5"
                        stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="cp-acc-a">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}