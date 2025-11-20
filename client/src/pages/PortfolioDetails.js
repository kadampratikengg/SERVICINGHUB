import React from "react";
import { useParams, Link } from "react-router-dom";

const data = {
  p1: { title: "Commercial AC Setup", img: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg", desc: "Large scale AC setup." },
  p2: { title: "Residential Installation", img: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg", desc: "Full home setup." },
  p3: { title: "Office Maintenance", img: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg", desc: "Ongoing maintenance." },
};

const PortfolioDetails = () => {
  const { id } = useParams();
  const item = data[id] || { title: "Project", img: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg", desc: "" };
  return (
    <section className="portfolio-details section">
      <div className="container">
        <Link to="/portfolio" className="btn btn-link mb-3">← Back to Portfolio</Link>
        <div className="row gy-4">
          <div className="col-md-6">
            <img src={item.img} className="img-fluid" alt={item.title}/>
          </div>
          <div className="col-md-6">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
