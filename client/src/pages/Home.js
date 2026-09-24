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


const Home = () => {
  const rowRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

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

  // Smooth auto-scroll carousel loop (pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      const row = rowRef.current;
      if (!row) return;

      const maxScrollLeft = row.scrollWidth - row.clientWidth;
      if (row.scrollLeft >= maxScrollLeft - 15) {
        row.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const cardWidth = row.firstElementChild
          ? row.firstElementChild.clientWidth + 16
          : 300;
        row.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (direction) => {
    const row = rowRef.current;
    if (!row) return;

    const cardWidth = row.firstElementChild
      ? row.firstElementChild.clientWidth + 16
      : 300;
    const amount = direction === 'left' ? -cardWidth : cardWidth;
    row.scrollBy({ left: amount, behavior: 'smooth' });
  };

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

          <div className='project-row-wrapper position-relative'>
            <button
              className='project-nav-btn prev-btn'
              onClick={() => handleScroll('left')}
              aria-label='Previous project'
              type='button'
            >
              <i className='bi bi-chevron-left'></i>
            </button>

            <div
              className='project-row'
              id='projectRow'
              ref={rowRef}
              tabIndex={0}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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
                    {/* Live website rendered via scaled iframe */}
                    <div className='project-iframe-container'>
                      <iframe
                        src={project.url}
                        title={project.name}
                        loading='lazy'
                        scrolling='no'
                        className='project-iframe'
                        tabIndex={-1}
                      />
                    </div>

                    {/* Transparent bottom name bar */}
                    <div className='project-name-bar'>
                      <span className='project-tag-badge'>{project.tag}</span>
                      <span className='project-title'>{project.name}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <button
              className='project-nav-btn next-btn'
              onClick={() => handleScroll('right')}
              aria-label='Next project'
              type='button'
            >
              <i className='bi bi-chevron-right'></i>
            </button>
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
};

export default Home;
