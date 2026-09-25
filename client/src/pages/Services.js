import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  /* ===============================
      1. SOFTWARE & WEB DEVELOPMENT
  =============================== */
  const softwareDev = [
    {
      title: 'Software Development',
      desc: 'Custom enterprise desktop & business logic software built for efficiency.',
      slug: 'software-development',
      iconClass: 'bi bi-code-square',
    },
    {
      title: 'Web Application Development',
      desc: 'Scalable full-stack systems built with React.js, Node.js, and modern APIs.',
      slug: 'web-application-development',
      iconClass: 'bi bi-window-stack',
    },
    {
      title: 'Mobile App (Hybrid)',
      desc: 'High-performance cross-platform iOS & Android mobile apps using React Native / Flutter.',
      slug: 'mobile-app-hybrid',
      iconClass: 'bi bi-phone',
    },
    {
      title: 'API Development',
      desc: 'RESTful & GraphQL microservices, JWT authentication, and third-party integrations.',
      slug: 'api-development',
      iconClass: 'bi bi-gear-wide-connected',
    },
    {
      title: 'UI/UX Design',
      desc: 'Intuitive user interface design, interactive prototypes, and design systems.',
      slug: 'ui-ux-design',
      iconClass: 'bi bi-palette',
    },
    {
      title: 'E-commerce Development',
      desc: 'Custom online storefronts, inventory portals, and payment gateway setups.',
      slug: 'e-commerce-development',
      iconClass: 'bi bi-cart3',
    },
  ];

  /* ===============================
        2. DEVOPS & AUTOMATION
  =============================== */
  const devopsServices = [
    {
      step: '01',
      title: 'CI/CD Pipeline Setup',
      desc: 'Automated build, test, and release flows via GitHub Actions, GitLab CI, & Jenkins.',
      slug: 'ci-cd-pipeline-setup',
      iconClass: 'bi bi-diagram-3',
    },
    {
      step: '02',
      title: 'Docker Containerization',
      desc: 'Standardized application packaging with Docker containers for smooth cloud porting.',
      slug: 'docker-containerization',
      iconClass: 'bi bi-box-seam',
    },
    {
      step: '03',
      title: 'Kubernetes Deployment',
      desc: 'Production Kubernetes cluster setups (EKS, AKS, GKE) with auto-scaling & ingress.',
      slug: 'kubernetes-deployment',
      iconClass: 'bi bi-cpu',
    },
    {
      step: '04',
      title: 'Infrastructure as Code',
      desc: 'Reproducible, version-controlled cloud infrastructure using Terraform & Ansible.',
      slug: 'infrastructure-as-code',
      iconClass: 'bi bi-file-earmark-code',
    },
    {
      step: '05',
      title: 'Monitoring & Alerts',
      desc: 'Real-time cluster health, logging, and incident alerting via Prometheus & Grafana.',
      slug: 'monitoring-and-alerts',
      iconClass: 'bi bi-activity',
    },
    {
      step: '06',
      title: 'Automation Scripting',
      desc: 'Custom Python & Bash shell automation scripts for recurring server tasks.',
      slug: 'automation-scripting',
      iconClass: 'bi bi-terminal',
    },
  ];

  /* ===============================
            3. CLOUD SERVICES
  =============================== */
  const cloudServices = [
    {
      title: 'AWS Cloud Setup',
      desc: 'EC2, IAM, S3, RDS, Lambda & VPC architecture.',
      slug: 'aws-cloud-setup',
      iconClass: 'bi bi-cloud-check',
      badge: 'Premier',
    },
    {
      title: 'Azure Cloud Setup',
      desc: 'Virtual Machines, App Services, Active Directory & Blob storage.',
      slug: 'azure-cloud-setup',
      iconClass: 'bi bi-microsoft',
      badge: 'Enterprise',
    },
    {
      title: 'Google Cloud (GCP)',
      desc: 'Google Compute Engine, IAM roles, & BigQuery infrastructure.',
      slug: 'google-cloud-gcp',
      iconClass: 'bi bi-cloud-arrow-up',
    },
    {
      title: 'DigitalOcean / VPS Setup',
      desc: 'Droplets, managed databases, load balancers, & DNS configuration.',
      slug: 'digitalocean-vps-setup',
      iconClass: 'bi bi-hdd-network',
    },
    {
      title: 'Cloudflare Setup',
      desc: 'Global CDN, DNS routing, DDoS protection, & Web Application Firewall.',
      slug: 'cloudflare-setup',
      iconClass: 'bi bi-shield-shaded',
    },
    {
      title: 'Zoho Setup Support',
      desc: 'Zoho Mail, Books, CRM, & custom domain integration.',
      slug: 'zoho-setup-support',
      iconClass: 'bi bi-envelope-at',
    },
    {
      title: 'Microsoft 365 Setup',
      desc: 'Exchange Online, Teams, OneDrive, & enterprise security policies.',
      slug: 'microsoft-365-setup',
      iconClass: 'bi bi-envelope-paper',
    },
    {
      title: 'DNS & Domain Setup',
      desc: 'Domain DNS record management, MX/SPF/DKIM setup, & host linking.',
      slug: 'dns-domain-setup',
      iconClass: 'bi bi-globe2',
    },
  ];

  /* ===============================
            4. IT SECURITY
  =============================== */
  const securityServices = [
    {
      title: 'Firewall Setup',
      desc: 'Hardware & software firewall policy design for network perimeter protection.',
      slug: 'firewall-setup',
      iconClass: 'bi bi-shield-lock',
    },
    {
      title: 'Vulnerability Scan',
      desc: 'Deep security audits, port scanning, and OWASP vulnerability assessments.',
      slug: 'vulnerability-scan',
      iconClass: 'bi bi-bug',
    },
    {
      title: 'Backup Solutions',
      desc: 'Automated offsite backup schedules, database snapshots, & disaster recovery.',
      slug: 'backup-solutions',
      iconClass: 'bi bi-database-up',
    },
    {
      title: 'SSL Certificate Setup',
      desc: 'Wildcard SSL deployment, Let’s Encrypt auto-renewal, & HTTPS enforcement.',
      slug: 'ssl-certificate-setup',
      iconClass: 'bi bi-lock',
    },
  ];

  /* ===============================
      5. ELECTRONICS & MAINTENANCE
  =============================== */
  const electronics = [
    {
      title: 'CCTV Installation',
      desc: 'HD / IP camera installation, DVR/NVR configuration, and remote phone access.',
      slug: 'cctv-installation',
      iconClass: 'bi bi-camera-video',
    },
    {
      title: 'Laptop Repair',
      desc: 'Chip-level motherboard repair, screen replacement, & RAM/SSD upgrades for all brands.',
      slug: 'laptop-repair',
      iconClass: 'bi bi-laptop',
    },
    {
      title: 'Desktop Repair',
      desc: 'Custom PC assembly, hardware troubleshooting, OS reinstallation, & hardware maintenance.',
      slug: 'desktop-repair',
      iconClass: 'bi bi-display',
    },
    {
      title: 'UPS Installation',
      desc: 'Industrial & office power backup setup, online UPS installation, & load calculation.',
      slug: 'ups-installation',
      iconClass: 'bi bi-lightning-charge',
    },
    {
      title: 'Battery Replacement',
      desc: 'Inverter & UPS battery health check, terminal maintenance, & quick replacement.',
      slug: 'battery-replacement',
      iconClass: 'bi bi-battery-charging',
    },
    {
      title: 'Appliance Repair',
      desc: 'Commercial & office air conditioner, refrigerator, and appliance maintenance.',
      slug: 'appliance-repair',
      iconClass: 'bi bi-wrench-adjustable',
    },
    {
      title: 'Electrical Work',
      desc: 'Office wiring, distribution board setup, surge protection, & electrical fitting.',
      slug: 'electrical-work',
      iconClass: 'bi bi-plug',
    },
    {
      title: 'Plumbing Services',
      desc: 'Sanitary fitting, pipeline maintenance, & commercial facility plumbing maintenance.',
      slug: 'plumbing-services',
      iconClass: 'bi bi-droplet',
    },
  ];

  return (
    <main className='pb-5'>
      {/* ── Services Page Hero Banner ── */}
      <section className='services-hero-banner text-white mb-5'>
        <div className='container text-center'>
          <div className='d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-25 border border-primary border-opacity-25 text-info mb-3'>
            <i className='bi bi-layers-half'></i>
            <span className='fw-semibold small'>32 Specialized Engineering &amp; IT Services</span>
          </div>
          <h1 className='display-5 fw-bold text-white mb-3'>
            Comprehensive <span className='text-gradient'>Digital &amp; Infrastructure</span> Services
          </h1>
          <p className='text-white-50 max-w-750 mx-auto mb-4 fs-6'>
            Explore custom software product development, cloud architecture, zero-downtime DevOps pipelines, cybersecurity protection, and enterprise field maintenance under K Electronics.
          </p>

          {/* Quick Anchor Category Bar */}
          <div className='category-nav-bar justify-content-md-center container'>
            <a href='#software' className='category-nav-btn'>
              <i className='bi bi-code-slash me-1'></i> Software Dev
            </a>
            <a href='#devops' className='category-nav-btn'>
              <i className='bi bi-diagram-3 me-1'></i> DevOps
            </a>
            <a href='#cloud' className='category-nav-btn'>
              <i className='bi bi-cloud me-1'></i> Cloud Setup
            </a>
            <a href='#security' className='category-nav-btn'>
              <i className='bi bi-shield-lock me-1'></i> IT Security
            </a>
            <a href='#electronics' className='category-nav-btn'>
              <i className='bi bi-tools me-1'></i> K Electronics
            </a>
          </div>
        </div>
      </section>

      {/* ── Category 1: Software & Web Development (Asymmetric Layout) ── */}
      <section id='software' className='section py-4 mb-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Custom Engineering</span>
            <h2 className='fw-bold'>Software &amp; Web Application Engineering</h2>
            <p className='text-muted max-w-650 mx-auto'>
              From high-concurrency web portals to mobile apps and microservice APIs.
            </p>
          </div>

          <div className='row gy-4 align-items-stretch'>
            {/* Left Featured Hero Card */}
            <div className='col-lg-4'>
              <div className='service-lead-card d-flex flex-column justify-content-between'>
                <div>
                  <div className='d-inline-block px-3 py-1 rounded-pill bg-primary bg-opacity-25 text-info small fw-bold mb-3'>
                    <i className='bi bi-star-fill me-1'></i> Featured Solution
                  </div>
                  <h3 className='fw-bold mb-3 text-white'>Full-Stack Product Engineering</h3>
                  <p className='text-white-50 small mb-4'>
                    We partner with businesses to design, develop, and scale custom web platforms, mobile applications, and enterprise software using modern, production-tested tech stacks.
                  </p>
                  <div className='border-top border-secondary border-opacity-25 pt-3 mb-4'>
                    <div className='d-flex align-items-center gap-2 text-white-50 small mb-2'>
                      <i className='bi bi-check-circle-fill text-success'></i> Clean Code &amp; Modular Architecture
                    </div>
                    <div className='d-flex align-items-center gap-2 text-white-50 small mb-2'>
                      <i className='bi bi-check-circle-fill text-success'></i> Agile Sprint Delivery
                    </div>
                    <div className='d-flex align-items-center gap-2 text-white-50 small'>
                      <i className='bi bi-check-circle-fill text-success'></i> 100% Scalable Cloud Infrastructure
                    </div>
                  </div>
                </div>
                <div>
                  <Link to='/contact' className='btn btn-primary w-100 rounded-pill py-2 shadow-sm'>
                    Consult Software Architect <i className='bi bi-arrow-right ms-1'></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Grid of 6 Software Services */}
            <div className='col-lg-8'>
              <div className='row gy-3'>
                {softwareDev.map((item, idx) => (
                  <div key={idx} className='col-md-6'>
                    <Link to={`/services/${item.slug}`} className='text-decoration-none text-reset d-block h-100'>
                      <div className='service-item bg-body-tertiary border rounded-4 p-4 h-100 position-relative'>
                        <div className='d-flex align-items-start gap-3'>
                          <div className='service-icon-box flex-shrink-0'>
                            <i className={`${item.iconClass} fs-3`}></i>
                          </div>
                          <div>
                            <h5 className='fw-bold mb-1 fs-6'>{item.title}</h5>
                            <p className='text-muted small mb-0'>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category 2: DevOps & Automation (Horizontal Pipeline Step Grid) ── */}
      <section id='devops' className='section py-5 bg-body-tertiary mb-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Automation &amp; CI/CD</span>
            <h2 className='fw-bold'>DevOps &amp; Infrastructure Automation</h2>
            <p className='text-muted max-w-650 mx-auto'>
              Eliminate deployment bottlenecks and enforce reproducible, zero-downtime release cycles.
            </p>
          </div>

          <div className='devops-card-grid'>
            {devopsServices.map((item, idx) => (
              <Link key={idx} to={`/services/${item.slug}`} className='text-decoration-none text-reset'>
                <div className='devops-step-card h-100'>
                  <div className='d-flex align-items-center justify-content-between mb-3'>
                    <span className='devops-step-tag'>STEP {item.step}</span>
                    <i className={`${item.iconClass} text-primary fs-4`}></i>
                  </div>
                  <h5 className='fw-bold mb-2 fs-6'>{item.title}</h5>
                  <p className='text-muted small mb-0'>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category 3: Cloud Services (Bento Pill Grid) ── */}
      <section id='cloud' className='section py-4 mb-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge'>Cloud Platforms</span>
            <h2 className='fw-bold'>Cloud Infrastructure &amp; Ecosystem Setup</h2>
            <p className='text-muted max-w-650 mx-auto'>
              Architected on top cloud providers with active load balancing, security, and DNS configurations.
            </p>
          </div>

          <div className='row gy-3'>
            {cloudServices.map((item, idx) => (
              <div key={idx} className='col-lg-3 col-md-6'>
                <Link to={`/services/${item.slug}`} className='text-decoration-none text-reset d-block h-100'>
                  <div className='service-item bg-body-tertiary border rounded-4 p-4 h-100 d-flex flex-column justify-content-between'>
                    <div>
                      <div className='d-flex align-items-center justify-content-between mb-3'>
                        <div className='service-icon-box'>
                          <i className={`${item.iconClass} fs-3`}></i>
                        </div>
                        {item.badge && (
                          <span className='badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill'>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h5 className='fw-bold mb-2 fs-6'>{item.title}</h5>
                      <p className='text-muted small mb-0'>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category 4: IT Security (Shield Matrix Grid) ── */}
      <section id='security' className='section py-5 bg-body-tertiary mb-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='bento-badge bg-danger bg-opacity-10 text-danger border-danger border-opacity-25'>
              Cyber Defense
            </span>
            <h2 className='fw-bold'>IT Security &amp; Data Protection</h2>
            <p className='text-muted max-w-650 mx-auto'>
              Proactive vulnerability testing, firewall configurations, and automated offsite backups.
            </p>
          </div>

          <div className='row gy-4'>
            {securityServices.map((item, idx) => (
              <div key={idx} className='col-lg-3 col-md-6'>
                <Link to={`/services/${item.slug}`} className='text-decoration-none text-reset d-block h-100'>
                  <div className='security-card h-100 d-flex flex-column justify-content-between'>
                    <div>
                      <div className='d-flex align-items-center justify-content-between mb-3'>
                        <div className='service-icon-box' style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                          <i className={`${item.iconClass} fs-3`}></i>
                        </div>
                        <span className='security-status-badge'>
                          <span className='spinner-grow spinner-grow-sm text-success' style={{ width: '6px', height: '6px' }}></span>
                          SECURE
                        </span>
                      </div>
                      <h5 className='fw-bold mb-2 fs-6'>{item.title}</h5>
                      <p className='text-muted small mb-0'>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category 5: Electronics & Maintenance (K Electronics Division) ── */}
      <section id='electronics' className='section py-4 mb-5'>
        <div className='container'>
          <div className='section-title text-center mb-5'>
            <span className='electronics-badge mb-2 d-inline-block'>K Electronics Division</span>
            <h2 className='fw-bold'>Field Maintenance &amp; Hardware Servicing</h2>
            <p className='text-muted max-w-650 mx-auto'>
              Professional CCTV setup, laptop/desktop repairs, UPS battery installation, and facility servicing.
            </p>
          </div>

          <div className='row gy-3'>
            {electronics.map((item, idx) => (
              <div key={idx} className='col-lg-3 col-md-6'>
                <Link to={`/services/${item.slug}`} className='text-decoration-none text-reset d-block h-100'>
                  <div className='service-item bg-body-tertiary border rounded-4 p-4 h-100 d-flex flex-column justify-content-between'>
                    <div>
                      <div className='service-icon-box mb-3' style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' }}>
                        <i className={`${item.iconClass} fs-3`}></i>
                      </div>
                      <h5 className='fw-bold mb-2 fs-6'>{item.title}</h5>
                      <p className='text-muted small mb-0'>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call-To-Action Banner ── */}
      <section className='container'>
        <div className='ambient-cta-card'>
          <h2 className='fw-bold text-white mb-3 fs-3'>
            Need a Tailored Custom IT &amp; Engineering Package?
          </h2>
          <p className='text-white-50 max-w-650 mx-auto mb-4 fs-6'>
            Contact our engineering architects or get instant support via WhatsApp for customized SLA pricing &amp; project consultations.
          </p>
          <div className='d-flex gap-3 justify-content-center flex-wrap'>
            <Link to='/contact' className='btn btn-primary btn-lg px-4 py-3 rounded-pill shadow'>
              Contact Us <i className='bi bi-envelope ms-2'></i>
            </Link>
            <a href={`https://wa.me/919404360234`} target='_blank' rel='noopener noreferrer' className='btn btn-outline-light btn-lg px-4 py-3 rounded-pill'>
              WhatsApp Support <i className='bi bi-whatsapp ms-2'></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
