import React from 'react';

const Contact = () => {
  const address = process.env.REACT_APP_ADDRESS || 'Satara, Maharashtra 415011, India';
  const phone = process.env.REACT_APP_PHONE_NUMBER || '+91 9404360234';
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER || '+919404360234';
  const email = process.env.REACT_APP_EMAIL || 'info@itservicinghub.in';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

  return (
    <section className='contact section'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Contact Us</h2>
          <p>We&apos;re always ready to help you grow your business and scale your IT infrastructure.</p>
        </div>

        {/* Contact Info Cards */}
        <div className='row gy-4 mb-5'>
          <div className='col-md-4'>
            <div className='surface-panel p-4 text-center h-100'>
              <div className='feature-icon mx-auto mb-3'>
                <i className='bi bi-geo-alt'></i>
              </div>
              <h6>Address</h6>
              <p className='text-muted small mb-0'>{address}</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='surface-panel p-4 text-center h-100'>
              <div className='feature-icon mx-auto mb-3'>
                <i className='bi bi-telephone'></i>
              </div>
              <h6>Call &amp; WhatsApp</h6>
              <p className='text-muted small mb-2'>{phone}</p>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-sm btn-outline-success rounded-pill px-3'
              >
                <i className='bi bi-whatsapp me-1'></i> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='surface-panel p-4 text-center h-100'>
              <div className='feature-icon mx-auto mb-3'>
                <i className='bi bi-envelope'></i>
              </div>
              <h6>Email Us</h6>
              <p className='text-muted small mb-0'>{email}</p>
            </div>
          </div>
        </div>

        <div className='row gy-4'>
          <div className='col-lg-6'>
            <iframe
              title='IT Servicing Hub Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.145423202742!2d73.999!3d17.688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc22b83d03a25cd%3A0x5ad7f90f95e4b11b!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715187744298!5m2!1sen!2sin'
              width='100%'
              height='380'
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>

          <div className='col-lg-6'>
            <form className='php-email-form'>
              <div className='row gy-3'>
                <div className='col-md-6'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div className='col-md-12'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='col-md-12'>
                  <textarea
                    className='form-control'
                    rows='5'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
                <div className='col-md-12 text-center'>
                  <button type='submit' className='btn btn-primary px-4 py-2'>
                    Send Message <i className='bi bi-send ms-1'></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
