import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [logoVisible, setLogoVisible] = useState(true);
  const logoPath = '/assets/img/logo.png';

  return (
    <footer id='footer' className='footer'>
      <div className='container'>
        <div className='footer-surface'>
          <div className='row gy-4'>
            <div className='col-lg-4 col-md-6'>
              <Link to='/' className='logo d-inline-flex align-items-center gap-3 mb-3'>
                {logoVisible ? (
                  <img
                    src={logoPath}
                    alt='IT Servicing Hub Logo'
                    onError={() => setLogoVisible(false)}
                    className='logo-image'
                  />
                ) : (
                  <span className='logo-fallback'>
                    <span className='logo-badge'>ITH</span>
                    <span>
                      <span className='logo-title d-block'>IT Servicing Hub</span>
                      <small className='logo-subtitle'>Technology Services</small>
                    </span>
                  </span>
                )}
              </Link>

              <p className='footer-copy mb-3'>
                IT Servicing Hub designs and supports modern digital systems,
                cloud infrastructure, software products, and electronics services with
                a practical, delivery-focused approach.
              </p>

              <div className='social-links mt-4'>
                <a
                  href='https://twitter.com/itservicinghub'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter'
                >
                  <i className='bi bi-twitter-x'></i>
                </a>
                <a
                  href='https://facebook.com/itservicinghub'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                >
                  <i className='bi bi-facebook'></i>
                </a>
                <a
                  href='https://instagram.com/itservicinghub'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                >
                  <i className='bi bi-instagram'></i>
                </a>
                <a
                  href='https://linkedin.com/company/itservicinghub'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                >
                  <i className='bi bi-linkedin'></i>
                </a>
              </div>
            </div>

            <div className='col-lg-2 col-md-3'>
              <h4>Quick Links</h4>
              <ul className='footer-links-list'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/services'>Services</Link>
                </li>
                <li>
                  <Link to='/pricing'>Pricing</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-3'>
              <h4>Technology Services</h4>
              <ul className='footer-links-list'>
                <li>
                  <Link to='/services'>Software Development</Link>
                </li>
                <li>
                  <Link to='/services'>DevOps Automation</Link>
                </li>
                <li>
                  <Link to='/services'>Cloud Architecture</Link>
                </li>
                <li>
                  <Link to='/services'>Hosting &amp; Maintenance</Link>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-4'>
              <h4>Contact</h4>
              <div className='footer-contact-card'>
                <p className='mb-2'>Satara, Maharashtra 415011, India</p>
                <p className='mb-2'>
                  <strong>Phone:</strong> +91 9876543210
                </p>
                <p className='mb-0'>
                  <strong>Email:</strong> info@itservicinghub.in
                </p>
              </div>
            </div>
          </div>

          <div className='copyright text-center'>
            <p className='mb-1'>
              &copy; {new Date().getFullYear()} IT Servicing Hub. All rights reserved.
            </p>
            <small>Designed for a clean, modern, technology-first experience.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
