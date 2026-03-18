import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const allProjects = [
  { slug: 'luxewear', title: 'LuxeWear', year: '2025', category: 'Branding', img: 'https://framerusercontent.com/images/Rkv2Y35XqOtjHMDCogQD8Lzlr4o.jpg' },
  { slug: 'pulse-media', title: 'Pulse Media', year: '2024', category: 'Web Design', img: 'https://framerusercontent.com/images/hpK2jiBaOZYg5CRERfR8Du1A4.jpg' },
  { slug: 'zenith-finance', title: 'Zenith Finance', year: '2024', category: 'UI/UX', img: 'https://framerusercontent.com/images/XXuNfmUtvbIoDgOoziBdpthwU.jpg' },
  { slug: 'boldtech', title: 'BoldTech', year: '2023', category: 'Web Design', img: 'https://framerusercontent.com/images/i55vTTF0hVCC5GqlkA0XAW6ZSNI.jpg' },
  { slug: 'velocity-motors', title: 'Velocity Motors', year: '2022', category: 'Motion', img: 'https://framerusercontent.com/images/rwxqhSPLCEUd9f042FJNbwEnA.jpg' },
  { slug: 'novafit', title: 'NovaFit', year: '2022', category: 'Branding', img: 'https://framerusercontent.com/images/p3VFqTJkkbSJyG4gQML0VHVxLA.jpg' },
];

const filters = ['All', 'Branding', 'Web Design', 'UI/UX', 'Motion'];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);

  return (
    <main className="projects-page">
      <section className="projects-header-section">
        <div className="container">
          <h1 className="projects-page-title">Projects.</h1>
          <p className="projects-page-sub">
            From branding to web experiences and motion graphics, each project is crafted to make an impact.
          </p>
          <div className="projects-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {filtered.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="project-card-link">
              <div className="project-card">
                <img src={p.img} alt={p.title} className="project-card-img" />
                <div className="project-card-overlay" />
                <div className="project-card-info">
                  <span className="project-card-title">{p.title}</span>
                  <span className="project-card-year">{p.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
