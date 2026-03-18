import React from 'react';
import './Benefits.css';

const CREATIVITY_IMG = 'https://framerusercontent.com/images/WmLWb5sGkbaG2hNrdhMigvNPYo.png?width=933&height=1200';
const FAST_IMG = 'https://framerusercontent.com/images/LkQFicTrnmm6QKwOZFzv386o2Uk.jpeg?width=904&height=739';
const COLLAB_IMG = 'https://framerusercontent.com/images/HGfkO8qAw7mnEjrRxBwxJIyWI.jpg?width=1320&height=1844';

const clientLogos = [
  { src: 'https://framerusercontent.com/images/lBk7MKclfzJRlatPc13MvYtptk.svg?width=43&height=48', alt: 'C1' },
  { src: 'https://framerusercontent.com/images/OHfziRjK2HdoOgrAXlPXc55VYQ.svg?width=176&height=40', alt: 'C2' },
  { src: 'https://framerusercontent.com/images/C8vnHs7e8IbLZooep0gNip6eylU.svg?width=41&height=29', alt: 'C3' },
  { src: 'https://framerusercontent.com/images/KNj9BRJvdrtCaYx5m7um7EmT8.svg?width=78&height=30', alt: 'C4' },
  { src: 'https://framerusercontent.com/images/8wpt2H14XHcb4yoW182iK0MGxs.svg?width=53&height=45', alt: 'C5' },
  { src: 'https://framerusercontent.com/images/jqmWIOA4WlrHoWQKgzTtrOgybg.svg?width=100&height=40', alt: 'C6' },
  { src: 'https://framerusercontent.com/images/qNMZaMQpAKdhOYxA9xp6LSCc54.svg?width=60&height=40', alt: 'C7' },
];

const avatars = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
];

function Benefits() {
  return (
    <section className="benefits">
      {/* Header */}
      <div className="ben-header">
        <div className="ben-label">
          <span className="ben-label-dot" />
          Benefits
        </div>
        <div>
          <h2 className="ben-title">
            Why Choose <span className="muted">Scarlet?</span>
          </h2>
          <p className="ben-subtitle">
            We specialize in creating bold, high-impact digital experiences that set brands apart.
          </p>
        </div>
        <a href="/contact" className="ben-cta">Let's talk ↗</a>
      </div>

      {/* Outer: col1 | right */}
      <div className="ben-outer">
        {/* Col 1 — man card full height */}
        <div className="ben-col1">
          <div className="ben-col1-header">
            <h3 className="ben-card-title">
              Cutting-Edge <span className="muted">Creativity</span>
            </h3>
          </div>
          <img src={CREATIVITY_IMG} alt="Creativity" />
        </div>

        {/* Right side */}
        <div className="ben-right">
          {/* Cols 2 + 3 */}
          <div className="ben-cols-23">
            {/* Col 2 */}
            <div className="ben-col">
              <div className="ben-card">
                <span className="ben-card-icon">🕐</span>
                <h3 className="ben-card-title">24/7 Email Support</h3>
                <p className="ben-card-desc">Need assistance? Our team is always available to ensure a smooth and hassle-free experience. 24 hours response time.</p>
              </div>
              <div className="ben-img-card">
                <img src={FAST_IMG} alt="Fast Turnarounds" />
                <div className="ben-img-label">Fast & Efficient Turnarounds</div>
              </div>
              <div className="ben-card">
                <span className="ben-card-icon">✓</span>
                <h3 className="ben-card-title">Proven Expertise</h3>
                <p className="ben-card-desc">We've helped multiple brands and businesses create stunning, high-impact designs that drive results.</p>
              </div>
            </div>

            {/* Col 3 */}
            <div className="ben-col">
              <div className="ben-card">
                <span className="ben-card-icon">💡</span>
                <h3 className="ben-card-title">Seamless Collaboration</h3>
                <p className="ben-card-desc">We work closely with you, keeping communication transparent and revisions efficient to bring your vision to life.</p>
              </div>
              <div className="ben-phone-card">
                <div className="ben-phone-frame">
                  <div className="ben-phone-notch" />
                  <img src={COLLAB_IMG} alt="Collaboration" />
                </div>
              </div>
              <div className="ben-card">
                <span className="ben-card-icon">⚡</span>
                <h3 className="ben-card-title">Future-Ready Solutions</h3>
                <p className="ben-card-desc">Our designs grow with your brand, ensuring long-term success and adaptability.</p>
              </div>
            </div>
          </div>

          {/* Bottom bar under cols 2+3 */}
          <div className="ben-bottom">
            <div className="ben-clients-card">
              <div className="ben-avatars">
                {avatars.map((src, i) => <img key={i} src={src} alt="" />)}
              </div>
              <div className="ben-clients-info">
                <div className="ben-stars">★★★★★</div>
                <div className="ben-clients-count">200+ <span>Satisfied Clients</span></div>
              </div>
            </div>
            <div className="ben-logos-card">
              {clientLogos.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
