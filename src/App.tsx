import { useState, useEffect } from 'react';

// Photo in public/
const PHOTO_URL = '/Headshot.jpg';

const FONTS = {
  heading: '"Syne", -apple-system, BlinkMacSystemFont, sans-serif',
  body: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Tailored Tutor RAG',
      description: "An intelligent tutoring system using OpenAI's API and RAG techniques for personalized learning experiences.",
      tech: ['Python', 'Flask', 'OpenAI API'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      link: 'https://github.com/WilliamGrossKC/TailoredTutorRag',
      graphic: (
        <svg viewBox="0 0 140 140" fill="none" style={{ width: '85%', height: '85%', opacity: 0.95 }}>
          <defs>
            <linearGradient id="tutor-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path d="M70 15 L125 42.5 L125 97.5 L70 125 L15 97.5 L15 42.5 Z" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="url(#tutor-grad)" />
          <circle cx="70" cy="50" r="8" fill="rgba(255,255,255,0.9)" />
          <circle cx="45" cy="75" r="6" fill="rgba(255,255,255,0.6)" />
          <circle cx="95" cy="75" r="6" fill="rgba(255,255,255,0.6)" />
          <circle cx="55" cy="105" r="5" fill="rgba(255,255,255,0.5)" />
          <circle cx="85" cy="105" r="5" fill="rgba(255,255,255,0.5)" />
          <path d="M70 58 L45 75 M70 58 L95 75 M45 75 L55 105 M95 75 L85 105" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 55 L50 55 L55 70 L70 45 L85 70 L90 55 L110 55" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      title: 'Solana Trading Bot',
      description: 'An automated trading bot for Solana blockchain using machine learning algorithms for market analysis.',
      tech: ['Python', 'Machine Learning', 'Solana'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      link: 'https://github.com/WilliamGrossKC/SolanaTradingBot',
      graphic: (
        <svg viewBox="0 0 140 140" fill="none" style={{ width: '85%', height: '85%', opacity: 0.95 }}>
          <defs>
            <linearGradient id="solana-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          <path d="M25 95V45l22 25-22 25z" fill="url(#solana-grad)" stroke="rgba(255,255,255,0.95)" strokeWidth="2"/>
          <path d="M47 70l26-25 26 25-26 25z" fill="url(#solana-grad)" stroke="rgba(255,255,255,0.95)" strokeWidth="2"/>
          <path d="M99 95V45l-22 25 22 25z" fill="url(#solana-grad)" stroke="rgba(255,255,255,0.95)" strokeWidth="2"/>
          <path d="M20 55 Q70 35 120 55" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M20 85 Q70 65 120 85" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="70" cy="70" r="8" fill="rgba(255,255,255,0.95)" />
          <circle cx="70" cy="70" r="4" fill="rgba(245,87,108,0.8)" />
        </svg>
      ),
    },
    {
      title: 'WYA',
      description: 'iOS mobile application built with SwiftUI for modern, native iOS development.',
      tech: ['SwiftUI', 'iOS', 'Swift'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      link: 'https://github.com/WilliamGrossKC/WYA',
      graphic: (
        <svg viewBox="0 0 140 140" fill="none" style={{ width: '85%', height: '85%', opacity: 0.95 }}>
          <defs>
            <linearGradient id="wya-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          <rect x="38" y="12" width="64" height="116" rx="12" stroke="rgba(255,255,255,0.95)" strokeWidth="2.5" fill="url(#wya-grad)"/>
          <rect x="46" y="24" width="48" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
          <rect x="44" y="38" width="52" height="72" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
          <rect x="50" y="46" width="40" height="28" rx="4" fill="rgba(255,255,255,0.3)"/>
          <rect x="50" y="80" width="18" height="18" rx="4" fill="rgba(255,255,255,0.25)"/>
          <rect x="72" y="80" width="18" height="18" rx="4" fill="rgba(255,255,255,0.25)"/>
          <rect x="50" y="102" width="18" height="18" rx="4" fill="rgba(255,255,255,0.25)"/>
          <rect x="72" y="102" width="18" height="18" rx="4" fill="rgba(255,255,255,0.25)"/>
          <circle cx="70" cy="124" r="4" fill="rgba(255,255,255,0.5)"/>
        </svg>
      ),
    },
    {
      title: 'FluidSolver',
      description: 'Visual fluid network analysis tool for pressure and flow in pipe systems—inspired by NASA GFSSP.',
      tech: ['JavaScript', 'Vite', 'CSS'],
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      link: 'https://github.com/WilliamGrossKC/FluidSolver',
      graphic: (
        <svg viewBox="0 0 140 140" fill="none" style={{ width: '85%', height: '85%', opacity: 0.95 }}>
          <defs>
            <linearGradient id="fluid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
            </linearGradient>
          </defs>
          <rect x="25" y="35" width="24" height="24" rx="4" fill="url(#fluid-grad)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
          <rect x="91" y="81" width="24" height="24" rx="4" fill="url(#fluid-grad)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
          <circle cx="70" cy="70" r="14" fill="url(#fluid-grad)" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
          <circle cx="70" cy="35" r="10" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
          <circle cx="45" cy="70" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
          <circle cx="95" cy="70" r="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
          <path d="M37 47 L58 58 M82 58 L103 81 M70 56 L70 84 M56 70 L84 70" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M48 62 L62 48" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2"/>
        </svg>
      ),
    },
  ];

  const youtubeChannels = [
    { name: 'MIT OpenCourseWare', url: 'https://www.youtube.com/@MITOCW', desc: 'Free courses from MIT' },
    { name: '3Blue1Brown', url: 'https://www.youtube.com/@3blue1brown', desc: 'Math & intuition' },
    { name: 'Veritasium', url: 'https://www.youtube.com/@veritasium', desc: 'Science & education' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#050508',
      color: '#e8e8e8',
      fontFamily: FONTS.body,
      fontWeight: 400,
    }}>
      {/* Global animated background */}
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
        <div className="mesh-grid" />
      </div>

      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: isScrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: FONTS.heading, fontSize: '1.35rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
              William Gross
            </div>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              {['about', 'projects', 'favorites', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontFamily: FONTS.body,
                    fontWeight: 500,
                    transition: 'color 0.25s ease',
                    textTransform: 'capitalize',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#a78bfa'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
                >
                  {id === 'favorites' ? 'Favorites' : id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero with photo + floating graphics */}
      <section className="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 2rem 3rem',
      }}>
        {/* Floating cool graphics */}
        <div className="hero-graphics" aria-hidden="true">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
          <div className="hero-shape hero-shape-4" />
          <div className="hero-shape hero-shape-5" />
          <div className="hero-shape hero-shape-6" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(167, 139, 250, 0.4)',
              boxShadow: '0 0 60px rgba(102, 126, 234, 0.25), 0 25px 50px -12px rgba(0,0,0,0.5)',
              marginBottom: '2rem',
              flexShrink: 0,
              background: photoError ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : undefined,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {!photoError ? (
              <img
                src={PHOTO_URL}
                alt="William Gross"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={() => setPhotoError(true)}
              />
            ) : (
              <span style={{ fontFamily: FONTS.heading, fontSize: '4rem', fontWeight: 800, color: 'rgba(255,255,255,0.9)' }}>WG</span>
            )}
          </div>
          <h1 style={{
            fontFamily: FONTS.heading,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}>
            William Gross
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}>
            Software Engineer & Developer
          </p>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
          }}>
            Passionate about creating impactful digital experiences and building innovative solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '3.5rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle" style={{ maxWidth: '720px', marginTop: '0.5rem' }}>
            I'm a passionate software engineer with expertise in modern web technologies and a love for creating elegant, user-focused solutions. I focus on full-stack development with modern frameworks and cloud technologies, building scalable applications and leading technical initiatives, and working with teams to deliver exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Projects with graphics */}
      <section id="projects" style={{ padding: '3.5rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem', marginTop: '2rem' }}>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card project-card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div
                  style={{
                    width: '100%',
                    height: 180,
                    background: project.gradient,
                    borderRadius: 16,
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {project.graphic}
                </div>
                <h3 style={{ fontFamily: FONTS.heading, fontSize: '1.35rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <span style={{ display: 'inline-block', marginTop: '1rem', color: '#a78bfa', fontWeight: 500, fontSize: '0.9rem' }}>
                  View Project →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Favorites */}
      <section id="favorites" style={{ padding: '3.5rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title">Favorite Learning</h2>
          <p className="section-subtitle">YouTube channels I love for learning.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {youtubeChannels.map((ch, i) => (
              <a
                key={i}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.transform = 'translateY(-4px)';
                  (e.currentTarget).style.boxShadow = '0 24px 48px -12px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.transform = 'translateY(0)';
                  (e.currentTarget).style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" fill="white" style={{ width: 28, height: 28 }}>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>
                    {ch.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }}>{ch.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '3.5rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">I'm always interested in new opportunities and collaborations. Let's connect!</p>
          {/* Decorative contact graphics */}
          <div className="contact-graphics" aria-hidden="true">
            <div className="contact-line contact-line-1" />
            <div className="contact-line contact-line-2" />
            <div className="contact-dot contact-dot-1" />
            <div className="contact-dot contact-dot-2" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <a href="mailto:william.gross.prof@gmail.com" className="card contact-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 1.75rem', textAlign: 'left' }}>
              <div className="contact-icon-wrap" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28, color: '#fff' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: FONTS.heading, fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.35rem' }}>Email</h3>
                <span className="link" style={{ fontSize: '0.95rem' }}>william.gross.prof@gmail.com</span>
              </div>
            </a>
            <a href="tel:+18163250933" className="card contact-card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 1.75rem', textAlign: 'left' }}>
              <div className="contact-icon-wrap" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28, color: '#fff' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: FONTS.heading, fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.35rem' }}>Phone</h3>
                <span className="link" style={{ fontSize: '0.95rem' }}>(816) 325-0933</span>
              </div>
            </a>
          </div>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Find me on</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            {[
              { href: 'https://github.com/WilliamGrossKC', label: 'GitHub', icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              ) },
              { href: 'https://www.linkedin.com/in/william-gross-42ab061a0/', label: 'LinkedIn', icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ) },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                {s.icon}
                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.35)',
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        zIndex: 1,
      }}>
        © {new Date().getFullYear()} William Gross. All rights reserved.
      </footer>

      <style>{`
        .mesh-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .mesh-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: meshFloat 20s ease-in-out infinite;
        }
        .mesh-orb-1 {
          width: 60vmin;
          height: 60vmin;
          background: radial-gradient(circle, #667eea 0%, transparent 70%);
          top: -20%;
          left: -10%;
          animation-delay: 0s;
        }
        .mesh-orb-2 {
          width: 50vmin;
          height: 50vmin;
          background: radial-gradient(circle, #764ba2 0%, transparent 70%);
          bottom: -15%;
          right: -10%;
          animation-delay: -7s;
        }
        .mesh-orb-3 {
          width: 40vmin;
          height: 40vmin;
          background: radial-gradient(circle, #4facfe 0%, transparent 70%);
          top: 50%;
          left: 50%;
          animation: meshFloatCenter 20s ease-in-out -14s infinite;
        }
        @keyframes meshFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes meshFloatCenter {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-50%, -50%) scale(1.08); }
          66% { transform: translate(-50%, -50%) scale(0.92); }
        }
        .mesh-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%);
        }
        .hero-graphics {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }
        .hero-shape {
          position: absolute;
          border: 1px solid rgba(167, 139, 250, 0.25);
          animation: heroFloat 12s ease-in-out infinite;
        }
        .hero-shape-1 {
          width: 80px;
          height: 80px;
          top: 18%;
          left: 12%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
          animation-delay: 0s;
        }
        .hero-shape-2 {
          width: 120px;
          height: 120px;
          top: 25%;
          right: 15%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, rgba(118, 75, 162, 0.12) 0%, transparent 60%);
          border: none;
          animation-delay: -3s;
        }
        .hero-shape-3 {
          width: 4px;
          height: 60px;
          bottom: 30%;
          left: 20%;
          background: linear-gradient(180deg, transparent, rgba(167, 139, 250, 0.4), transparent);
          border: none;
          transform-origin: center;
          animation: heroFloat 8s ease-in-out infinite reverse;
          animation-delay: -2s;
        }
        .hero-shape-4 {
          width: 100px;
          height: 4px;
          bottom: 25%;
          right: 18%;
          background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.35), transparent);
          border: none;
          animation: heroFloat 10s ease-in-out infinite;
          animation-delay: -5s;
        }
        .hero-shape-5 {
          width: 12px;
          height: 12px;
          top: 45%;
          left: 8%;
          border-radius: 50%;
          background: rgba(167, 139, 250, 0.5);
          border: none;
          animation: heroPulse 4s ease-in-out infinite;
        }
        .hero-shape-6 {
          width: 8px;
          height: 8px;
          top: 60%;
          right: 10%;
          border-radius: 50%;
          background: rgba(79, 172, 254, 0.5);
          border: none;
          animation: heroPulse 3s ease-in-out infinite 1s;
        }
        @keyframes heroFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.8; }
          33% { transform: translate(15px, -20px) rotate(5deg); opacity: 1; }
          66% { transform: translate(-10px, 15px) rotate(-5deg); opacity: 0.7; }
        }
        @keyframes heroPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        .section-title {
          font-family: ${FONTS.heading};
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .section-subtitle {
          color: rgba(255,255,255,0.55);
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover, .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.35);
        }
        .project-card:hover {
          border-color: rgba(167, 139, 250, 0.2);
        }
        .tech-tag {
          padding: 0.35rem 0.75rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.85);
        }
        .btn-primary {
          padding: 0.9rem 1.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 999px;
          font-family: ${FONTS.body};
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 24px -4px rgba(102, 126, 234, 0.4);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -4px rgba(102, 126, 234, 0.5);
        }
        .btn-secondary {
          padding: 0.9rem 1.75rem;
          background: rgba(255,255,255,0.06);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 999px;
          font-family: ${FONTS.body};
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
        }
        .link {
          color: #a78bfa;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s ease;
        }
        .link:hover { color: #c4b5fd; }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        .contact-graphics {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .contact-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.2), transparent);
          height: 1px;
          animation: contactLine 8s ease-in-out infinite;
        }
        .contact-line-1 { top: 25%; left: 0; width: 40%; }
        .contact-line-2 { bottom: 30%; right: 0; width: 35%; animation-delay: -4s; }
        .contact-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(167, 139, 250, 0.5);
          animation: contactPulse 3s ease-in-out infinite;
        }
        .contact-dot-1 { top: 20%; right: 15%; }
        .contact-dot-2 { bottom: 25%; left: 10%; animation-delay: -1.5s; }
        @keyframes contactLine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes contactPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        .contact-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px -4px rgba(102, 126, 234, 0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .contact-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.35);
          border-color: rgba(167, 139, 250, 0.2);
        }
        .contact-card:hover .contact-icon-wrap {
          transform: scale(1.05);
          box-shadow: 0 12px 32px -4px rgba(102, 126, 234, 0.45);
        }
      `}</style>
    </div>
  );
}

export default App;
