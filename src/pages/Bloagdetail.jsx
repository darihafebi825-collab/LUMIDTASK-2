// src/pages/Bloagdetail.jsx - FIXED VERSION
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const POSTS_DATA = {
  'how-to-build-a-visual-identity-that-stands-out': {
    title: 'How to build a visual identity that stands out',
    date: 'Mar 20, 2025',
    readTime: '5 min read',
    category: 'Branding',
    img: 'https://framerusercontent.com/images/2pZn1ac5q54fkkThIF56Vfou8.jpg',
    author: {
      name: 'Alex Carter',
      role: 'Founder & Creative Director',
      img: 'https://framerusercontent.com/images/mJOEscaN4cJv2tpti4OUyPBLdw.png?width=800&height=1200'
    },
    content: [
      { type: 'p', text: "A visual identity is more than a logo. It's the entire visual language of your brand — colors, typography, imagery, and the feeling it evokes at every touchpoint." },
      { type: 'h2', text: 'Start with strategy, not aesthetics' },
      { type: 'p', text: 'Before opening a single design tool, ask yourself: what does your brand stand for? Who is your audience? What emotion should you evoke? These questions should drive every design decision.' },
    ],
  },
  'how-to-stay-relevant-in-a-fast-changing-digital-world': {
    title: 'How to stay relevant in a fast-changing digital world',
    date: 'Mar 13, 2025',
    readTime: '7 min read',
    category: 'Strategy',
    img: 'https://framerusercontent.com/images/xAmaN93UEGZxWaE2SAlY2hCRj08.jpeg',
    author: {
      name: 'Olivia Hart',
      role: 'Brand Strategist',
      img: 'https://framerusercontent.com/images/2UD1Kj1UE902txpUo5GdVYNTRTw.png?width=1200&height=735'
    },
    content: [
      { type: 'p', text: 'The digital landscape evolves at a pace that can feel overwhelming. Algorithms change, new platforms emerge, and audience behaviors shift.' },
      { type: 'h2', text: 'Build on timeless foundations' },
      { type: 'p', text: 'While tactics change, principles don’t. A clear brand story, a well-defined audience, and genuine value proposition are timeless.' },
    ],
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = POSTS_DATA[slug];

  if (!post) {
    return (
      <main style={{ padding: '120px 32px', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '32px' }}>Article not found</h1>
        <Link to="/blog" style={{ padding: '8px 16px', background: '#000', color: '#fff', textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: '80px', color: '#eee', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'relative', height: '70vh', minHeight: '480px', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src={post.img}
          alt={post.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.35)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 32px 72px', maxWidth: '820px' }}>
          <Link to="/blog" style={{ display: 'inline-block', fontSize: '13px', color: 'rgba(240,236,230,0.5)', marginBottom: '20px', textDecoration: 'none' }}>
            ← All Articles
          </Link>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', fontSize: '13px', color: 'rgba(240,236,230,0.55)' }}>
            <span style={{ padding: '3px 8px', background: '#333', color: '#fff', borderRadius: '2px', fontSize: '11px', fontWeight: '600' }}>
              {post.category}
            </span>
            <span>{post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, margin: 0 }}>{post.title}</h1>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '80px', padding: '72px 32px' }}>
        <aside style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <img
            src={post.author.img}
            alt={post.author.name}
            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <p style={{ fontSize: '15px', fontWeight: 600 }}>{post.author.name}</p>
            <p style={{ fontSize: '13px', color: '#aaa' }}>{post.author.role}</p>
          </div>
        </aside>
        <article style={{ maxWidth: '680px' }}>
          {post.content.map((block, i) =>
            block.type === 'h2' ? (
              <h2 key={i} style={{ fontSize: '26px', fontWeight: '700', margin: '44px 0 16px' }}>
                {block.text}
              </h2>
            ) : (
              <p key={i} style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#ddd' }}>
                {block.text}
              </p>
            )
          )}
        </article>
      </div>

      <div style={{ display: 'flex', gap: '16px', padding: '64px 32px' }}>
        <Link to="/blog" style={{ padding: '8px 16px', border: '1px solid #fff', color: '#fff', textDecoration: 'none' }}>
          ← Back to Blog
        </Link>
        <Link to="/contact" style={{ padding: '8px 16px', background: '#000', color: '#fff', textDecoration: 'none' }}>
          Work with us →
        </Link>
      </div>
    </main>
  );
}
