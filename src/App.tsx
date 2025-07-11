import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(45deg, #667eea, #764ba2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              William Gross
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <button 
                onClick={() => scrollToSection('about')}
                style={{ 
                  color: '#ffffff', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#667eea'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                style={{ 
                  color: '#ffffff', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#667eea'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                style={{ 
                  color: '#ffffff', 
                  border: 'none', 
                  background: 'none', 
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#667eea'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#ffffff'}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          padding: '0 2rem',
          zIndex: 2,
          position: 'relative'
        }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            William Gross
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            color: '#f0f0f0', 
            marginBottom: '2rem',
            lineHeight: '1.6',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Software Engineer & Developer
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#e0e0e0', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Passionate about creating impactful digital experiences and building innovative solutions
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              View My Work
            </button>
            <button style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '1rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              (e.target as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'transparent';
              (e.target as HTMLElement).style.transform = 'translateY(0)';
            }}
            >
              Get In Touch
            </button>
          </div>
        </div>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
      </section>

      {/* About Section */}
      <section id="about" style={{ 
        padding: '6rem 2rem', 
        backgroundColor: '#0a0a0a',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              About Me
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#cccccc', 
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              I'm a passionate software engineer with expertise in modern web technologies and a love for creating elegant, user-focused solutions.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              {
                icon: '💻',
                title: 'Development',
                description: 'Full-stack development with modern frameworks and cloud technologies'
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'Building scalable applications and leading technical initiatives'
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description: 'Working with teams to deliver exceptional user experiences'
              }
            ].map((item, index) => (
              <div key={index} style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-10px)';
                (e.target as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  marginBottom: '1rem' 
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#cccccc', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ 
        padding: '6rem 2rem', 
        backgroundColor: '#0f0f0f',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Featured Projects
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#cccccc', 
              maxWidth: '700px', 
              margin: '0 auto' 
            }}>
              Here are some of the projects I've worked on recently
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              {
                title: "E-Commerce Platform",
                description: "A modern e-commerce solution built with React and Node.js",
                tech: ["React", "Node.js", "MongoDB"],
                color: "linear-gradient(135deg, #667eea, #764ba2)"
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates",
                tech: ["Vue.js", "Firebase", "Tailwind"],
                color: "linear-gradient(135deg, #f093fb, #f5576c)"
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website with modern animations",
                tech: ["React", "TypeScript", "Vite"],
                color: "linear-gradient(135deg, #4facfe, #00f2fe)"
              }
            ].map((project, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-10px)';
                (e.target as HTMLElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: project.color,
                  borderRadius: '15px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  🚀
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  marginBottom: '1rem' 
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  color: '#cccccc', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem', 
                  marginBottom: '1.5rem' 
                }}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#764ba2'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#667eea'}
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ 
        padding: '6rem 2rem', 
        backgroundColor: '#0a0a0a',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Get In Touch
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#cccccc', 
              maxWidth: '700px', 
              margin: '0 auto' 
            }}>
              I'm always interested in new opportunities and collaborations. Let's connect!
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem', 
              marginBottom: '3rem' 
            }}>
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📧</div>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  marginBottom: '0.5rem' 
                }}>
                  Email
                </h3>
                <a href="mailto:william.gross.prof@gmail.com" style={{ 
                  color: '#667eea', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}>
                  william.gross.prof@gmail.com
                </a>
              </div>
              
              <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  marginBottom: '0.5rem' 
                }}>
                  Phone
                </h3>
                <a href="tel:+18163250933" style={{ 
                  color: '#667eea', 
                  textDecoration: 'none',
                  fontSize: '1.1rem'
                }}>
                  (816) 325-0933
                </a>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem' 
            }}>
              <a href="https://github.com/WilliamGrossKC" target="_blank" rel="noopener noreferrer" style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-5px)';
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              >
                🐙
              </a>
              <a href="https://www.linkedin.com/in/william-gross-42ab061a0/" target="_blank" rel="noopener noreferrer" style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-5px)';
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              >
                💼
              </a>
              <a href="mailto:william.gross.prof@gmail.com" style={{
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '1.5rem',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-5px)';
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)';
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              >
                📧
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#000000', 
        color: '#666666', 
        padding: '2rem', 
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p>&copy; 2024 William Gross. All rights reserved.</p>
        </div>
      </footer>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
}

export default App; 