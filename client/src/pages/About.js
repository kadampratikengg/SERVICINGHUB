// client/src/pages/About.js
import React from "react";

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title text-center">
          <h2>About ServicingHub</h2>
          <p>We deliver software, cloud and electronics services.</p>
        </div>

        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <img src="https://picsum.photos/800/500?random=30" alt="About" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6">
            <h3>Our Mission</h3>
            <p>To provide reliable technical and maintenance services across IT and electronics domains.</p>
            <ul>
              <li>Software & website development</li>
              <li>Cloud & infrastructure</li>
              <li>Electronics repair & servicing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
