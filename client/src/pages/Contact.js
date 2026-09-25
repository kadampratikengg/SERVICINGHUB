import React, { useState, useEffect } from 'react';
import { saveMessage } from '../utils/messageStore';
import { getContactDetails } from '../utils/contactStore';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(getContactDetails());

  useEffect(() => {
    setContactInfo(getContactDetails());
  }, []);

  const { address, phone, whatsappNumber, email, mapEmbedUrl } = contactInfo;
  const whatsappUrl = `https://wa.me/${(whatsappNumber || '').replace(/\D/g, '')}`;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    saveMessage(form);
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className='contact section py-5'>
      <div className='container'>
        <div className='section-title text-center mb-5'>
          <h2>Contact Us</h2>
          <p>We are ready to help you engineer software products and scale your IT infrastructure.</p>
        </div>

        {/* Contact Info Cards */}
        <div className='row gy-4 mb-5'>
          <div className='col-md-4'>
            <div className='surface-panel p-4 text-center h-100 rounded-4 border'>
              <div className='service-icon-box mx-auto mb-3'>
                <i className='bi bi-geo-alt fs-3'></i>
              </div>
              <h6 className='fw-bold mb-2'>Office Address</h6>
              <p className='text-muted small mb-0'>{address}</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='surface-panel p-4 text-center h-100 rounded-4 border'>
              <div className='service-icon-box mx-auto mb-3'>
                <i className='bi bi-telephone fs-3'></i>
              </div>
              <h6 className='fw-bold mb-2'>Call &amp; WhatsApp</h6>
              <p className='text-muted small mb-3'>{phone}</p>
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
            <div className='surface-panel p-4 text-center h-100 rounded-4 border'>
              <div className='service-icon-box mx-auto mb-3'>
                <i className='bi bi-envelope fs-3'></i>
              </div>
              <h6 className='fw-bold mb-2'>Email Us</h6>
              <p className='text-muted small mb-0'>{email}</p>
            </div>
          </div>
        </div>

        <div className='row gy-4'>
          <div className='col-lg-6'>
            <iframe
              title='IT Servicing Hub Location'
              src={mapEmbedUrl}
              width='100%'
              height='420'
              style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>

          <div className='col-lg-6'>
            <div className='p-4 p-md-5 rounded-4 border bg-body-tertiary shadow-sm'>
              <h4 className='fw-bold mb-3'>Send Us a Message</h4>
              <p className='text-muted small mb-4'>
                Fill out the form below and your inquiry will be delivered directly to our engineering management portal.
              </p>

              {submitted && (
                <div className='alert alert-success d-flex align-items-center gap-2 rounded-3 mb-4' role='alert'>
                  <i className='bi bi-check-circle-fill fs-5 flex-shrink-0'></i>
                  <div>
                    <strong>Message Sent Successfully!</strong> Thank you for reaching out. Our team will review your message and respond shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className='row gy-3'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Your Name'
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Your Email'
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone / WhatsApp Number'
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Subject / Service Required'
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div className='col-md-12'>
                    <textarea
                      className='form-control'
                      rows='4'
                      placeholder='Tell us about your project or technical requirement...'
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className='col-md-12'>
                    <button type='submit' className='btn btn-primary w-100 py-3 rounded-pill fw-bold'>
                      Send Message <i className='bi bi-send ms-2'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
