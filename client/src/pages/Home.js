import React, { useEffect, useRef, useState } from 'react';
import Services from './Services';

const projectsList = [
  {
    name: 'Private Voting Platform',
    url: 'https://privatevoting.in/',
    tag: 'Web App',
  },
  {
    name: 'Satvik Nutrition',
    url: 'https://satviknutrition.com/',
    tag: 'E-Commerce',
  },
  {
    name: 'Infinity Swim Academy',
    url: 'https://www.infinityswimacademy.in/',
    tag: 'Sports Academy',
  },
  {
    name: 'Blood Connect',
    url: 'https://bloodconnect-virid.vercel.app/',
    tag: 'Social Impact',
  },
  {
    name: 'Uniform Store',
    url: 'https://uniform-rouge.vercel.app/',
    tag: 'E-Commerce',
  },
  {
    name: 'Global Space',
    url: 'https://global-space-nine.vercel.app/',
    tag: 'Web App',
  },
  {
    name: 'Kabeer Travelzhub',
    url: 'https://kabeerrtravelzhub.vercel.app/',
    tag: 'Travel',
  },
  {
    name: 'Phoenix Sports Academy',
    url: 'https://www.phoenixsportsacademy.in/',
    tag: 'Sports Academy',
  },
];

// WordPress mShots — 100% free, no API key, no signup required
// First load may take a few seconds to render; subsequent loads use cache.
const thumbUrl = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`;



const Home = () => {
  const rowRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 576) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 992) setVisibleCount(3);
      else setVisibleCount(4);
    };

    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  useEffect(() => {
    const total = projectsList.length;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const itemWidth = row.clientWidth / visibleCount;
    const maxStart = Math.max(0, projectsList.length - visibleCount);
    const startIndex = Math.min(index, maxStart);

    row.scrollTo({
      left: startIndex * itemWidth,
      behavior: 'smooth',
    });
  }, [index, visibleCount]);

  return (
    <main>
      <section className='hero p-0 m-0 w-100' style={{ overflow: 'hidden' }}>
        <div
          id='heroCarousel'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            {/* Slide 1 — glowing circuit board / server room */}
            <div
              className='carousel-item active'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
              }}
            >
              <div className='carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100'>
                <h2 className='text-white fw-bold mb-3'>
                  Welcome to IT Servicing Hub
                </h2>
                <p className='text-white'>
                  IT, Cloud & Electronics Expert Services
                </p>
              </div>
            </div>

            <div
              className='carousel-item'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&auto=format')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
              }}
            >
              <div className='carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100'>
                <h2 className='text-white fw-bold mb-3'>Cloud & DevOps</h2>
                <p className='text-white'>
                  AWS | Azure | GCP | Kubernetes | CI/CD | Docker
                </p>
              </div>
            </div>

            <div
              className='carousel-item'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop&auto=format')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
              }}
            >
              <div className='carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100'>
                <h2 className='text-white fw-bold mb-3'>
                  Electronics Solutions
                </h2>
                <p className='text-white'>Full servicing under K Electronics</p>
              </div>
            </div>
          </div>

          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#heroCarousel'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon'></span>
          </button>

          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#heroCarousel'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon'></span>
          </button>
        </div>
      </section>

      <section className='section text-center mb-5 p-0'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Our Recent Projects</h2>
            <p>Live websites we have designed and developed for our clients</p>
          </div>

          <div className='project-row-wrapper'>
            <div
              className='project-row'
              id='projectRow'
              ref={rowRef}
              tabIndex={0}
            >
              {projectsList.map((project, idx) => {
                const style = {
                  flex: `0 0 ${100 / visibleCount}%`,
                  maxWidth: `${100 / visibleCount}%`,
                };

                return (
                  <a
                    key={idx}
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-item'
                    style={style}
                  >
                    {/* Screenshot fills the full card */}
                    <img
                      src={thumbUrl(project.url)}
                      alt={`${project.name} preview`}
                      loading='lazy'
                      onLoad={(e) => { e.target.style.opacity = 1; }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      style={{
                        width: '100%', height: '220px',
                        objectFit: 'cover', display: 'block',
                        opacity: 0, transition: 'opacity 0.4s ease',
                      }}
                    />
                    {/* Fallback if screenshot fails */}
                    <div style={{
                      display: 'none', width: '100%', height: '220px',
                      alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                      gap: '0.5rem', background: 'var(--surface-strong)', color: 'var(--accent-color)',
                    }}>
                      <i className='bi bi-globe2' style={{ fontSize: '2.5rem' }}></i>
                      <small style={{ color: 'var(--default-color)', fontSize: '0.8rem' }}>{project.name}</small>
                    </div>

                    {/* Always-visible bottom name bar */}
                    <div className='project-name-bar'>
                      <span className='project-tag-badge'>{project.tag}</span>
                      <span className='project-title'>{project.name}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
};

export default Home;
