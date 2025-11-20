import React from "react";
import { useParams, Link } from "react-router-dom";

const dummy = {
  1: { title: "Appliance Repair", img: "/assets/img/services/service-1.jpg", content: "Appliance repair details..." },
  2: { title: "Electrical", img: "/assets/img/services/service-2.jpg", content: "Electrical services details..." },
  3: { title: "Plumbing", img: "/assets/img/services/service-3.jpg", content: "Plumbing service details..." },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = dummy[id] || { title: "Service", img: "/assets/img/services/service-1.jpg", content: "Details coming soon." };

  return (
    <section className="service-details section">
      <div className="container">
        <Link to="/services" className="btn btn-link mb-3">← Back to Services</Link>
        <div className="row gy-4">
          <div className="col-md-6">
            <img src={service.img} alt={service.title} className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <h2>{service.title}</h2>
            <p>{service.content}</p>
            <Link to="/contact" className="btn btn-primary">Request Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
