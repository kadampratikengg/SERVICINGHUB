import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  const phone = process.env.REACT_APP_PHONE_NUMBER || '+91 9404360234';
  const whatsappNum = process.env.REACT_APP_WHATSAPP_NUMBER || '9404360234';
  const email = process.env.REACT_APP_EMAIL || 'info@itservicinghub.in';
  const address = process.env.REACT_APP_ADDRESS || 'Solapur, Maharashtra, India';

  if (!service) {
    return (
      <main className='app-shell py-5'>
        <div className='container section text-center'>
          <div className='p-5 bg-body-tertiary rounded-4 border max-w-650 mx-auto'>
            <div className='display-4 text-warning mb-3'>
              <i className='bi bi-exclamation-triangle-fill'></i>
            </div>
            <h2 className='fw-bold mb-3'>Service Page Not Found</h2>
            <p className='text-muted mb-4'>
              The requested service page (<code className='text-primary'>{slug}</code>) could not be located in our catalog.
            </p>
            <Link to='/services' className='btn btn-primary btn-lg rounded-pill px-4'>
              <i className='bi bi-arrow-left me-2'></i> Return to All Services
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='pb-5'>
      {/* ── 1. Service Detail Header / Hero Section ── */}
      <section className='services-hero-banner text-white mb-5'>
        <div className='container'>
          {/* Breadcrumb Navigation */}
          <nav aria-label='breadcrumb' className='mb-4'>
            <ol className='breadcrumb mb-0 bg-transparent p-0'>
              <li className='breadcrumb-item'>
                <Link to='/' className='text-white-50 text-decoration-none'>
                  Home
                </Link>
              </li>
              <li className='breadcrumb-item'>
                <Link to='/services' className='text-white-50 text-decoration-none'>
                  Services
                </Link>
              </li>
              <li className='breadcrumb-item active text-white fw-semibold' aria-current='page'>
                {service.title}
              </li>
            </ol>
          </nav>

          <div className='row align-items-center gy-4'>
            <div className='col-lg-8'>
              <div className='d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-25 border border-primary border-opacity-25 text-info mb-3'>
                <i className={`${service.iconClass} fs-6`}></i>
                <span className='fw-semibold small'>{service.category}</span>
                {service.badge && (
                  <span className='badge bg-info bg-opacity-25 text-info ms-2'>{service.badge}</span>
                )}
              </div>
              <h1 className='display-5 fw-bold text-white mb-3'>{service.title}</h1>
              <p className='lead text-white-50 fs-5 mb-4 max-w-750'>{service.subtitle}</p>
              <div className='d-flex gap-3 flex-wrap align-items-center'>
                <a href='#connect-with-us' className='btn btn-primary btn-lg px-4 py-3 rounded-pill shadow'>
                  Get Started <i className='bi bi-arrow-down-circle ms-2'></i>
                </a>
              </div>
            </div>
            <div className='col-lg-4 text-center text-lg-end'>
              <div className='p-4 rounded-4 bg-white bg-opacity-10 backdrop-blur border border-white border-opacity-10 d-inline-block text-center shadow-lg'>
                <div
                  className='service-icon-box mx-auto mb-3'
                  style={{ width: '80px', height: '80px', fontSize: '2.5rem' }}
                >
                  <i className={service.iconClass}></i>
                </div>
                <h6 className='text-white-50 small mb-1'>Service Category</h6>
                <div className='font-monospace text-info fw-bold mb-3'>{service.category}</div>
                <div className='badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill'>
                  <i className='bi bi-check-circle-fill me-1'></i> Active Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Service Deep-Dive Overview & Capabilities ── */}
      <section className='section py-4 mb-5'>
        <div className='container'>
          <div className='row gy-4'>
            {/* Left Main Content */}
            <div className='col-lg-8'>
              <div className='bg-body-tertiary border rounded-4 p-4 p-md-5 mb-4 shadow-sm'>
                <h3 className='fw-bold mb-3'>Overview</h3>
                {Array.isArray(service.overview) ? (
                  service.overview.map((paragraph, idx) => (
                    <p key={idx} className='text-muted fs-6 leading-relaxed mb-3'>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className='text-muted fs-6 leading-relaxed mb-4'>{service.overview}</p>
                )}

                {/* Tech Stack Pills */}
                {service.techStack && (
                  <div className='mb-4 pt-3 border-top'>
                    <h6 className='fw-bold mb-3 text-uppercase text-muted tracking-wider small'>
                      Technologies &amp; Tools Utilized
                    </h6>
                    <div className='d-flex flex-wrap gap-2'>
                      {service.techStack.map((tech, idx) => (
                        <span key={idx} className='bento-tech-pill bg-body border px-3 py-2 fs-6'>
                          <i className='bi bi-check2 text-primary me-1'></i> {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Key Engineering Capabilities Grid */}
              <div className='mb-5'>
                <h3 className='fw-bold mb-4'>Key Capabilities</h3>
                <div className='row gy-3'>
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className='col-md-6'>
                      <div className='bg-body-tertiary border rounded-4 p-4 h-100 position-relative'>
                        <div className='d-flex align-items-center gap-3 mb-2'>
                          <div className='service-icon-box flex-shrink-0' style={{ width: '44px', height: '44px' }}>
                            <i className={`${cap.icon || 'bi-check-circle'} fs-5`}></i>
                          </div>
                          <h6 className='fw-bold mb-0 fs-6'>{cap.title}</h6>
                        </div>
                        <p className='text-muted small mb-0'>{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Business Benefits */}
              {service.benefits && (
                <div className='bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-4 p-4 p-md-5 mb-4'>
                  <h4 className='fw-bold mb-3 text-primary'>
                    <i className='bi bi-graph-up-arrow me-2'></i> Strategic Business Benefits
                  </h4>
                  <div className='row gy-2'>
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className='col-md-6'>
                        <div className='d-flex align-items-start gap-2 text-body-secondary small'>
                          <i className='bi bi-patch-check-fill text-primary fs-6 mt-1 flex-shrink-0'></i>
                          <span>{b}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Clean Information Sidebar */}
            <div className='col-lg-4'>
              <div className='service-spec-sticky'>
                <div className='bg-body-tertiary border rounded-4 p-4 mb-4 shadow-sm'>
                  <h5 className='fw-bold mb-3'>Service Specification</h5>
                  <div className='d-flex flex-column gap-3 small'>
                    <div className='d-flex justify-content-between border-bottom pb-2'>
                      <span className='text-muted'>Category</span>
                      <span className='fw-semibold'>{service.category}</span>
                    </div>
                    <div className='d-flex justify-content-between border-bottom pb-2'>
                      <span className='text-muted'>Delivery Model</span>
                      <span className='fw-semibold'>Agile / Managed</span>
                    </div>
                    <div className='d-flex justify-content-between border-bottom pb-2'>
                      <span className='text-muted'>Support SLA</span>
                      <span className='fw-semibold text-success'>24/7 Available</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span className='text-muted'>Security</span>
                      <span className='fw-semibold text-primary'>Enterprise Grade</span>
                    </div>
                  </div>
                </div>

                <div className='p-4 rounded-4 bg-dark text-white border border-secondary border-opacity-25'>
                  <h6 className='fw-bold text-white mb-2'>Custom Requirements?</h6>
                  <p className='text-white-50 small mb-3'>
                    Have specific technical requirements or need a customized solution? Scroll down to connect with us directly.
                  </p>
                  <a href='#connect-with-us' className='btn btn-outline-light btn-sm w-100 rounded-pill'>
                    Connect With Us <i className='bi bi-arrow-down ms-1'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Single High-Impact "Connect With Us" Section (Displayed ONCE at bottom) ── */}
      <section id='connect-with-us' className='section py-5 bg-body-tertiary border-top'>
        <div className='container'>
          <div className='ambient-cta-card text-center mb-5'>
            <span className='bento-badge bg-white text-dark mb-3'>Connect With Us</span>
            <h2 className='display-6 fw-bold text-white mb-3'>
              Ready to Start Your <span className='text-gradient'>{service.title}</span> Project?
            </h2>
            <p className='text-white-50 max-w-650 mx-auto mb-4 fs-6'>
              Get in touch with our engineering team for technical consultation and project execution.
            </p>

            <div className='d-flex gap-3 justify-content-center flex-wrap mb-4'>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className='btn btn-primary btn-lg px-4 py-3 rounded-pill shadow'
              >
                <i className='bi bi-telephone-outbound-fill me-2'></i> Call {phone}
              </a>
              <a
                href={`https://wa.me/${whatsappNum.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello! I want to connect regarding ${service.title}.`)}`}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-success btn-lg px-4 py-3 rounded-pill shadow'
              >
                <i className='bi bi-whatsapp me-2'></i> WhatsApp
              </a>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(`Inquiry for ${service.title}`)}`}
                className='btn btn-outline-light btn-lg px-4 py-3 rounded-pill'
              >
                <i className='bi bi-envelope-at me-2'></i> Email
              </a>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-4 text-white-50 small flex-wrap pt-3 border-top border-white border-opacity-10'>
              <div>
                <i className='bi bi-geo-alt-fill text-info me-1'></i> {address}
              </div>
              <div>
                <i className='bi bi-clock-history text-success me-1'></i> 24/7 Helpdesk &amp; NOC Monitoring
              </div>
            </div>
          </div>

          <div className='text-center'>
            <Link to='/services' className='btn btn-outline-primary rounded-pill px-4 py-2'>
              <i className='bi bi-arrow-left me-2'></i> Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
