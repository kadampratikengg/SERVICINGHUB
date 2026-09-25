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
      {/* ── 1. Appinventiv / Apple Hero Section ── */}
      <section className='hero p-0 m-0 w-100' style={{ overflow: 'hidden' }}>
        <div
          id='heroCarousel'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            {/* Slide 1 — Main Engineering Vision */}
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
              <div className='carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100 px-3'>
                <div className='hero-pill-badge'>
                  <i className='bi bi-stars'></i> Premier Digital Product &amp; Cloud Agency
                </div>
                <h1 className='appinventiv-heading text-white mb-3 max-w-900'>
                  Transforming Vision into <span className='text-gradient'>World-Class Digital Products</span>
                </h1>
                <p className='text-white-50 fs-6 mb-4 max-w-750'>
                  We design, build, and scale custom software applications, cloud infrastructure, DevOps pipelines, and enterprise IT maintenance.
                </p>
                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                  <Link to='/contact' className='btn btn-primary btn-lg px-4 py-2'>
                    Talk to an Expert <i className='bi bi-arrow-right ms-2'></i>
                  </Link>
                  <Link to='/services' className='btn btn-outline-light btn-lg px-4 py-2'>
                    Explore Core Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 — Cloud & DevOps Infrastructure */}
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
              <div className='carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100 px-3'>
                <div className='hero-pill-badge'>
                  <i className='bi bi-cloud-check-fill'></i> Cloud Architecture &amp; DevOps
                </div>
                <h2 className='appinventiv-heading text-white mb-3 max-w-900'>
                  Next-Gen <span className='text-gradient'>Cloud &amp; DevOps Engineering</span>
                </h2>
                <p className='text-white-50 fs-6 mb-4 max-w-750'>
                  AWS | Azure | GCP | Kubernetes | Docker | Terraform | CI/CD Automation
                </p>
                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                  <Link to='/services' className='btn btn-primary btn-lg px-4 py-2'>
                    View Cloud Solutions <i className='bi bi-arrow-right ms-2'></i>
                  </Link>
                  <Link to='/contact' className='btn btn-outline-light btn-lg px-4 py-2'>
                    Consult an Architect
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 3 — Electronics & Hardware Servicing */}
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
              <div className='carousel-container d-flex flex-column justify-content-center align-items-center text-center h-100 px-3'>
                <div className='hero-pill-badge'>
                  <i className='bi bi-tools'></i> Hardware &amp; Electronics Servicing
                </div>
                <h2 className='appinventiv-heading text-white mb-3 max-w-900'>
                  Enterprise IT Infra &amp; <span className='text-gradient'>Electronics Solutions</span>
                </h2>
                <p className='text-white-50 fs-6 mb-4 max-w-750'>
                  Full hardware maintenance, CCTV security setups, and field servicing under K Electronics
                </p>
                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                  <Link to='/contact' className='btn btn-primary btn-lg px-4 py-2'>
                    Schedule Maintenance <i className='bi bi-arrow-right ms-2'></i>
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

      {/* ── 2. Impact Metrics Banner ── */}
      <section className='section pt-5 pb-4'>
        <div className='container'>
          <div className='stats-banner'>
            <div className='row text-center gy-4'>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>300+</h3>
                  <p>Digital Products Delivered</p>
                </div>
              </div>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>99.99%</h3>
                  <p>Infrastructure Uptime SLA</p>
                </div>
              </div>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>150+</h3>
                  <p>Certified Tech Engineers</p>
                </div>
              </div>
              <div className='col-6 col-md-3'>
                <div className='stat-item'>
                  <h3>98%</h3>
                  <p>Client Retention Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Appinventiv-Style Core Engineering Solutions ── */}
      <section className='section'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>End-to-End Digital Transformation Services</h2>
            <p>From concept to enterprise scale, we deliver full-cycle software, cloud, and IT maintenance solutions</p>
          </div>

          <div className='row gy-4'>
            {/* Solution 1 */}
            <div className='col-lg-4 col-md-6'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className='bi bi-code-slash'></i>
                </div>
                <h4 className='mb-3'>Digital Product &amp; Software Engineering</h4>
                <p className='text-muted mb-4'>
                  Custom web applications, enterprise microservices, mobile apps (React Native / Flutter), REST APIs, and scalable e-commerce portals.
                </p>
                <Link to='/services' className='fw-bold text-decoration-none'>
                  Explore Product Engineering <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>

            {/* Solution 2 */}
            <div className='col-lg-4 col-md-6'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className='bi bi-cloud-arrow-up'></i>
                </div>
                <h4 className='mb-3'>Cloud Architecture &amp; DevOps Automation</h4>
                <p className='text-muted mb-4'>
                  AWS/Azure migrations, Docker containerization, Kubernetes cluster management, CI/CD deployment pipelines, and Infrastructure as Code (Terraform).
                </p>
                <Link to='/services' className='fw-bold text-decoration-none'>
                  Explore Cloud &amp; DevOps <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>

            {/* Solution 3 */}
            <div className='col-lg-4 col-md-6'>
              <div className='feature-box'>
                <div className='feature-icon'>
                  <i className='bi bi-shield-lock'></i>
                </div>
                <h4 className='mb-3'>Cybersecurity &amp; Managed Operations</h4>
                <p className='text-muted mb-4'>
                  Cloudflare DDoS protection, SSL certificate management, vulnerability scanning, active threat monitoring, and 24/7 incident response.
                </p>
                <Link to='/services' className='fw-bold text-decoration-none'>
                  Explore Managed Security <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>
          </div>

          <div className='text-center mt-5'>
            <Link to='/services' className='btn btn-primary btn-lg px-4 py-3'>
              View All Services &amp; Technical Capabilities <i className='bi bi-arrow-right ms-2'></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Apple-Style Large Featured Projects Showcase (60FPS Slider) ── */}
      <section className='section text-center mb-5 p-0'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Featured Client Projects &amp; Case Studies</h2>
            <p>Explore live web applications and digital platforms we have built for leading businesses</p>
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

      {/* ── 5. Appinventiv-Style "Our Delivery Process" ── */}
      <section className='section bg-body-tertiary'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Our Proven 4-Step Engineering Process</h2>
            <p>How we take your idea from technical strategy to continuous deployment</p>
          </div>

          <div className='row gy-4'>
            <div className='col-md-6 col-lg-3'>
              <div className='process-step-card'>
                <div className='process-step-number'>01</div>
                <h5>Discovery &amp; Strategy</h5>
                <p className='text-muted small mb-0'>
                  Deep dive into user requirements, system architecture, database design, and cloud capacity planning.
                </p>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='process-step-card'>
                <div className='process-step-number'>02</div>
                <h5>UI/UX &amp; Prototyping</h5>
                <p className='text-muted small mb-0'>
                  Crafting Apple-grade interactive wireframes, design systems, and responsive user flows.
                </p>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='process-step-card'>
                <div className='process-step-number'>03</div>
                <h5>Agile Engineering</h5>
                <p className='text-muted small mb-0'>
                  High-speed sprint cycles, REST/GraphQL API integration, CI/CD pipelines, and rigorous code reviews.
                </p>
              </div>
            </div>

            <div className='col-md-6 col-lg-3'>
              <div className='process-step-card'>
                <div className='process-step-number'>04</div>
                <h5>Launch &amp; 24/7 Operations</h5>
                <p className='text-muted small mb-0'>
                  Zero-downtime deployment, cloud autoscaling, active security monitoring, and SLA maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Industries We Empower ── */}
      <section className='section text-center'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Industries We Empower</h2>
            <p>Delivering domain-specific software, cloud, and IT maintenance solutions</p>
          </div>

          <div className='row gy-4'>
            <div className='col-6 col-md-4 col-lg-2'>
              <div className='industry-card'>
                <i className='bi bi-credit-card-2-front industry-icon'></i>
                <h6 className='mb-0 fw-bold'>FinTech</h6>
              </div>
            </div>

            <div className='col-6 col-md-4 col-lg-2'>
              <div className='industry-card'>
                <i className='bi bi-cart3 industry-icon'></i>
                <h6 className='mb-0 fw-bold'>E-Commerce</h6>
              </div>
            </div>

            <div className='col-6 col-md-4 col-lg-2'>
              <div className='industry-card'>
                <i className='bi bi-heart-pulse industry-icon'></i>
                <h6 className='mb-0 fw-bold'>Healthcare</h6>
              </div>
            </div>

            <div className='col-6 col-md-4 col-lg-2'>
              <div className='industry-card'>
                <i className='bi bi-airplane industry-icon'></i>
                <h6 className='mb-0 fw-bold'>Travel &amp; Logistics</h6>
              </div>
            </div>

            <div className='col-6 col-md-4 col-lg-2'>
              <div className='industry-card'>
                <i className='bi bi-trophy industry-icon'></i>
                <h6 className='mb-0 fw-bold'>Sports &amp; Fitness</h6>
              </div>
            </div>

            <div className='col-6 col-md-4 col-lg-2'>
              <div className='industry-card'>
                <i className='bi bi-building industry-icon'></i>
                <h6 className='mb-0 fw-bold'>Enterprise IT</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Tech Stack Badges ── */}
      <section className='section text-center bg-body-tertiary'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Modern Tech Stack We Use</h2>
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
              <i className='bi bi-camera-video text-secondary'></i> CCTV Systems
            </span>
            <span className='tech-badge-item'>
              <i className='bi bi-terminal text-success'></i> Linux Servers
            </span>
          </div>
        </div>
      </section>

      {/* ── 8. Client Testimonials & Social Proof ── */}
      <section className='section'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Trusted by Business Leaders</h2>
            <p>See what enterprise CTOs and founders say about our engineering quality</p>
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

      {/* ── 9. Apple / Appinventiv High-Impact CTA Banner ── */}
      <section className='section pt-4'>
        <div className='container'>
          <div className='cta-section'>
            <h2 className='appinventiv-heading text-white mb-3'>
              Have a Project in Mind? <br /> Let&apos;s Build Something <span className='text-gradient'>Extraordinary</span>.
            </h2>
            <p className='mb-4 max-w-650 mx-auto text-white-50 fs-5'>
              Partner with IT Servicing Hub for software product engineering, cloud automation, and managed IT services.
            </p>
            <div className='d-flex gap-3 justify-content-center flex-wrap'>
              <Link to='/contact' className='btn btn-primary btn-lg px-4 py-3'>
                Talk to Our Tech Team <i className='bi bi-telephone ms-2'></i>
              </Link>
              <Link to='/services' className='btn btn-outline-light btn-lg px-4 py-3'>
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
