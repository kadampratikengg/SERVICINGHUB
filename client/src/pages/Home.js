import React, { useEffect, useRef, useState } from 'react';
import Services from './Services';

const projectsList = [
  {
    // AWS cloud — data center server racks
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format',
    name: 'AWS Cloud Migration',
  },
  {
    // DevOps CI/CD — code on dual monitors
    img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop&auto=format',
    name: 'DevOps CI/CD Setup',
  },
  {
    // Web development — coding on laptop
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&auto=format',
    name: 'React Corporate Website',
  },
  {
    // Kubernetes / containers — abstract network nodes
    img: 'https://images.unsplash.com/photo-1640552435388-a54879e72b28?w=600&h=400&fit=crop&auto=format',
    name: 'Kubernetes Deployment',
  },
  {
    // E-commerce — online shopping / payment
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
    name: 'E-commerce Platform',
  },
  {
    // CCTV — security camera on building
    img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop&auto=format',
    name: 'CCTV Office Installation',
  },
  {
    // Laptop IT setup — open laptop with tools
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=400&fit=crop&auto=format',
    name: 'Laptop & IT Infra Setup',
  },
  {
    // Cybersecurity / firewall — padlock on circuit board
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop&auto=format',
    name: 'Cloudflare Security Setup',
  },
  {
    // CRM / email — business dashboard on screen
    img: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&h=400&fit=crop&auto=format',
    name: 'Zoho Mail + CRM Setup',
  },
  {
    // Azure / cloud identity — glowing cloud network
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&auto=format',
    name: 'Azure Active Directory Setup',
  },
];

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
                  Welcome to ServiceHub Technologies
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
          <h2 className='mb-4'>Our Recent Projects</h2>

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
                  <div key={idx} className='project-item' style={style}>
                    <img src={project.img} alt={project.name} />
                    <h5>{project.name}</h5>
                  </div>
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
