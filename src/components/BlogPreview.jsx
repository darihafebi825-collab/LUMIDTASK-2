import React from 'react';
import './BlogPreview.css';

const posts = [
  {
    title: 'How to build a visual identity that stands out',
    date: 'Mar 20, 2025',
    image: 'https://framerusercontent.com/images/2pZn1ac5q54fkkThIF56Vfou8.jpg',
    href: '/blog/how-to-build-a-visual-identity-that-stands-out',
  },
  {
    title: 'How to stay relevant in a fast-changing digital world',
    date: 'Mar 13, 2025',
    image: 'https://framerusercontent.com/images/xAmaN93UEGZxWaE2SAlY2hCRj08.jpeg',
    href: '/blog/how-to-stay-relevant-in-a-fast-changing-digital-world',
  },
];

function BlogPreview() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className="blog-title-heading">
          News <span>&amp; Insights.</span>
        </h2>
        <p className="blog-subtitle">
          Stay ahead in the digital world with expert insights on branding, design, and marketing.
        </p>
        <a href="/blog" className="blog-view-all">
          View all ↗
        </a>
      </div>

      <div className="blog-grid">
        {posts.map((post, i) => (
          <a href={post.href} className="blog-card" key={i}>
            <img src={post.image} alt={post.title} className="blog-card-img" />
            <div className="blog-card-content">
              <div className="blog-date">{post.date}</div>
              <h3 className="blog-card-title">{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BlogPreview;
