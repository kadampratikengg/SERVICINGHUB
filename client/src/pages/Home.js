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

  // Smooth auto-scroll carousel loop
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
      {/* ── 1. Modern Asymmetric Hero with System Terminal ── */}
      <section className='hero-split-section text-white'>
        <div className='hero-bg-glow'></div>
        <div className='container position-relative' style={{ zIndex: 1 }}>
          <div className='row align-items-center gy-5'>
            {/* Left Column — Strategic Pitch */}
            <div className='col-lg-7'>
              <div className='d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-25 border border-primary border-opacity-25 text-info mb-4'>
                <i className='bi bi-cpu-fill'></i>
                <span className='fw-semibold small'>Digital Product &amp; Cloud Engineering</span>
              </div>
              <h1 className='display-4 fw-bold mb-3 text-white lh-sm'>
                Architecting High-Performance <span className='text-gradient'>Digital Solutions</span> &amp; Cloud Systems
              </h1>
              <p className='lead text-white-50 mb-4 me-lg-4 fs-6'>
                We engineer scalable web applications, manage auto-scaling DevOps pipelines, and provide enterprise 24/7 IT infrastructure servicing tailored to your business needs.
              </p>
              <div className='d-flex gap-3 flex-wrap align-items-center mb-4'>
                <Link to='/contact' className='btn btn-primary btn-lg px-4 py-3 shadow-lg'>
                  Talk to an Engineer <i className='bi bi-arrow-right ms-2'></i>
                </Link>
                <Link to='/services' className='btn btn-outline-light btn-lg px-4 py-3'>
                  Explore Solutions
                </Link>
              </div>
              <div className='d-flex align-items-center gap-4 text-white-50 small border-top border-secondary border-opacity-25 pt-3'>
                <div className='d-flex align-items-center gap-2'>
                  <i className='bi bi-shield-check text-success fs-5'></i>
                  <span>99.99% SLA Uptime</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                  <i className='bi bi-code-square text-info fs-5'></i>
                  <span>300+ Products Delivered</span>
                </div>
              </div>
            </div>

            {/* Right Column — Interactive Status Terminal */}
            <div className='col-lg-5'>
              <div className='hero-terminal-card'>
                <div className='terminal-header'>
                  <div className='terminal-dots'>
                    <span className='dot-red'></span>
                    <span className='dot-yellow'></span>
                    <span className='dot-green'></span>
                  </div>
                  <div className='d-flex align-items-center gap-2 small text-muted font-monospace'>
                    <span className='spinner-grow spinner-grow-sm text-success' role='status' style={{ width: '8px', height: '8px' }}></span>
                    <span className='text-light'>sys-cluster-status: ACTIVE</span>
                  </div>
                </div>
                <div className='terminal-body'>
                  <div className='terminal-line'>
                    <span className='terminal-prompt'>sh-cli$</span>
                    <span className='terminal-cmd'>servicinghub cluster --status</span>
                  </div>
                  <div className='terminal-line'>
                    <span className='terminal-out'>Connecting to AWS &amp; Azure Nodes...</span>
                  </div>
                  <div className='terminal-line'>
                    <span className='terminal-success'>[OK]</span>
                    <span className='terminal-out'>Node 01 (AWS Mumbai): Operational (12ms)</span>
                  </div>
                  <div className='terminal-line'>
                    <span className='terminal-success'>[OK]</span>
                    <span className='terminal-out'>Node 02 (Azure Cloud): Operational (15ms)</span>
                  </div>
                  <div className='terminal-line'>
                    <span className='terminal-prompt'>sh-cli$</span>
                    <span className='terminal-cmd'>deploy --service=ecommerce-api</span>
                  </div>
                  <div className='terminal-line'>
                    <span className='terminal-success'>[SUCCESS]</span>
                    <span className='terminal-out'>Build #4092 Deployed via CI/CD Pipeline</span>
                  </div>
                  <div className='terminal-metrics-bar'>
                    <div className='terminal-stat'>
                      <div className='terminal-stat-num'>99.99%</div>
                      <div className='terminal-stat-lbl'>SLA Uptime</div>
                    </div>
                    <div className='terminal-stat'>
                      <div className='terminal-stat-num'>12ms</div>
                      <div className='terminal-stat-lbl'>API Latency</div>
                    </div>
                    <div className='terminal-stat'>
                      <div className='terminal-stat-num'>24/7</div>
                      <div className='terminal-stat-lbl'>NOC Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Minimal Horizontal Bento Metrics Bar ── */}
      <section className='py-4 border-bottom bg-body-tertiary'>
        <div className='container'>
          <div className='row text-center gy-3 divide-y divide-md-0'>
            <div className='col-6 col-md-3 border-end-md'>
              <div className='p-2'>
                <h3 className='fw-bold mb-0 text-primary'>300+</h3>
                <small className='text-muted text-uppercase tracking-wider fw-semibold'>Products Delivered</small>
              </div>
            </div>
            <div className='col-6 col-md-3 border-end-md'>
              <div className='p-2'>
                <h3 className='fw-bold mb-0 text-primary'>99.99%</h3>
                <small className='text-muted text-uppercase tracking-wider fw-semibold'>Cloud Infrastructure SLA</small>
              </div>
            </div>
            <div className='col-6 col-md-3 border-end-md'>
              <div className='p-2'>
                <h3 className='fw-bold mb-0 text-primary'>150+</h3>
                <small className='text-muted text-uppercase tracking-wider fw-semibold'>Certified Engineers</small>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='p-2'>
                <h3 className='fw-bold mb-0 text-primary'>24 / 7</h3>
                <small className='text-muted text-uppercase tracking-wider fw-semibold'>Active NOC Monitoring</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Asymmetric Bento Grid Solutions Section ── */}
      <section className='section py-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Capabilities</span>
            <h2 className='fw-bold'>Engineering Solutions &amp; Infrastructure</h2>
            <p className='text-muted max-w-650 mx-auto'>
              Tailored software engineering, cloud automation, and hardware IT maintenance engineered for reliability and scale.
            </p>
          </div>

          <div className='bento-grid-container'>
            {/* Bento Card 1 (8 Columns Wide) — Digital Product & Software Engineering */}
            <div className='bento-card bento-card-8 d-flex flex-column justify-content-between'>
              <div>
                <span className='bento-badge'><i className='bi bi-code-slash me-1'></i> Core Engineering</span>
                <h3 className='fw-bold mb-3'>Digital Product &amp; Software Development</h3>
                <p className='text-muted mb-4'>
                  We build custom web portals, enterprise microservices, cross-platform mobile applications, and secure RESTful APIs designed for high concurrency and ultra-low latency.
                </p>
                <div className='d-flex flex-wrap gap-2 mb-4'>
                  <span className='bento-tech-pill'>React.js</span>
                  <span className='bento-tech-pill'>Node.js / Express</span>
                  <span className='bento-tech-pill'>Python &amp; Django</span>
                  <span className='bento-tech-pill'>PostgreSQL / MongoDB</span>
                  <span className='bento-tech-pill'>REST &amp; GraphQL</span>
                  <span className='bento-tech-pill'>Flutter Mobile</span>
                </div>
              </div>
              <div>
                <Link to='/services' className='btn btn-outline-primary rounded-pill px-4'>
                  Explore Product Engineering <i className='bi bi-arrow-right ms-2'></i>
                </Link>
              </div>
            </div>

            {/* Bento Card 2 (4 Columns Wide) — Cloud Architecture & DevOps */}
            <div className='bento-card bento-card-4 d-flex flex-column justify-content-between'>
              <div>
                <span className='bento-badge'><i className='bi bi-cloud-arrow-up me-1'></i> DevOps</span>
                <h3 className='fw-bold mb-3'>Cloud &amp; DevOps</h3>
                <p className='text-muted mb-4'>
                  AWS/Azure migrations, Docker container orchestration, Terraform Infrastructure as Code, and automated CI/CD pipelines.
                </p>
                <div className='p-3 bg-body-tertiary rounded-3 border mb-4 font-monospace small'>
                  <div className='text-success'><i className='bi bi-check2-circle me-1'></i> AWS / Azure Certified</div>
                  <div className='text-success'><i className='bi bi-check2-circle me-1'></i> Zero-Downtime Deploy</div>
                  <div className='text-success'><i className='bi bi-check2-circle me-1'></i> Kubernetes Clusters</div>
                </div>
              </div>
              <div>
                <Link to='/services' className='btn btn-outline-primary rounded-pill px-4 w-100 text-center'>
                  Cloud Solutions <i className='bi bi-arrow-right ms-1'></i>
                </Link>
              </div>
            </div>

            {/* Bento Card 3 (12 Columns Wide) — Managed IT, Security & Electronics */}
            <div className='bento-card bento-card-12'>
              <div className='row align-items-center gy-4'>
                <div className='col-lg-6 border-end-lg'>
                  <span className='bento-badge'><i className='bi bi-shield-lock me-1'></i> Cybersecurity</span>
                  <h4 className='fw-bold mb-2'>Cybersecurity &amp; DDoS Protection</h4>
                  <p className='text-muted mb-0'>
                    Cloudflare active edge shield, automated SSL renewal, vulnerability testing, and active threat mitigation to protect business critical assets.
                  </p>
                </div>
                <div className='col-lg-6'>
                  <span className='bento-badge'><i className='bi bi-tools me-1'></i> Hardware Maintenance</span>
                  <h4 className='fw-bold mb-2'>IT Maintenance &amp; Electronics Servicing</h4>
                  <p className='text-muted mb-0'>
                    Field operations under K Electronics — CCTV security setups, server rack assembly, hardware diagnostic maintenance, and network cabling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Featured Client Projects Showcase ── */}
      <section className='section py-5 bg-body-tertiary text-center'>
        <div className='container'>
          <div className='section-title text-center mb-4'>
            <h2>Featured Client Portfolios &amp; Web Apps</h2>
            <p>Live production systems engineered and maintained by our team</p>
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

      {/* ── 5. Staggered Vertical Pipeline Process Section ── */}
      <section className='section py-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Execution</span>
            <h2 className='fw-bold'>Our 4-Step Engineering Pipeline</h2>
            <p className='text-muted max-w-650 mx-auto'>
              A structured software delivery model focused on clarity, rapid execution, and robust deployment.
            </p>
          </div>

          <div className='process-pipeline'>
            {/* Step 1 */}
            <div className='pipeline-item'>
              <div className='pipeline-node'>01</div>
              <div className='pipeline-content shadow-sm'>
                <h5 className='fw-bold mb-2 text-primary'>Discovery &amp; Architecture</h5>
                <p className='text-muted small mb-0'>
                  We analyze your functional requirements, define database schemas, choose technical stacks, and lay down system architecture diagrams.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className='pipeline-item'>
              <div className='pipeline-node'>02</div>
              <div className='pipeline-content shadow-sm'>
                <h5 className='fw-bold mb-2 text-primary'>UI/UX &amp; Prototype Sprint</h5>
                <p className='text-muted small mb-0'>
                  High-fidelity wireframing and user experience prototypes tailored to customer flows and brand aesthetics.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className='pipeline-item'>
              <div className='pipeline-node'>03</div>
              <div className='pipeline-content shadow-sm'>
                <h5 className='fw-bold mb-2 text-primary'>Agile Engineering &amp; Testing</h5>
                <p className='text-muted small mb-0'>
                  Sprint-based software development with continuous code reviews, unit testing, and automated security scans.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className='pipeline-item'>
              <div className='pipeline-node'>04</div>
              <div className='pipeline-content shadow-sm'>
                <h5 className='fw-bold mb-2 text-primary'>Cloud Launch &amp; 24/7 Operations</h5>
                <p className='text-muted small mb-0'>
                  Zero-downtime deployment to cloud environments, continuous monitoring, and ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Minimal Industry Matrix ── */}
      <section className='section py-5 bg-body-tertiary'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Sectors</span>
            <h2 className='fw-bold'>Industries We Empower</h2>
            <p className='text-muted max-w-650 mx-auto'>
              Delivering specialized IT and cloud solutions across key commercial sectors
            </p>
          </div>

          <div className='matrix-grid'>
            <div className='matrix-card'>
              <div className='matrix-icon-box'><i className='bi bi-bank'></i></div>
              <div>
                <h6 className='fw-bold mb-1'>FinTech &amp; Banking</h6>
                <p className='text-muted small mb-0'>Secure payment gateways &amp; ledger systems</p>
              </div>
            </div>

            <div className='matrix-card'>
              <div className='matrix-icon-box'><i className='bi bi-cart3'></i></div>
              <div>
                <h6 className='fw-bold mb-1'>E-Commerce &amp; Retail</h6>
                <p className='text-muted small mb-0'>High-conversion web platforms &amp; inventory</p>
              </div>
            </div>

            <div className='matrix-card'>
              <div className='matrix-icon-box'><i className='bi bi-heart-pulse'></i></div>
              <div>
                <h6 className='fw-bold mb-1'>Healthcare Technology</h6>
                <p className='text-muted small mb-0'>Patient portals &amp; HIPAA compliant databases</p>
              </div>
            </div>

            <div className='matrix-card'>
              <div className='matrix-icon-box'><i className='bi bi-globe-americas'></i></div>
              <div>
                <h6 className='fw-bold mb-1'>Travel &amp; Logistics</h6>
                <p className='text-muted small mb-0'>Booking portals &amp; real-time tracking apps</p>
              </div>
            </div>

            <div className='matrix-card'>
              <div className='matrix-icon-box'><i className='bi bi-trophy'></i></div>
              <div>
                <h6 className='fw-bold mb-1'>Sports &amp; Fitness</h6>
                <p className='text-muted small mb-0'>Academy portals &amp; membership management</p>
              </div>
            </div>

            <div className='matrix-card'>
              <div className='matrix-icon-box'><i className='bi bi-building'></i></div>
              <div>
                <h6 className='fw-bold mb-1'>Enterprise IT</h6>
                <p className='text-muted small mb-0'>Managed hardware, CCTV &amp; network infra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Asymmetric Testimonial Section ── */}
      <section className='section py-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Client Stories</span>
            <h2 className='fw-bold'>Trusted by Tech Founders &amp; Leaders</h2>
          </div>

          <div className='row gy-4 align-items-center'>
            <div className='col-lg-6'>
              <div className='p-4 p-md-5 rounded-4 bg-primary text-white position-relative shadow-lg'>
                <div className='fs-1 opacity-50 mb-3'><i className='bi bi-quote'></i></div>
                <p className='fs-5 fw-normal mb-4'>
                  &ldquo;IT Servicing Hub seamlessly migrated our core database infrastructure to AWS with zero downtime. Their DevOps team is remarkably fast, reliable, and thorough.&rdquo;
                </p>
                <div className='d-flex align-items-center gap-3'>
                  <div className='rounded-circle bg-white text-primary fw-bold d-flex align-items-center justify-content-center' style={{ width: '48px', height: '48px' }}>
                    RS
                  </div>
                  <div>
                    <h6 className='fw-bold mb-0 text-white'>Rajesh Sharma</h6>
                    <small className='text-white-50'>CTO, FinTech Solutions</small>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-6'>
              <div className='d-flex flex-column gap-4'>
                <div className='p-4 rounded-4 bg-body-tertiary border'>
                  <div className='text-warning mb-2'>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                  </div>
                  <p className='text-muted small mb-3'>
                    &ldquo;Delivered our e-commerce application on schedule. Their full-stack engineers integrated custom payment APIs flawlessly.&rdquo;
                  </p>
                  <div className='fw-bold small'>Ananya Patel &mdash; <span className='text-muted fw-normal'>Founder, Satvik Nutrition</span></div>
                </div>

                <div className='p-4 rounded-4 bg-body-tertiary border'>
                  <div className='text-warning mb-2'>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                    <i className='bi bi-star-fill me-1'></i>
                  </div>
                  <p className='text-muted small mb-3'>
                    &ldquo;Reliable hardware servicing and office CCTV installation under K Electronics. Direct contact and quick turnarounds.&rdquo;
                  </p>
                  <div className='fw-bold small'>Vikram Kulkarni &mdash; <span className='text-muted fw-normal'>Operations Lead</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Minimal Ambient Call to Action Banner ── */}
      <section className='py-5'>
        <div className='container'>
          <div className='ambient-cta-card'>
            <span className='bento-badge bg-white text-dark mb-3'>Ready to Scale?</span>
            <h2 className='display-6 fw-bold text-white mb-3'>
              Let&apos;s Build Your Next <span className='text-gradient'>Digital Product</span> Together
            </h2>
            <p className='text-white-50 max-w-650 mx-auto mb-4 fs-6'>
              Talk with our senior engineering team today to review your project scope, technical requirements, or cloud infrastructure setup.
            </p>
            <div className='d-flex gap-3 justify-content-center flex-wrap'>
              <Link to='/contact' className='btn btn-primary btn-lg px-4 py-3 shadow'>
                Get Free Consultation <i className='bi bi-telephone ms-2'></i>
              </Link>
              <a href={`https://wa.me/919404360234`} target='_blank' rel='noopener noreferrer' className='btn btn-outline-light btn-lg px-4 py-3'>
                Chat on WhatsApp <i className='bi bi-whatsapp ms-2'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
