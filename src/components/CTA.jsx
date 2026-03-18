import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const VIDEO = 'https://framerusercontent.com/assets/4dij6gse2esDaYudHyCBtatGQ8.mp4';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-video-wrap">
        <video src={VIDEO} autoPlay muted loop playsInline className="cta-video" />
        <div className="cta-overlay" />
      </div>
      <div className="container cta-content">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Let's Work Together</p>
        <h2 className="cta-heading">
          Whether you need a bold new identity, a sleek website, or creative strategy, Scarlet is here to bring your vision to life.
        </h2>
        <div className="cta-actions">
          <Link to="/contact" className="btn-primary cta-btn">Get in touch</Link>
          <a href="mailto:hello@scarlet.com" className="cta-email">hello@scarlet.com</a>
        </div>
        <div className="cta-socials">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter/X</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
        </div>
      </div>
    </section>
  );
}
