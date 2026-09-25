import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

// High-speed website screenshot API (60FPS ultra-smooth scrolling)
const getScreenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

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
      {/* ── 1. Hero Banner Carousel ── */}
      <section className='hero p-0 m-0 w-100' style={{ overflow: 'hidden' }}>
        <div
          id='heroCarousel'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            {/* Slide 1 — Main Overview */}
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
                <p className='text-white mb-4'>
                  Modern Software Engineering, Cloud Operations &amp; Electronics Servicing
                </p>
                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                  <Link to='/contact' className='btn btn-primary btn-lg'>
                    Get Started Now
                  </Link>
                  <Link to='/services' className='btn btn-outline-light btn-lg'>
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 — Cloud & DevOps */}
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
                <h2 className='text-white fw-bold mb-3'>Cloud &amp; DevOps Automation</h2>
                <p className='text-white mb-4'>
                  AWS | Azure | GCP | Kubernetes | CI/CD | Docker | Terraform
                </p>
                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                  <Link to='/services' className='btn btn-primary btn-lg'>
                    View Cloud Solutions
                  </Link>
                  <Link to='/contact' className='btn btn-outline-light btn-lg'>
                    Consult an Architect
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 3 — Electronics & Infrastructure */}
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
                  Electronics &amp; IT Maintenance
                </h2>
                <p className='text-white mb-4'>
                  Full hardware servicing, CCTV installation &amp; infrastructure support under K Electronics
                </p>
                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                  <Link to='/contact' className='btn btn-primary btn-lg'>
                    Book Servicing
                  </Link>
                </div>
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

      {/* ── 2. Key Metrics Bar ── */}
      <section className='section pt-5 pb-4'>
        <div className='container'>
          <div className='stats-banner'>
            <div className='row text-center gy-4'>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>150+</h3>
                  <p>Projects Delivered</p>
                </div>
              </div>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>99.9%</h3>
                  <p>Uptime SLA Guarantee</p>
                </div>
              </div>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>24/7</h3>
                  <p>Managed IT Support</p>
                </div>
              </div>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>100+</h3>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Featured Service Pillars ── */}
      <section className='section'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Our Core Expertise</h2>
            <p>Comprehensive technology services tailored for startups, SMEs, and enterprises</p>
          </div>

          <div className='row gy-4'>
            {/* Pillar 1 */}
            <div className='col-lg-4 col-md-6'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className='bi bi-code-slash'></i>
                </div>
                <h4 className='mb-3'>Software &amp; Web Solutions</h4>
                <p className='text-muted mb-4'>
                  Custom web apps, enterprise full-stack portals, REST APIs, and high-conversion e-commerce platforms engineered for scale.
                </p>
                <Link to='/services' className='fw-bold text-decoration-none'>
                  Learn More <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className='col-lg-4 col-md-6'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className='bi bi-cloud-check'></i>
                </div>
                <h4 className='mb-3'>Cloud &amp; DevOps Engineering</h4>
                <p className='text-muted mb-4'>
                  AWS/Azure migrations, Docker containerization, Kubernetes orchestrations, CI/CD automation, and Infrastructure as Code.
                </p>
                <Link to='/services' className='fw-bold text-decoration-none'>
                  Learn More <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className='col-lg-4 col-md-6'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className='bi bi-tools'></i>
                </div>
                <h4 className='mb-3'>IT &amp; Electronics Servicing</h4>
                <p className='text-muted mb-4'>
                  Laptop &amp; desktop repairs, CCTV security installations, UPS battery replacement, and network infrastructure maintenance.
                </p>
                <Link to='/services' className='fw-bold text-decoration-none'>
                  Learn More <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>
          </div>

          <div className='text-center mt-5'>
            <Link to='/services' className='btn btn-primary btn-lg'>
              Explore All Services <i className='bi bi-arrow-right ms-2'></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Our Recent Projects Showcase ── */}
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
                    {/* Live website preview image (60FPS smooth scroll) */}
                    <div className='project-img-container'>
                      <img
                        src={getScreenshotUrl(project.url)}
                        alt={`${project.name} preview`}
                        loading='lazy'
                        className='project-img'
                        onLoad={(e) => {
                          e.target.classList.add('loaded');
                        }}
                        onError={(e) => {
                          e.target.src = `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.url)}?w=800&h=500`;
                        }}
                      />
                    </div>

                    {/* Bottom name bar */}
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

      {/* ── 5. Why Choose Us ── */}
      <section className='section bg-body-tertiary'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Why Choose IT Servicing Hub?</h2>
            <p>We combine modern tech stack with reliable, hands-on operational delivery</p>
          </div>

          <div className='row gy-4'>
            <div className='col-md-6 col-lg-3'>
              <div className='surface-panel p-4 h-100 text-center'>
                <div className='feature-icon mx-auto'>
                  <i className='bi bi-lightning-charge'></i>
                </div>
                <h5>Rapid Turnaround</h5>
                <p className='text-muted small mb-0'>
                  Fast delivery and agile sprints to launch your digital products on time.
                </p>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='surface-panel p-4 h-100 text-center'>
                <div className='feature-icon mx-auto'>
                  <i className='bi bi-shield-check'></i>
                </div>
                <h5>Robust Security</h5>
                <p className='text-muted small mb-0'>
                  Enterprise-grade encryption, vulnerability scanning, and SSL configurations.
                </p>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='surface-panel p-4 h-100 text-center'>
                <div className='feature-icon mx-auto'>
                  <i className='bi bi-people'></i>
                </div>
                <h5>Certified Engineers</h5>
                <p className='text-muted small mb-0'>
                  Experienced cloud architects, full-stack developers, and hardware technicians.
                </p>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='surface-panel p-4 h-100 text-center'>
                <div className='feature-icon mx-auto'>
                  <i className='bi bi-headset'></i>
                </div>
                <h5>24/7 Monitoring</h5>
                <p className='text-muted small mb-0'>
                  Proactive system tracking and rapid incident support to minimize downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Tech Stack Badges ── */}
      <section className='section text-center'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Technologies We Master</h2>
            <p>Built with industry-standard frameworks, cloud platforms, and security tools</p>
          </div>

          <div className='d-flex flex-wrap justify-content-center gap-3'>
            <span className='tech-badge-item'>
              <i className='bi bi-layers text-primary'></i> React.js
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-cpu text-success'></i> Node.js
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-cloud text-warning'></i> AWS Cloud
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-box-seam text-info'></i> Docker
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-diagram-3 text-primary'></i> Kubernetes
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-shield-lock text-danger'></i> Cloudflare
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-microsoft text-info'></i> Azure
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-camera-video text-secondary'></i> CCTV &amp; Security
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-terminal text-success'></i> Linux Servers
            </span>
          </div>
        </div>
      </section>

      {/* ── 7. Client Testimonials ── */}
      <section className='section bg-body-tertiary'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>What Our Clients Say</h2>
            <p>Trusted by business owners, organizations, and tech teams</p>
          </div>

          <div className='row gy-4'>
            <div className='col-lg-4 col-md-6'>
              <div className='testimonial-card'>
                <p className='testimonial-quote'>
                  &ldquo;IT Servicing Hub migrated our entire server infrastructure to AWS smoothly with zero downtime. Their DevOps expertise is top-notch!&rdquo;
                </p>
                <div className='testimonial-author'>
                  <div className='testimonial-avatar'>RS</div>
                  <div>
                    <h6 className='mb-0 fw-bold'>Rajesh Sharma</h6>
                    <small className='text-muted'>CTO, FinTech Startup</small>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='testimonial-card'>
                <p className='testimonial-quote'>
                  &ldquo;Extremely fast web development delivery. They built our e-commerce portal and integrated payment gateways in record time.&rdquo;
                </p>
                <div className='testimonial-author'>
                  <div className='testimonial-avatar'>AP</div>
                  <div>
                    <h6 className='mb-0 fw-bold'>Ananya Patel</h6>
                    <small className='text-muted'>Founder, Satvik Nutrition</small>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='testimonial-card'>
                <p className='testimonial-quote'>
                  &ldquo;Prompt IT hardware maintenance and CCTV setup for our offices. Professional team with dependable support.&rdquo;
                </p>
                <div className='testimonial-author'>
                  <div className='testimonial-avatar'>VK</div>
                  <div>
                    <h6 className='mb-0 fw-bold'>Vikram Kulkarni</h6>
                    <small className='text-muted'>Operations Lead</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Call to Action Banner ── */}
      <section className='section pt-4'>
        <div className='container'>
          <div className='cta-section'>
            <h2 className='fw-bold mb-3'>Ready to Transform Your IT Infrastructure?</h2>
            <p className='mb-4 max-w-600 mx-auto text-muted fs-5'>
              Partner with IT Servicing Hub for reliable software engineering, cloud automation, and hardware support.
            </p>
            <div className='d-flex gap-3 justify-content-center flex-wrap'>
              <Link to='/contact' className='btn btn-primary btn-lg'>
                Contact Us Today <i className='bi bi-telephone ms-2'></i>
              </Link>
              <Link to='/services' className='btn btn-outline-primary btn-lg'>
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
