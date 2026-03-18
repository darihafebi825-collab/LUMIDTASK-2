import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const allPosts = [
  { 
    slug: 'how-to-build-a-visual-identity-that-stands-out',
    title: 'How to build a visual identity that stands out', 
    date: 'Mar 20, 2025',
    readTime: '5 min read',
    category: 'Branding',
    img: 'https://framerusercontent.com/images/2pZn1ac5q54fkkThIF56Vfou8.jpg'
  },
  { 
    slug: 'how-to-stay-relevant-in-a-fast-changing-digital-world',
    title: 'How to stay relevant in a fast-changing digital world',
    date: 'Mar 13, 2025', 
    readTime: '7 min read',
    category: 'Strategy',
    img: 'https://framerusercontent.com/images/xAmaN93UEGZxWaE2SAlY2hCRj08.jpeg'
  }
];

const filters = ['All', 'Branding', 'Strategy'];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? allPosts : allPosts.filter(p => p.category === active);

  return (
    <main className="blog-page">
      <section className="blog-page-header">
        <div className="container">
          <h1 className="blog-page-title">Blog.</h1>
          <p className="blog-page-sub">
            Insights on design, branding, and digital strategy that help businesses grow.
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

      <section className="blog-content">
        <div className="blog-posts-grid">
          {filtered.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-post-card">
              <div className="post-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="post-body">
                <h2 className="post-title">{p.title}</h2>
                <div className="post-date">{p.date}</div>
                <div className="post-meta">
                  <span className="post-category">{p.category}</span>
                  <span>{p.readTime}</span>
                </div>
                <span className="read-link">Read Article</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
