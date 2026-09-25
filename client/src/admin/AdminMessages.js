import React, { useState, useEffect } from 'react';
import { getMessages, deleteMessage, markMessageAsRead } from '../utils/messageStore';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Modal view state
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [currentMsg, setCurrentMsg] = useState(null);

  useEffect(() => {
    setMessages(getMessages());
  }, []);

  const refreshMessages = () => {
    setMessages(getMessages());
  };

  const handleOpenView = (msg) => {
    setCurrentMsg(msg);
    if (msg.status === 'Unread') {
      markMessageAsRead(msg.id);
      refreshMessages();
    }
    setViewModalOpen(true);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete the message from "${name}"?`)) {
      deleteMessage(id);
      refreshMessages();
    }
  };

  const filteredMessages = messages.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (m.message && m.message.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || m.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const unreadCount = messages.filter((m) => m.status === 'Unread').length;

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3'>
        <div>
          <h2 className='fw-bold mb-1'>Contact Form Messages</h2>
          <p className='text-muted mb-0'>
            View and respond to client inquiries submitted via the Contact Us page.
          </p>
        </div>
        {unreadCount > 0 && (
          <span className='badge bg-danger fs-6 px-3 py-2 rounded-pill'>
            <i className='bi bi-envelope-exclamation-fill me-1'></i> {unreadCount} Unread Message{unreadCount > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Filter Bar */}
      <div className='admin-card p-3 mb-4'>
        <div className='row gy-3 align-items-center'>
          <div className='col-md-6'>
            <div className='input-group'>
              <span className='input-group-text bg-body-tertiary border-end-0'>
                <i className='bi bi-search'></i>
              </span>
              <input
                type='text'
                className='form-control border-start-0'
                placeholder='Search by sender name, email, or subject...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='col-md-6 text-md-end'>
            <div className='d-inline-flex align-items-center gap-2'>
              <span className='small text-muted text-nowrap'>Status:</span>
              <select
                className='form-select form-select-sm w-auto'
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value='All'>All Messages</option>
                <option value='Unread'>Unread Only</option>
                <option value='Read'>Read Only</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Table */}
      <div className='admin-card'>
        <div className='table-responsive'>
          <table className='table admin-table align-middle'>
            <thead>
              <tr>
                <th>Sender Name</th>
                <th>Contact Details</th>
                <th>Subject</th>
                <th>Message Snippet</th>
                <th>Submitted At</th>
                <th>Status</th>
                <th className='text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.length === 0 ? (
                <tr>
                  <td colSpan='7' className='text-center py-4 text-muted'>
                    No contact form messages found matching your search.
                  </td>
                </tr>
              ) : (
                filteredMessages.map((msg) => (
                  <tr key={msg.id} className={msg.status === 'Unread' ? 'bg-primary bg-opacity-10' : ''}>
                    <td>
                      <div className='fw-bold text-heading'>{msg.name}</div>
                    </td>
                    <td>
                      <div className='small text-heading'>{msg.email}</div>
                      {msg.phone && <div className='small text-muted font-monospace'>{msg.phone}</div>}
                    </td>
                    <td>
                      <div className='fw-semibold small text-primary'>{msg.subject || 'General Inquiry'}</div>
                    </td>
                    <td>
                      <div
                        className='p-2 rounded-3 bg-body-tertiary border border-opacity-50 small text-body cursor-pointer hover-shadow transition-all'
                        style={{ maxWidth: '320px' }}
                        onClick={() => handleOpenView(msg)}
                        title='Click to view full message details'
                      >
                        <i className='bi bi-quote me-1 text-primary'></i>
                        <span>
                          {msg.message ? (msg.message.length > 80 ? msg.message.slice(0, 80) + '...' : msg.message) : 'No message body provided.'}
                        </span>
                      </div>
                    </td>
                    <td className='small text-muted text-nowrap'>{msg.submittedAt}</td>
                    <td>
                      {msg.status === 'Unread' ? (
                        <span className='badge bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25 rounded-pill'>
                          <i className='bi bi-record-fill me-1'></i> Unread
                        </span>
                      ) : (
                        <span className='badge bg-secondary bg-opacity-10 text-secondary border rounded-pill'>
                          Read
                        </span>
                      )}
                    </td>
                    <td className='text-end'>
                      <div className='action-btn-group justify-content-end'>
                        <button
                          onClick={() => handleOpenView(msg)}
                          className='btn btn-outline-primary action-btn'
                          title='View Full Message'
                        >
                          <i className='bi bi-eye-fill'></i>
                        </button>
                        {msg.phone && (
                          <a
                            href={`https://wa.me/${msg.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${msg.name}, thank you for contacting IT Servicing Hub regarding "${msg.subject}".`)}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-outline-success action-btn'
                            title='Reply via WhatsApp'
                          >
                            <i className='bi bi-whatsapp'></i>
                          </a>
                        )}
                        <a
                          href={`mailto:${msg.email}?subject=${encodeURIComponent(`RE: ${msg.subject}`)}`}
                          className='btn btn-outline-info action-btn'
                          title='Reply via Email'
                        >
                          <i className='bi bi-envelope-fill'></i>
                        </a>
                        <button
                          onClick={() => handleDelete(msg.id, msg.name)}
                          className='btn btn-outline-danger action-btn'
                          title='Delete Message'
                        >
                          <i className='bi bi-trash-fill'></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: View Full Message */}
      {viewModalOpen && currentMsg && (
        <div className='modal show d-block' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className='modal-dialog modal-lg modal-dialog-centered'>
            <div className='modal-content bg-body border rounded-4 shadow-lg'>
              <div className='modal-header border-bottom'>
                <h5 className='modal-title fw-bold'>
                  <i className='bi bi-envelope-open-fill me-2 text-primary'></i>
                  Contact Inquiry Details
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setViewModalOpen(false)}
                ></button>
              </div>
              <div className='modal-body p-4'>
                <div className='row gy-3 mb-4 p-3 bg-body-tertiary rounded-3 border'>
                  <div className='col-md-6'>
                    <div className='text-muted small'>Sender Name</div>
                    <div className='fw-bold fs-6'>{currentMsg.name}</div>
                  </div>
                  <div className='col-md-6'>
                    <div className='text-muted small'>Submitted At</div>
                    <div className='fw-semibold small font-monospace'>{currentMsg.submittedAt}</div>
                  </div>
                  <div className='col-md-6'>
                    <div className='text-muted small'>Email Address</div>
                    <a href={`mailto:${currentMsg.email}`} className='fw-semibold text-primary text-decoration-none'>
                      {currentMsg.email}
                    </a>
                  </div>
                  <div className='col-md-6'>
                    <div className='text-muted small'>Phone / WhatsApp</div>
                    <div className='fw-semibold font-monospace'>{currentMsg.phone || 'Not provided'}</div>
                  </div>
                </div>

                <div className='mb-3'>
                  <label className='form-label fw-bold text-muted small text-uppercase'>Subject</label>
                  <div className='fw-bold fs-5 text-primary'>{currentMsg.subject}</div>
                </div>

                <div>
                  <label className='form-label fw-bold text-muted small text-uppercase'>Full Message Payload</label>
                  <div className='p-3 bg-body rounded-3 border leading-relaxed text-body fs-6' style={{ whiteSpace: 'pre-wrap' }}>
                    {currentMsg.message}
                  </div>
                </div>
              </div>

              <div className='modal-footer border-top justify-content-between'>
                <div className='d-flex gap-2'>
                  <a
                    href={`mailto:${currentMsg.email}?subject=${encodeURIComponent(`RE: ${currentMsg.subject}`)}`}
                    className='btn btn-primary rounded-pill px-3'
                  >
                    <i className='bi bi-envelope-paper me-1'></i> Reply via Email
                  </a>
                  {currentMsg.phone && (
                    <a
                      href={`https://wa.me/${currentMsg.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${currentMsg.name}, responding to your inquiry regarding ${currentMsg.subject}.`)}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-success rounded-pill px-3'
                    >
                      <i className='bi bi-whatsapp me-1'></i> Reply via WhatsApp
                    </a>
                  )}
                </div>
                <button
                  type='button'
                  className='btn btn-outline-secondary rounded-pill px-4'
                  onClick={() => setViewModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
