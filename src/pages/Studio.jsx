import React from 'react';
import { Link } from 'react-router-dom';
import './Studio.css';

const TEAM = [
  { name: 'Alex Carter', role: 'Founder & Creative Director', img: 'https://framerusercontent.com/images/mJOEscaN4cJv2tpti4OUyPBLdw.png?width=800&height=1200' },
  { name: 'Maya Lin', role: 'Lead Designer', img: 'https://framerusercontent.com/images/eTTTIcVnwyKXnDY6kbVhA1AyzQ.png?width=1200&height=1200' },
  { name: 'Jordan Reyes', role: 'Web Developer', img: 'https://framerusercontent.com/images/DlWgeWLMfo738PcrIKpMn8HWwQ.jpg?width=715&height=1200' },
  { name: 'Leo Kim', role: 'Motion & Visual Designer', img: 'https://framerusercontent.com/images/wbxIVTywMZsTgcaCk4yAlWG2VU.jpg?width=1200&height=715' },
  { name: 'Olivia Hart', role: 'Brand Strategist', img: 'https://framerusercontent.com/images/2UD1Kj1UE902txpUo5GdVYNTRTw.png?width=1200&height=735' },
  { name: 'Ethan Cole', role: 'Senior Visual Designer', img: 'https://framerusercontent.com/images/Xo1CApygJhobMFiwnJQZRhcANsk.png?width=715&height=1200' },
  { name: 'Sofia Ramirez', role: 'UX Researcher', img: 'https://framerusercontent.com/images/AmCFmXVlBSWxWEmpdmCrUODIs.png?width=1200&height=748' },
  { name: 'Daniel Knox', role: 'Marketing & Content Lead', img: 'https://framerusercontent.com/images/WB0ccd7eXi9C84QrCWCHsiIrM14.png?width=1190&height=1200' },
];

const AWARDS = [
  { award: 'Best Digital Design Studio', org: 'Creative Excellence Awards', year: '2024' },
  { award: 'Best UI/UX Design', org: 'Web Vision Awards', year: '2024' },
  { award: 'Top 10 Web Agencies', org: 'Digital Creators List', year: '2024' },
  { award: 'Top Branding Agency', org: 'Design Innovators Summit', year: '2023' },
  { award: 'Outstanding Motion Graphics', org: 'Visual Impact Awards', year: '2023' },
];

const CLIENT_LOGOS = [
  'https://framerusercontent.com/images/lBk7MKclfzJRlatPc13MvYtptk.svg',
  'https://framerusercontent.com/images/OHfziRjK2HdoOgrAXlPXc55VYQ.svg',
  'https://framerusercontent.com/images/C8vnHs7e8IbLZooep0gNip6eylU.svg',
  'https://framerusercontent.com/images/KNj9BRJvdrtCaYx5m7um7EmT8.svg',
  'https://framerusercontent.com/images/8wpt2H14XHcb4yoW182iK0MGxs.svg',
  'https://framerusercontent.com/images/jqmWIOA4WlrHoWQKgzTtrOgybg.svg',
  'https://framerusercontent.com/images/qNMZaMQpAKdhOYxA9xp6LSCc54.svg',
];

