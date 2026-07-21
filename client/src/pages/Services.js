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
      icon: 'https://cdn-icons-png.flaticon.com/512/9068/9068689.png',
    },
    {
      title: 'Web Application Development',
      desc: 'Full-stack systems',
      slug: 'web-application-development',
      icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721296.png',
    },
    {
      title: 'Mobile App (Hybrid)',
      desc: 'Android / iOS apps',
      slug: 'mobile-app-hybrid',
      icon: 'https://cdn-icons-png.flaticon.com/512/814/814513.png',
    },
    {
      title: 'API Development',
      desc: 'Node.js / REST / JWT',
      slug: 'api-development',
      icon: 'https://cdn-icons-png.flaticon.com/512/2906/2906274.png',
    },
    {
      title: 'UI/UX Design',
      desc: 'Beautiful interfaces',
      slug: 'ui-ux-design',
      icon: 'https://cdn-icons-png.flaticon.com/512/1829/1829586.png',
    },
    {
      title: 'E-commerce Development',
      desc: 'Online store setup',
      slug: 'e-commerce-development',
      icon: 'https://cdn-icons-png.flaticon.com/512/891/891462.png',
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
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png',
    },
    {
      title: 'Docker Containerization',
      desc: 'Convert apps to containers',
      slug: 'docker-containerization',
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    },
    {
      title: 'Kubernetes Deployment',
      desc: 'Scalable microservices',
      slug: 'kubernetes-deployment',
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919852.png',
    },
    {
      title: 'Infrastructure as Code',
      desc: 'Terraform, Ansible',
      slug: 'infrastructure-as-code',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    },
    {
      title: 'Monitoring & Alerts',
      desc: 'Prometheus, Grafana',
      slug: 'monitoring-and-alerts',
      icon: 'https://cdn-icons-png.flaticon.com/512/8459/8459891.png',
    },
    {
      title: 'Automation Scripting',
      desc: 'Bash / Python',
      slug: 'automation-scripting',
      icon: 'https://cdn-icons-png.flaticon.com/512/3097/3097009.png',
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
      icon: 'https://cdn-icons-png.flaticon.com/512/873/873120.png',
    },
    {
      title: 'Azure Cloud Setup',
      desc: 'VM, Storage, AD',
      slug: 'azure-cloud-setup',
      icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    },
    {
      title: 'Google Cloud (GCP)',
      desc: 'Compute, IAM, Storage',
      slug: 'google-cloud-gcp',
      icon: 'https://cdn-icons-png.flaticon.com/512/6124/6124991.png',
    },
    {
      title: 'DigitalOcean / VPS Setup',
      desc: 'Droplets, DNS, SSL',
      slug: 'digitalocean-vps-setup',
      icon: 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
    },
    {
      title: 'Cloudflare Setup',
      desc: 'DNS, Proxy, Firewall',
      slug: 'cloudflare-setup',
      icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png',
    },
    {
      title: 'Zoho Setup Support',
      desc: 'Mail, Books, CRM',
      slug: 'zoho-setup-support',
      icon: 'https://www.zohowebstatic.com/sites/default/files/styles/product-home-page-public-cloud/public/zoho-logo.png',
    },
    {
      title: 'Microsoft 365 Setup',
      desc: 'Outlook, Teams, OneDrive',
      slug: 'microsoft-365-setup',
      icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    },
    {
      title: 'DNS & Domain Setup',
      desc: 'Hosting + Domain linking',
      slug: 'dns-domain-setup',
      icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048943.png',
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
      icon: 'https://cdn-icons-png.flaticon.com/512/942/942748.png',
    },
    {
      title: 'Vulnerability Scan',
      desc: 'Security testing',
      slug: 'vulnerability-scan',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
    {
      title: 'Backup Solutions',
      desc: 'Auto backup setup',
      slug: 'backup-solutions',
      icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048943.png',
    },
    {
      title: 'SSL Certificate Setup',
      desc: 'HTTPS secure site',
      slug: 'ssl-certificate-setup',
      icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048943.png',
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
      icon: 'https://cdn-icons-png.flaticon.com/512/483/483947.png',
    },
    {
      title: 'Laptop Repair',
      desc: 'All brands supported',
      slug: 'laptop-repair',
      icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920356.png',
    },
    {
      title: 'Desktop Repair',
      desc: 'Hardware + software',
      slug: 'desktop-repair',
      icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920365.png',
    },
    {
      title: 'UPS Installation',
      desc: 'Home/Office UPS',
      slug: 'ups-installation',
      icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048980.png',
    },
    {
      title: 'Battery Replacement',
      desc: 'Inverter/UPS batteries',
      slug: 'battery-replacement',
      icon: 'https://cdn-icons-png.flaticon.com/512/3103/3103446.png',
    },
    {
      title: 'Appliance Repair',
      desc: 'AC, Fridge, Washing Machine',
      slug: 'appliance-repair',
      icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048975.png',
    },
    {
      title: 'Electrical Work',
      desc: 'Wiring & installation',
      slug: 'electrical-work',
      icon: 'https://cdn-icons-png.flaticon.com/512/1584/1584892.png',
    },
    {
      title: 'Plumbing Services',
      desc: 'Repairs, installation',
      slug: 'plumbing-services',
      icon: 'https://cdn-icons-png.flaticon.com/512/3171/3171131.png',
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
                <div className='service-item text-center border rounded p-3 h-100'>
                  <img
                    src={s.icon}
                    alt={s.title}
                    style={{ width: 60 }}
                    className='mb-3'
                  />
                  <h4>{s.title}</h4>
                  <p className='text-muted'>{s.desc}</p>
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
