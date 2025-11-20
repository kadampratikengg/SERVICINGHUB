import React from "react";

const Portfolio = () => {
  const projects = [
    {
      img: "/assets/img/portfolio/portfolio-1.jpg",
      title: "React ERP Dashboard",
      desc: "Custom ERP solution with React + Node.js stack.",
    },
    {
      img: "/assets/img/portfolio/portfolio-2.jpg",
      title: "AWS Cloud Setup",
      desc: "Scalable multi-region infrastructure on AWS.",
    },
    {
      img: "/assets/img/portfolio/portfolio-3.jpg",
      title: "DevOps CI/CD Pipeline",
      desc: "Automated Jenkins + Docker deployment workflow.",
    },
    {
      img: "/assets/img/portfolio/portfolio-4.jpg",
      title: "Appliance Repair Portal",
      desc: "Service booking platform for K Electronics.",
    },
  ];

  return (
    <section className="portfolio section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Portfolio</h2>
          <p>Our Completed Projects</p>
        </div>
        <div className="row gy-4">
          {projects.map((p, i) => (
            <div className="col-lg-3 col-md-6 portfolio-item" key={i}>
              <div className="portfolio-wrap">
                <img src={p.img} className="img-fluid" alt={p.title} />
                <div className="portfolio-info text-center">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