export default function Studio() {
  return (
    <main className="studio-page">
      {/* ── Hero ── */}
      <section className="studio-hero">
        <img
          src="https://framerusercontent.com/images/wC9uGddColj83ZLnIfAMsPFIQs.jpg?width=2160&height=1440"
          alt="About Scarlet"
          className="studio-hero-img"
        />
        <div className="studio-hero-overlay" />
        <div className="studio-hero-content">
          <div className="studio-hero-label">
            <span className="red-dot" />
            About us
          </div>
          <h1 className="studio-hero-title">
            Scarlet a digital design studio based in London, built for brands that refuse to blend in.
            Through cutting-edge visuals, strategic storytelling, and innovative design, we transform
            ideas into unforgettable digital identities.
          </h1>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mission-section">
        <div className="container mission-inner">
          <div className="mission-label-col">
            <span className="red-dot" />
            <span className="section-label-text">Our mission</span>
          </div>
          <div className="mission-text-col">
            <p className="mission-big-text">
              <span className="text-white">We believe design should be bold, purposeful, and impactful.</span>
              <span className="text-muted"> Our mission is to help brands break through the noise with visuals that tell a story, engage audiences, and leave a lasting impression.</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="container stats-row">
          {[
            { num: '15+', label: 'Years of Experience' },
            { num: '100+', label: 'Projects completed' },
            { num: '97%', label: 'Client satisfaction rate' },
            { num: '75%', label: 'Conversion rate improvement' },
          ].map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team photo after stats ── */}
      <div className="mission-team-photo">
        <img
          src="https://framerusercontent.com/images/KkRYwwYPMTNxShAODLOCws5Hk.jpg?width=2160&height=1440"
          alt="Scarlet Team"
        />
      </div>

      {/* ── What we do ── */}
      <section className="what-section">
        <div className="container what-inner">
          <div className="what-label">
            <span className="red-dot" />
            <span className="section-label-text">What we do</span>
          </div>
          <div className="what-body">
            <div className="what-heading-col">
              <h2 className="what-heading">
                <span className="text-white">From branding to web design, UI/UX, and motion graphics,</span>
                <span className="text-muted"> we craft stunning digital experiences tailored to your vision.</span>
              </h2>
            </div>
            <div className="what-desc-col">
              <p>Every project we take on is driven by strategy, creativity, and a commitment to excellence.</p>
              <Link to="/projects" className="btn-arrow">
                View projects <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="studio-logos-band">
          <div className="logo-marquee-wrapper">
            <div className="logo-marquee">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) => (
                <img key={i} src={l} alt="" className="client-logo" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="team-section">
        <div className="container team-header">
          <div className="team-header-left">
            <span className="red-dot" />
            <span className="section-label-text">Our team</span>
          </div>
          <div className="team-header-right">
            <h2 className="team-heading">
              <span className="text-white">Meet the </span>
              <span className="text-muted">Scarlet Team.</span>
            </h2>
            <p>We're a team of passionate creatives and designers with a bold vision and a detail-driven approach.</p>
            <Link to="/contact" className="btn-arrow">
              Contact us <span className="arrow-icon">↗</span>
            </Link>
          </div>
        </div>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <div className="team-card" key={i}>
              <img src={m.img} alt={m.name} />
              <div className="team-card-overlay">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="awards-section">
        <div className="container awards-inner">
          <div className="awards-left">
            <div className="awards-label">
              <span className="red-dot" />
              <span className="section-label-text">Achievements</span>
            </div>
            <h2 className="awards-heading">
              <span className="text-white">Awards &amp;</span>
              <br />
              <span className="text-muted">Recognition.</span>
            </h2>
            <p>We're proud to have our work recognized by industry leaders. Here are some of the accolades we've earned.</p>
          </div>
          <div className="awards-right">
            {AWARDS.map((a, i) => (
              <div className="award-card" key={i}>
                <div className="award-name">{a.award}</div>
                <div className="award-org">{a.org}</div>
                <div className="award-year">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Life at Scarlet ── */}
      <section className="life-section">
        <div className="container life-header">
          <div className="life-header-left">
            <h2 className="life-heading">
              <span className="text-white">Life at </span>
              <span className="text-muted">Scarlet.</span>
            </h2>
          </div>
          <div className="life-header-right">
            <p>At Scarlet, creativity thrives in an environment built for innovation, collaboration, and a little bit of fun.</p>
            <Link to="/contact" className="btn-arrow-outline">
              Join us <span className="arrow-icon">↗</span>
            </Link>
          </div>
        </div>

        <div className="life-grid">
          <div className="life-item">
            <video
              src="https://framerusercontent.com/assets/UDgddIWKisNFM2jnCEHW48Y4Q.mp4"
              autoPlay muted loop playsInline
            />
            <span className="life-year">2025</span>
          </div>
          <div className="life-item">
            <img src="https://framerusercontent.com/images/yEJxaGho5D0SEAPU5c8twNZERA.jpg?width=1920&height=1078" alt="2025" />
            <span className="life-year">2025</span>
          </div>
          <div className="life-item">
            <img src="https://framerusercontent.com/images/KLHlOlNtnCgpRBtsfoG9ApllNk.jpg?width=2160&height=1440" alt="2024" />
            <span className="life-year">2024</span>
          </div>
          <div className="life-item">
            <video
              src="https://framerusercontent.com/assets/EMnLhkDT4NveEZLYOf9FXwbd48.mp4"
              autoPlay muted loop playsInline
            />
            <span className="life-year">2023</span>
          </div>
        </div>
      </section>
    </main>
  );
}
