import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

/* ─── Hardcoded Projects Data ─── */
const PROJECTS = [
  {
    slug: 'luxewear',
    title: 'LuxeWear',
    year: '2025',
    duration: '5 Weeks',
    client: 'LuxeWear (Fashion Brand)',
    categories: ['Web design'],
    tags: ['Branding', 'Web design'],
    heroImg: 'https://framerusercontent.com/images/Rkv2Y35XqOtjHMDCogQD8Lzlr4o.jpg',
    heroSubtitle: 'We designed and built a high-end, conversion-optimized e-commerce website, integrating seamless shopping experiences and branding.',
    introduction: 'LuxeWear, a premium fashion brand, needed an e-commerce website that reflected their high-end aesthetic while offering a seamless shopping experience for customers.',
    challengeHeading: 'Their existing website was slow, unresponsive, and lacked the luxury appeal their brand represented.',
    challengeBody: 'Poor navigation and checkout experience led to high bounce rates and lost sales.',
    solutionHeading: 'We designed a sleek, modern e-commerce platform with a clean UI, high-quality visuals, and a smooth checkout process.',
    solutionBody: 'We optimized the site for performance and mobile users, resulting in higher engagement and increased conversions.',
    introImg: 'https://framerusercontent.com/images/taS1gwIPX1H6wvXFSKQ0R9G8NU.jpg',
    challengeImgs: [
      'https://framerusercontent.com/images/geNN1JvQnCwCjw1Vgnjm1R6Es.jpg',
      'https://framerusercontent.com/images/xQYXCMbbdiUP78A0wvCJQmh0cE.jpg',
    ],
    solutionImg: 'https://framerusercontent.com/images/wDrEpYhRu8m4Y4wKLHAcz8drqSc.jpg',
    viewMore: ['pulse-media'],
    prev: null,
    next: 'pulse-media',
  },
  {
    slug: 'pulse-media',
    title: 'Pulse Media',
    year: '2024',
    duration: '6 Weeks',
    client: 'Pulse Media (Creative Agency)',
    categories: ['Web design', 'Branding', 'Motion Graphics'],
    tags: ['Motion Graphics', 'Branding'],
    heroVideo: 'https://framerusercontent.com/assets/28aCfB78lcIkeM9TQfYxIQqRN0.mp4',
    heroImg: 'https://framerusercontent.com/images/yZBDgcJWvFaM3GGmL2kJDu1KXVA.jpg',
    heroSubtitle: 'Revamped Pulse Media\'s brand identity, designed a sleek new website, and created dynamic motion graphics for their digital campaigns, elevating their online presence.',
    introduction: 'Pulse Media, a creative agency, wanted to revamp its brand identity and digital presence to attract high-profile clients and establish itself as an industry leader.',
    challengeHeading: 'Their brand felt outdated, and their website failed to showcase their creativity and expertise.',
    challengeBody: 'They also lacked engaging motion graphics to strengthen their marketing efforts.',
    solutionHeading: 'We rebranded Pulse Media with a bold, modern visual identity and redesigned their website to highlight their portfolio in an interactive way.',
    solutionBody: 'Custom motion graphics were added to enhance their storytelling, giving them a dynamic edge in the industry.',
    introImg: 'https://framerusercontent.com/images/EZ0f4QmeYLqwDAbx0awtGz4ak0.jpg',
    challengeImgs: [
      'https://framerusercontent.com/images/ytzqi5CpGF5IgmGiPxR4yLjcw.jpg',
      'https://framerusercontent.com/images/e2ww4AuWUfGH3hMD1nGkmOnr0QM.jpg',
    ],
    solutionImg: 'https://framerusercontent.com/images/gwbKtlTO0IKvW2NxgepuFSBvijw.jpg',
    viewMore: ['luxewear'],
    prev: 'luxewear',
    next: null,
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.slug === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) return <Navigate to="/projects" replace />;

  const prevProject = PROJECTS.find(p => p.slug === project.prev);
  const nextProject = PROJECTS.find(p => p.slug === project.next);
  const viewMoreProjects = project.viewMore.map(s => PROJECTS.find(p => p.slug === s)).filter(Boolean);

  return (
    <main style={{ fontFamily: 'sans-serif', color: '#eee', paddingTop: '80px' }}>

      {/* Hero */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '480px', display: 'flex', alignItems: 'flex-end' }}>
        {project.heroVideo ? (
          <video src={project.heroVideo} poster={project.heroImg} autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <img src={project.heroImg} alt={project.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', padding: '0 32px 32px' }}>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', margin: 0 }}>{project.title}</h1>
          <p style={{ marginTop: '8px', fontSize: '16px' }}>{project.heroSubtitle}</p>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', padding: '64px 32px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <span style={{ color: '#aaa' }}>• Introduction</span>
          <h2 style={{ fontSize: '22px', marginTop: '8px' }}>{project.introduction}</h2>
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <div><strong>Year:</strong> {project.year}</div>
          <div><strong>Duration:</strong> {project.duration}</div>
          <div><strong>Client:</strong> {project.client}</div>
          <div><strong>Categories:</strong> {project.categories.join(', ')}</div>
        </div>
      </section>

      {/* Full-width intro image */}
      <div style={{ margin: '32px 0' }}>
        <img src={project.introImg} alt="Introduction" style={{ width: '100%', display: 'block' }} />
      </div>

      {/* Challenges */}
      <section style={{ padding: '64px 32px' }}>
        <span style={{ color: '#aaa' }}>• Challenges</span>
        <h2 style={{ marginTop: '8px', fontSize: '22px' }}>{project.challengeHeading}</h2>
        <p>{project.challengeBody}</p>
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          {project.challengeImgs.map((img, i) => (
            <img key={i} src={img} alt={`Challenge ${i}`} style={{ flex: 1, width: '100%', objectFit: 'cover' }} />
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: '64px 32px' }}>
        <span style={{ color: '#aaa' }}>• Solutions</span>
        <h2 style={{ marginTop: '8px', fontSize: '22px' }}>{project.solutionHeading}</h2>
        <p>{project.solutionBody}</p>
        <div style={{ marginTop: '32px' }}>
          <img src={project.solutionImg} alt="Solution" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* View More */}
      {viewMoreProjects.length > 0 && (
        <section style={{ padding: '64px 32px' }}>
          <h2 style={{ marginBottom: '16px' }}>View More Projects</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {viewMoreProjects.map(p => (
              <Link key={p.slug} to={`/projects/${p.slug}`} style={{ flex: '1 1 300px', color: '#fff', textDecoration: 'none' }}>
                <div>
                  <img src={p.heroImg} alt={p.title} style={{ width: '100%', display: 'block' }} />
                  <h3>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '32px' }}>
        {prevProject ? <Link to={`/projects/${prevProject.slug}`} style={{ color: '#fff' }}>← {prevProject.title}</Link> : <div />}
        <Link to="/projects" style={{ color: '#fff' }}>All Projects</Link>
        {nextProject ? <Link to={`/projects/${nextProject.slug}`} style={{ color: '#fff' }}>{nextProject.title} →</Link> : <div />}
      </nav>
    </main>
  );
}