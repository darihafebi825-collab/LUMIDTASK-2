import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const CTA_VIDEO = 'https://framerusercontent.com/assets/4dij6gse2esDaYudHyCBtatGQ8.mp4';

export default function Footer() {
  const [email, setEmail] = useState('');
  const headingRef = useRef(null);
  const wordmarkRef = useRef(null);

  useEffect(() => {
    function fitText(el) {
      if (!el || !el.parentElement) return;
      const container = el.parentElement;
      let lo = 10, hi = 700, mid;
      while (lo < hi - 1) {
        mid = Math.floor((lo + hi) / 2);
        el.style.fontSize = mid + 'px';
        if (el.scrollWidth <= container.clientWidth) lo = mid;
        else hi = mid;
      }
      el.style.fontSize = lo + 'px';
    }

    const run = () => {
      fitText(headingRef.current);
      fitText(wordmarkRef.current);
    };

    const t = setTimeout(run, 50);
    const ro = new ResizeObserver(run);
    if (headingRef.current?.parentElement) ro.observe(headingRef.current.parentElement);
    if (wordmarkRef.current?.parentElement) ro.observe(wordmarkRef.current.parentElement);
    return () => { clearTimeout(t); ro.disconnect(); };
  }, []);

  return (
    <footer className="footer">

      {/* ── CTA SECTION ── */}
      <section className="cta-section">
        <div className="cta-heading-wrap">
          <h2 className="cta-heading" ref={headingRef}>Let's Work Together.</h2>
        </div>

        <div className="cta-inner">
          {/* LEFT */}
          <div className="cta-left">
            <p className="cta-subtitle">
              Whether you need a bold new identity, a sleek website, or creative strategy,
              Scarlet is here to bring your vision to life.
            </p>
            <Link to="/contact" className="cta-get-in-touch">
              Get in touch <span className="cta-arrow">↗</span>
            </Link>
            <hr className="cta-divider" />
            <div className="cta-contact-info">
              <a href="mailto:hello@scarlet.com">hello@scarlet.com</a>
              <a href="tel:+1234567890">(123) 456-7890</a>
            </div>
            <hr className="cta-divider" />
            <div className="cta-socials">
              <a href="https://x.com" target="_blank" rel="noreferrer">Twitter/x</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a>
            </div>
          </div>

          {/* RIGHT — VIDEO */}
          <div className="cta-video-wrap">
            <video
              src={CTA_VIDEO}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className="cta-video-label">Scarlet Studio®</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER SECTION ── */}
      <div className="footer-section">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-brand-name">Scarlet.</p>
            <p className="footer-address">123 Street, Metropolis, State, ZIP</p>
          </div>
          <p className="footer-tagline">
            We're a cutting-edge digital design studio<br />
            dedicated to crafting bold, immersive experiences.
          </p>
          <div className="footer-newsletter">
            <p className="footer-newsletter-label">
              Stay ahead in the world of branding<br />
              and digital design with our Newsletter.
            </p>
            <div className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button>Sign up</button>
            </div>
          </div>
        </div>

        <div className="footer-links-section">
          <div className="footer-links-col">
            <p className="footer-links-label">Pages</p>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Studio</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/404">404</Link></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <p className="footer-links-label">Legal</p>
            <ul className="footer-links-list">
              <li><Link to="/legal/privacy-policy">Privacy Policy.</Link></li>
              <li><Link to="/legal/terms-conditions">Terms &amp; Conditions.</Link></li>
            </ul>
          </div>
          <div className="footer-credit">
            Designed in{' '}
            <a href="https://framer.link/thaerswailem" target="_blank" rel="noreferrer">Framer</a>
            {' '}By{' '}
            <a href="https://thaer.shop" target="_blank" rel="noreferrer">Thaer</a>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span className="footer-copyright">© 2025 All rights reserved</span>
        </div>

        <div className="footer-wordmark-wrap">
          <p className="footer-wordmark" ref={wordmarkRef}>Scarlet Design Studio</p>
        </div>
      </div>

    </footer>
  );
}