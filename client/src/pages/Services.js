import React from "react";

const Services = () => {
  /* ===============================
      SOFTWARE & WEB DEVELOPMENT
  =============================== */
  const softwareDev = [
    {
      title: "Software Development",
      desc: "Custom business apps",
      icon: "https://cdn-icons-png.flaticon.com/512/9068/9068689.png",
    },
    {
      title: "Web Application Development",
      desc: "Full-stack systems",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
    },
    {
      title: "Mobile App (Hybrid)",
      desc: "Android / iOS apps",
      icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
    },
    {
      title: "API Development",
      desc: "Node.js / REST / JWT",
      icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful interfaces",
      icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    },
    {
      title: "E-commerce Development",
      desc: "Online store setup",
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
    },
  ];

  /* ===============================
        DEVOPS & AUTOMATION
  =============================== */
  const devopsServices = [
    {
      title: "CI/CD Pipeline Setup",
      desc: "GitHub, GitLab, Jenkins",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
    },
    {
      title: "Docker Containerization",
      desc: "Convert apps to containers",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    },
    {
      title: "Kubernetes Deployment",
      desc: "Scalable microservices",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
    },
    {
      title: "Infrastructure as Code",
      desc: "Terraform, Ansible",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    },
    {
      title: "Monitoring & Alerts",
      desc: "Prometheus, Grafana",
      icon: "https://cdn-icons-png.flaticon.com/512/8459/8459891.png",
    },
    {
      title: "Automation Scripting",
      desc: "Bash / Python",
      icon: "https://cdn-icons-png.flaticon.com/512/3097/3097009.png",
    },
  ];

  /* ===============================
            CLOUD SERVICES
  =============================== */
  const cloudServices = [
    {
      title: "AWS Cloud Setup",
      desc: "EC2, IAM, S3, VPC",
      icon: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    },
    {
      title: "Azure Cloud Setup",
      desc: "VM, Storage, AD",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },
    {
      title: "Google Cloud (GCP)",
      desc: "Compute, IAM, Storage",
      icon: "https://cdn-icons-png.flaticon.com/512/6124/6124991.png",
    },
    {
      title: "DigitalOcean / VPS Setup",
      desc: "Droplets, DNS, SSL",
      icon: "https://cdn-icons-png.flaticon.com/512/873/873107.png",
    },
    {
      title: "Cloudflare Setup",
      desc: "DNS, Proxy, Firewall",
      icon: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
    },
    {
      title: "Zoho Setup Support",
      desc: "Mail, Books, CRM",
      icon: "https://www.zohowebstatic.com/sites/default/files/styles/product-home-page-public-cloud/public/zoho-logo.png",
    },
    {
      title: "Microsoft 365 Setup",
      desc: "Outlook, Teams, OneDrive",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    },
    {
      title: "DNS & Domain Setup",
      desc: "Hosting + Domain linking",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    },
  ];

  /* ===============================
            SECURITY SERVICES
  =============================== */
  const securityServices = [
    {
      title: "Firewall Setup",
      desc: "Server & network security",
      icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    },
    {
      title: "Vulnerability Scan",
      desc: "Security testing",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Backup Solutions",
      desc: "Auto backup setup",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    },
    {
      title: "SSL Certificate Setup",
      desc: "HTTPS secure site",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    },
  ];

  /* ===============================
      ELECTRONICS & MAINTENANCE
  =============================== */
  const electronics = [
    {
      title: "CCTV Installation",
      desc: "Home / Office CCTV",
      icon: "https://cdn-icons-png.flaticon.com/512/483/483947.png",
    },
    {
      title: "Laptop Repair",
      desc: "All brands supported",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920356.png",
    },
    {
      title: "Desktop Repair",
      desc: "Hardware + software",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920365.png",
    },
    {
      title: "UPS Installation",
      desc: "Home/Office UPS",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048980.png",
    },
    {
      title: "Battery Replacement",
      desc: "Inverter/UPS batteries",
      icon: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
    },
    {
      title: "Appliance Repair",
      desc: "AC, Fridge, Washing Machine",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048975.png",
    },
    {
      title: "Electrical Work",
      desc: "Wiring & installation",
      icon: "https://cdn-icons-png.flaticon.com/512/1584/1584892.png",
    },
    {
      title: "Plumbing Services",
      desc: "Repairs, installation",
      icon: "https://cdn-icons-png.flaticon.com/512/3171/3171131.png",
    },
  ];

  /* ===============================
          UI COMPONENT RENDER
  =============================== */
  const renderSection = (title, list) => (
    <section className="services section mb-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>{title}</h2>
        </div>

        <div className="row gy-4">
          {list.map((s, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="service-item text-center border rounded p-3 h-100">
                <img src={s.icon} alt={s.title} style={{ width: 60 }} className="mb-3" />
                <h4>{s.title}</h4>
                <p className="text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <main>
      {renderSection("Software & Web Development", softwareDev)}
      {renderSection("DevOps & Automation", devopsServices)}
      {renderSection("Cloud Services", cloudServices)}
      {renderSection("IT Security", securityServices)}
      {renderSection("Electronics & Maintenance", electronics)}
    </main>
  );
};

export default Services;
