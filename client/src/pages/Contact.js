import React from 'react';

const Contact = () => {
  return (
    <section className='contact section'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Contact Us</h2>
          <p>We’re always ready to help you grow your business.</p>
        </div>

        <div className='row gy-4'>
          <div className='col-lg-6'>
            <iframe
              title='IT Servicing Hub Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.145423202742!2d73.999!3d17.688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc22b83d03a25cd%3A0x5ad7f90f95e4b11b!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715187744298!5m2!1sen!2sin'
              width='100%'
              height='350'
              style={{ border: 0 }}
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
                  <button type='submit' className='btn btn-primary'>
                    Send Message
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
