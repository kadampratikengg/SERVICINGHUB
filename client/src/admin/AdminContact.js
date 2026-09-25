import React, { useState, useEffect } from 'react';
import { getContactDetails, saveContactDetails, resetContactDetails } from '../utils/contactStore';

const AdminContact = () => {
  const [form, setForm] = useState({
    address: '',
    phone: '',
    whatsappNumber: '',
    email: '',
    mapEmbedUrl: '',
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setForm(getContactDetails());
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    saveContactDetails(form);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  const handleReset = () => {
    if (window.confirm('Reset contact details back to default values?')) {
      const def = resetContactDetails();
      setForm(def);
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 4000);
    }
  };

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3'>
        <div>
          <h2 className='fw-bold mb-1'>Contact Details Management</h2>
          <p className='text-muted mb-0'>
            Update public address, phone numbers, WhatsApp, email, &amp; Google Map embed URL.
          </p>
        </div>
        <button type='button' onClick={handleReset} className='btn btn-outline-danger rounded-pill px-4'>
          <i className='bi bi-arrow-counterclockwise me-2'></i> Reset Defaults
        </button>
      </div>

      {savedSuccess && (
        <div className='alert alert-success alert-dismissible fade show rounded-3 mb-4' role='alert'>
          <i className='bi bi-check-circle-fill me-2'></i>
          Contact details saved successfully! Live website reflects the updated information.
        </div>
      )}

      <div className='row gy-4'>
        <div className='col-lg-7'>
          <div className='admin-card p-4'>
            <h5 className='fw-bold mb-4 border-bottom pb-3'>
              <i className='bi bi-pencil-square me-2 text-primary'></i> Edit Contact Information
            </h5>

            <form onSubmit={handleSave}>
              <div className='mb-3'>
                <label className='form-label fw-semibold small'>Office Address</label>
                <input
                  type='text'
                  className='form-control'
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder='Enter office address...'
                  required
                />
              </div>

              <div className='row gy-3 mb-3'>
                <div className='col-md-6'>
                  <label className='form-label fw-semibold small'>Phone Number</label>
                  <input
                    type='text'
                    className='form-control'
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder='+91 9404360234'
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label fw-semibold small'>WhatsApp Direct Number</label>
                  <input
                    type='text'
                    className='form-control'
                    value={form.whatsappNumber}
                    onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
                    placeholder='9404360234'
                    required
                  />
                </div>
              </div>

              <div className='mb-3'>
                <label className='form-label fw-semibold small'>Official Email Address</label>
                <input
                  type='email'
                  className='form-control'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder='info@itservicinghub.in'
                  required
                />
              </div>

              <div className='mb-4'>
                <label className='form-label fw-semibold small'>Google Maps Embed URL</label>
                <textarea
                  className='form-control font-monospace small'
                  rows='3'
                  value={form.mapEmbedUrl}
                  onChange={(e) => setForm({ ...form, mapEmbedUrl: e.target.value })}
                  placeholder='https://www.google.com/maps/embed?...'
                  required
                ></textarea>
                <small className='text-muted mt-1 d-block'>
                  Copy the <code>src</code> attribute link from Google Maps &gt; Share &gt; Embed a map.
                </small>
              </div>

              <button type='submit' className='btn btn-primary rounded-pill px-5 fw-bold'>
                <i className='bi bi-save me-2'></i> Save Changes
              </button>
            </form>
          </div>
        </div>

        <div className='col-lg-5'>
          <div className='admin-card p-4'>
            <h5 className='fw-bold mb-4 border-bottom pb-3'>
              <i className='bi bi-eye me-2 text-primary'></i> Live Preview Card
            </h5>

            <div className='mb-3 p-3 bg-body-tertiary rounded-3 border'>
              <small className='text-muted text-uppercase fw-bold d-block mb-1'>Address</small>
              <p className='fw-semibold mb-0'>{form.address || 'Not specified'}</p>
            </div>

            <div className='mb-3 p-3 bg-body-tertiary rounded-3 border'>
              <small className='text-muted text-uppercase fw-bold d-block mb-1'>Phone &amp; WhatsApp</small>
              <p className='fw-semibold mb-1'>Phone: {form.phone || 'Not specified'}</p>
              <p className='fw-semibold mb-0 text-success'>WhatsApp: {form.whatsappNumber || 'Not specified'}</p>
            </div>

            <div className='mb-3 p-3 bg-body-tertiary rounded-3 border'>
              <small className='text-muted text-uppercase fw-bold d-block mb-1'>Email</small>
              <p className='fw-semibold mb-0'>{form.email || 'Not specified'}</p>
            </div>

            {form.mapEmbedUrl && (
              <div className='rounded-3 overflow-hidden border'>
                <iframe
                  title='Location Map Preview'
                  src={form.mapEmbedUrl}
                  width='100%'
                  height='200'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContact;
