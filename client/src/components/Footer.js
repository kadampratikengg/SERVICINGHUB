import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // ✅ useState must be inside the component
  const [logoVisible, setLogoVisible] = useState(true);

  // ✅ logo path
  const logoPath = "/assets/img/logo.png";

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            
            {/* =========================
                ABOUT SECTION WITH LOGO
            ============================ */}
            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="logo d-flex align-items-center mb-3">
                {logoVisible ? (
                  <img
                    src={logoPath}
                    alt="ServicingHub Logo"
                    onError={() => setLogoVisible(false)} // hide if missing
                    style={{ maxHeight: "40px" }}
                  />
                ) : (
                  <h1 className="m-0">ServicingHub</h1>
                )}
              </Link>

              <p>
                ServicingHub provides full-stack technology solutions and
                electronics services — from cloud infrastructure to on-site
                appliance repair.
              </p>

             {/* Social Media Links */}
<div className="social-links mt-3">
  <a
    href="https://twitter.com/servicinghub"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-twitter-x"></i>   {/* X logo */}
  </a>

  <a
    href="https://facebook.com/servicinghub"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-facebook"></i>
  </a>

  <a
    href="https://instagram.com/servicinghub"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-instagram"></i>
  </a>

  <a
    href="https://linkedin.com/company/servicinghub"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-linkedin"></i>
  </a>
</div>

            </div>

            {/* =========================
                QUICK LINKS
            ============================ */}
           <div className="col-lg-2 col-md-3 footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/Pricing">Pricing</Link>
    </li>
    <li>
      <Link to="/Blog">Blog</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</div>


            {/* =========================
                TECHNOLOGY LINKS
            ============================ */}
           <div className="col-lg-3 col-md-3 footer-links">
  <h4>Technology Services</h4>
  <ul>
    <li>
      <Link to="/services">Software Development</Link>
    </li>
    <li>
      <Link to="/services">DevOps Solutions</Link>
    </li>
    <li>
      <Link to="/services">Cloud Setup (AWS, GCP, Azure)</Link>
    </li>
    <li>
      <Link to="/services">Hosting & Maintenance</Link>
    </li>
  </ul>
</div>

            {/* =========================
                CONTACT INFO
            ============================ */}
            <div className="col-lg-3 col-md-4 footer-contact">
              <h4>Contact Us</h4>
              <p>
                ServicingHub Technologies<br />
                Satara, Maharashtra 415011<br />
                India<br />
                <br />
                <strong>Phone:</strong> +91 9876543210<br />
                <strong>Email:</strong> info@servicinghub.in<br />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          COPYRIGHT SECTION 
      ============================ */}
      <br>
      </br>
      <div className="copyright text-center">
        <div className="container">
          <p className="mb-0">
            © {new Date().getFullYear()} ServicingHub. All Rights Reserved.
          </p>
          <p className="credits">Designed by ServicingHub Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
