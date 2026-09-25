import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blogStore';
import { getServicesData } from '../data/servicesData';
import { getMessages } from '../utils/messageStore';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [servicesCount, setServicesCount] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setBlogs(getBlogPosts());
    const sMap = getServicesData();
    setServicesCount(Object.keys(sMap).length);
    setMessages(getMessages());
  }, []);

  const unreadMessages = messages.filter((m) => m.status === 'Unread');

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3'>
        <div>
          <h2 className='fw-bold mb-1'>Admin Overview</h2>
          <p className='text-muted mb-0'>Manage your client messages, blogs, technical services, &amp; site data.</p>
        </div>
        <div className='d-flex gap-2 flex-wrap'>
          <Link to='/admin/messages' className='btn btn-danger rounded-pill'>
            <i className='bi bi-envelope-paper me-1'></i> Contact Messages ({unreadMessages.length})
          </Link>
          <Link to='/admin/blogs' className='btn btn-primary rounded-pill'>
            <i className='bi bi-plus-lg me-1'></i> Manage Blogs
          </Link>
          <Link to='/admin/services' className='btn btn-outline-primary rounded-pill'>
            <i className='bi bi-gear me-1'></i> Manage Services
          </Link>
          <Link to='/admin/contact' className='btn btn-outline-secondary rounded-pill'>
            <i className='bi bi-geo-alt me-1'></i> Contact Info
          </Link>
        </div>
      </div>

      <div className='row gy-4 mb-4'>
        <div className='col-md-6 col-lg-4'>
          <div className='admin-card p-4'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
              <span className='text-muted fw-semibold small text-uppercase'>Contact Inquiries</span>
              <div className='service-icon-box' style={{ width: '40px', height: '40px', background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}>
                <i className='bi bi-envelope-exclamation fs-5'></i>
              </div>
            </div>
            <h2 className='fw-bold mb-1'>{messages.length}</h2>
            <p className='text-danger small mb-0'>
              <i className='bi bi-circle-fill me-1 fs-6'></i> {unreadMessages.length} Unread client message{unreadMessages.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className='col-md-6 col-lg-4'>
          <div className='admin-card p-4'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
              <span className='text-muted fw-semibold small text-uppercase'>Total Services</span>
              <div className='service-icon-box' style={{ width: '40px', height: '40px' }}>
                <i className='bi bi-gear-wide-connected fs-5'></i>
              </div>
            </div>
            <h2 className='fw-bold mb-1'>{servicesCount}</h2>
            <p className='text-success small mb-0'>
              <i className='bi bi-check-circle me-1'></i> Active and editable in database
            </p>
          </div>
        </div>

        <div className='col-md-6 col-lg-4'>
          <div className='admin-card p-4'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
              <span className='text-muted fw-semibold small text-uppercase'>Published Blogs</span>
              <div className='service-icon-box' style={{ width: '40px', height: '40px' }}>
                <i className='bi bi-journal-text fs-5'></i>
              </div>
            </div>
            <h2 className='fw-bold mb-1'>{blogs.length}</h2>
            <p className='text-info small mb-0'>
              <i className='bi bi-pencil-square me-1'></i> Full CRUD management enabled
            </p>
          </div>
        </div>
      </div>

      <div className='row gy-4'>
        <div className='col-lg-6'>
          <div className='admin-card p-4'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
              <h5 className='fw-bold mb-0'>Recent Contact Inquiries</h5>
              <Link to='/admin/messages' className='small fw-bold text-decoration-none'>View All Messages</Link>
            </div>
            <div className='table-responsive'>
              <table className='table table-hover align-middle mb-0'>
                <thead>
                  <tr>
                    <th>Sender</th>
                    <th>Subject &amp; Message Snippet</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.slice(0, 4).map((m) => (
                    <tr key={m.id}>
                      <td className='fw-semibold small'>{m.name}</td>
                      <td>
                        <div className='fw-semibold small text-primary'>{m.subject || 'General Inquiry'}</div>
                        <div className='small text-muted font-monospace' style={{ fontSize: '0.78rem' }}>
                          <i className='bi bi-chat-left-text me-1'></i>
                          {m.message ? (m.message.length > 50 ? m.message.slice(0, 50) + '...' : m.message) : 'No snippet'}
                        </div>
                      </td>
                      <td>
                        {m.status === 'Unread' ? (
                          <span className='badge bg-danger bg-opacity-10 text-danger rounded-pill'>Unread</span>
                        ) : (
                          <span className='badge bg-secondary bg-opacity-10 text-secondary rounded-pill'>Read</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='admin-card p-4'>
            <div className='d-flex align-items-center justify-content-between mb-3'>
              <h5 className='fw-bold mb-0'>Recent Blog Posts</h5>
              <Link to='/admin/blogs' className='small fw-bold text-decoration-none'>View All Blogs</Link>
            </div>
            <div className='table-responsive'>
              <table className='table table-hover align-middle mb-0'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.slice(0, 4).map((b) => (
                    <tr key={b.id}>
                      <td className='fw-semibold small'>{b.title}</td>
                      <td><span className='badge bg-primary bg-opacity-10 text-primary'>{b.category}</span></td>
                      <td className='small text-muted'>{b.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
