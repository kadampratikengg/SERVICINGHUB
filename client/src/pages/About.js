import React from 'react';

const About = () => {
  return (
    <main>
      <section className='section'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>About ServiceHub</h2>
            <p>Technology-first delivery for software, cloud, and electronics services.</p>
          </div>

          <div className='row gy-4 align-items-center mb-5'>
            <div className='col-lg-6'>
              <div className='surface-panel p-3 p-lg-4'>
                <img
                  src='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&auto=format'
                  alt='About ServiceHub — Technology Team'
                  className='img-fluid rounded'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <h3 className='mb-3'>Our Mission</h3>
              <p className='mb-4'>
                We simplify technology and maintenance services for homes, businesses,
                and enterprises by delivering reliable, modern, and affordable solutions.
              </p>

              <div className='surface-panel p-4'>
                <ul className='list-unstyled mb-0'>
                  <li className='mb-2'>Software development and modern websites</li>
                  <li className='mb-2'>Cloud architecture and infrastructure</li>
                  <li className='mb-2'>DevOps automation and CI/CD pipelines</li>
                  <li className='mb-0'>Electronics repair and maintenance services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='row gy-4'>
            <div className='col-lg-4'>
              <div className='service-item h-100'>
                <h4>What We Do</h4>
                <p className='mb-0'>
                  We build digital products, manage infrastructure, and support
                  field service operations with one practical service stack.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-item h-100'>
                <h4>How We Work</h4>
                <p className='mb-0'>
                  We focus on fast delivery, clean implementation, and support that
                  fits the scale of each client.
                </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='service-item h-100'>
                <h4>Where We Fit</h4>
                <p className='mb-0'>
                  From startups to local businesses, we cover the software and
                  operations layer that keeps systems running.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
