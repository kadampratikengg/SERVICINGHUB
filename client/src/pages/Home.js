import React, { useEffect, useRef, useState } from 'react';
import Services from './Services';

const projectsList = [
  {
    img: 'https://picsum.photos/600/400?random=101',
    name: 'AWS Cloud Migration',
  },
  {
    img: 'https://picsum.photos/600/400?random=102',
    name: 'DevOps CI/CD Setup',
  },
  {
    img: 'https://picsum.photos/600/400?random=103',
    name: 'React Corporate Website',
  },
  {
    img: 'https://picsum.photos/600/400?random=104',
    name: 'Kubernetes Deployment',
  },
  {
    img: 'https://picsum.photos/600/400?random=105',
    name: 'E-commerce Platform',
  },
  {
    img: 'https://picsum.photos/600/400?random=106',
    name: 'CCTV Office Installation',
  },
  {
    img: 'https://picsum.photos/600/400?random=107',
    name: 'Laptop & IT Infra Setup',
  },
  {
    img: 'https://picsum.photos/600/400?random=108',
    name: 'Cloudflare Security Setup',
  },
  {
    img: 'https://picsum.photos/600/400?random=109',
    name: 'Zoho Mail + CRM Setup',
  },
  {
    img: 'https://picsum.photos/600/400?random=110',
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
            <div
              className='carousel-item active'
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1920/1080?random=1')",
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
                  "url('https://picsum.photos/1920/1080?random=2')",
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
                  "url('https://picsum.photos/1920/1080?random=3')",
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
