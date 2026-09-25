import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  /* ===============================
      SOFTWARE & WEB DEVELOPMENT
  =============================== */
  const softwareDev = [
    {
      title: 'Software Development',
      desc: 'Custom business apps',
      slug: 'software-development',
      iconClass: 'bi bi-code-square',
    },
    {
      title: 'Web Application Development',
      desc: 'Full-stack systems',
      slug: 'web-application-development',
      iconClass: 'bi bi-window-stack',
    },
    {
      title: 'Mobile App (Hybrid)',
      desc: 'Android / iOS apps',
      slug: 'mobile-app-hybrid',
      iconClass: 'bi bi-phone',
    },
    {
      title: 'API Development',
      desc: 'Node.js / REST / JWT',
      slug: 'api-development',
      iconClass: 'bi bi-gear-wide-connected',
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful interfaces',
      slug: 'ui-ux-design',
      iconClass: 'bi bi-palette',
    },
    {
      title: 'E-commerce Development',
      desc: 'Online store setup',
      slug: 'e-commerce-development',
      iconClass: 'bi bi-cart3',
    },
  ];

  /* ===============================
        DEVOPS & AUTOMATION
  =============================== */
  const devopsServices = [
    {
      title: 'CI/CD Pipeline Setup',
      desc: 'GitHub, GitLab, Jenkins',
      slug: 'ci-cd-pipeline-setup',
      iconClass: 'bi bi-diagram-3',
    },
    {
      title: 'Docker Containerization',
      desc: 'Convert apps to containers',
      slug: 'docker-containerization',
      iconClass: 'bi bi-box-seam',
    },
    {
      title: 'Kubernetes Deployment',
      desc: 'Scalable microservices',
      slug: 'kubernetes-deployment',
      iconClass: 'bi bi-cpu',
    },
    {
      title: 'Infrastructure as Code',
      desc: 'Terraform, Ansible',
      slug: 'infrastructure-as-code',
      iconClass: 'bi bi-file-earmark-code',
    },
    {
      title: 'Monitoring & Alerts',
      desc: 'Prometheus, Grafana',
      slug: 'monitoring-and-alerts',
      iconClass: 'bi bi-activity',
    },
    {
      title: 'Automation Scripting',
      desc: 'Bash / Python',
      slug: 'automation-scripting',
      iconClass: 'bi bi-terminal',
    },
  ];

  /* ===============================
            CLOUD SERVICES
  =============================== */
  const cloudServices = [
    {
      title: 'AWS Cloud Setup',
      desc: 'EC2, IAM, S3, VPC',
      slug: 'aws-cloud-setup',
      iconClass: 'bi bi-cloud-check',
    },
    {
      title: 'Azure Cloud Setup',
      desc: 'VM, Storage, AD',
      slug: 'azure-cloud-setup',
      iconClass: 'bi bi-microsoft',
    },
    {
      title: 'Google Cloud (GCP)',
      desc: 'Compute, IAM, Storage',
      slug: 'google-cloud-gcp',
      iconClass: 'bi bi-cloud-arrow-up',
    },
    {
      title: 'DigitalOcean / VPS Setup',
      desc: 'Droplets, DNS, SSL',
      slug: 'digitalocean-vps-setup',
      iconClass: 'bi bi-hdd-network',
    },
    {
      title: 'Cloudflare Setup',
      desc: 'DNS, Proxy, Firewall',
      slug: 'cloudflare-setup',
      iconClass: 'bi bi-shield-shaded',
    },
    {
      title: 'Zoho Setup Support',
      desc: 'Mail, Books, CRM',
      slug: 'zoho-setup-support',
      iconClass: 'bi bi-envelope-at',
    },
    {
      title: 'Microsoft 365 Setup',
      desc: 'Outlook, Teams, OneDrive',
      slug: 'microsoft-365-setup',
      iconClass: 'bi bi-envelope-paper',
    },
    {
      title: 'DNS & Domain Setup',
      desc: 'Hosting + Domain linking',
      slug: 'dns-domain-setup',
      iconClass: 'bi bi-globe2',
    },
  ];

  /* ===============================
            SECURITY SERVICES
  =============================== */
  const securityServices = [
    {
      title: 'Firewall Setup',
      desc: 'Server & network security',
      slug: 'firewall-setup',
      iconClass: 'bi bi-shield-lock',
    },
    {
      title: 'Vulnerability Scan',
      desc: 'Security testing',
      slug: 'vulnerability-scan',
      iconClass: 'bi bi-bug',
    },
    {
      title: 'Backup Solutions',
      desc: 'Auto backup setup',
      slug: 'backup-solutions',
      iconClass: 'bi bi-database-up',
    },
    {
      title: 'SSL Certificate Setup',
      desc: 'HTTPS secure site',
      slug: 'ssl-certificate-setup',
      iconClass: 'bi bi-lock',
    },
  ];

  /* ===============================
      ELECTRONICS & MAINTENANCE
  =============================== */
  const electronics = [
    {
      title: 'CCTV Installation',
      desc: 'Home / Office CCTV',
      slug: 'cctv-installation',
      iconClass: 'bi bi-camera-video',
    },
    {
      title: 'Laptop Repair',
      desc: 'All brands supported',
      slug: 'laptop-repair',
      iconClass: 'bi bi-laptop',
    },
    {
      title: 'Desktop Repair',
      desc: 'Hardware + software',
      slug: 'desktop-repair',
      iconClass: 'bi bi-display',
    },
    {
      title: 'UPS Installation',
      desc: 'Home/Office UPS',
      slug: 'ups-installation',
      iconClass: 'bi bi-lightning-charge',
    },
    {
      title: 'Battery Replacement',
      desc: 'Inverter/UPS batteries',
      slug: 'battery-replacement',
      iconClass: 'bi bi-battery-charging',
    },
    {
      title: 'Appliance Repair',
      desc: 'AC, Fridge, Washing Machine',
      slug: 'appliance-repair',
      iconClass: 'bi bi-wrench-adjustable',
    },
    {
      title: 'Electrical Work',
      desc: 'Wiring & installation',
      slug: 'electrical-work',
      iconClass: 'bi bi-plug',
    },
    {
      title: 'Plumbing Services',
      desc: 'Repairs, installation',
      slug: 'plumbing-services',
      iconClass: 'bi bi-droplet',
    },
  ];

  /* ===============================
          UI COMPONENT RENDER
  =============================== */
  const renderSection = (title, list) => (
    <section className='services section mb-5'>
      <div className='container'>
        <div className='section-title text-center mb-5'>
          <h2>{title}</h2>
        </div>

        <div className='row gy-4'>
          {list.map((s, idx) => (
            <div key={idx} className='col-lg-3 col-md-6'>
              <Link
                to={`/services/${s.slug}`}
                className='text-decoration-none text-reset d-block h-100'
              >
                <div className='service-item text-center border rounded p-4 h-100 position-relative overflow-hidden'>
                  <div className='service-icon-box mx-auto mb-3'>
                    <i className={`${s.iconClass} fs-2`}></i>
                  </div>
                  <h4 className='mb-2'>{s.title}</h4>
                  <p className='text-muted small mb-0'>{s.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <main>
      {renderSection('Software & Web Development', softwareDev)}
      {renderSection('DevOps & Automation', devopsServices)}
      {renderSection('Cloud Services', cloudServices)}
      {renderSection('IT Security', securityServices)}
      {renderSection('Electronics & Maintenance', electronics)}
    </main>
  );
};

export default Services;
