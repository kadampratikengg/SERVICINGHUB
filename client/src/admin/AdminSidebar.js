import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getMessages } from '../utils/messageStore';

const AdminSidebar = ({ isOpen, onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const msgs = getMessages();
      const count = msgs.filter((m) => m.status === 'Unread').length;
      setUnreadCount(count);
    };

    updateCount();
    const interval = setInterval(updateCount, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {isOpen && <div className='admin-backdrop d-lg-none' onClick={onClose}></div>}
      <aside className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
        <div>
          <div className='admin-sidebar-header'>
            <NavLink to='/admin' className='admin-brand'>
              <i className='bi bi-shield-lock-fill text-primary fs-4'></i>
              <span>Admin Portal</span>
            </NavLink>
            <button
              type='button'
              className='btn btn-sm text-white-50 d-lg-none p-0'
              onClick={onClose}
              aria-label='Close sidebar'
            >
              <i className='bi bi-x-lg fs-5'></i>
            </button>
          </div>

          <ul className='admin-menu'>
            <li className='admin-menu-item'>
              <NavLink to='/admin' end className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClose}>
                <i className='bi bi-speedometer2'></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className='admin-menu-item'>
              <NavLink to='/admin/messages' className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClose}>
                <i className='bi bi-envelope-paper'></i>
                <span>Contact Messages</span>
                {unreadCount > 0 && (
                  <span className='badge bg-danger rounded-pill ms-auto small'>{unreadCount}</span>
                )}
              </NavLink>
            </li>
            <li className='admin-menu-item'>
              <NavLink to='/admin/blogs' className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClose}>
                <i className='bi bi-journal-richtext'></i>
                <span>Blogs Management</span>
              </NavLink>
            </li>
            <li className='admin-menu-item'>
              <NavLink to='/admin/services' className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClose}>
                <i className='bi bi-gear-wide-connected'></i>
                <span>Services Management</span>
              </NavLink>
            </li>
            <li className='admin-menu-item'>
              <NavLink to='/admin/contact' className={({ isActive }) => (isActive ? 'active' : '')} onClick={onClose}>
                <i className='bi bi-geo-alt'></i>
                <span>Contact Info Details</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='p-3 border-top border-secondary border-opacity-25'>
          <NavLink to='/' className='btn btn-outline-light btn-sm w-100 mb-2 text-start'>
            <i className='bi bi-globe me-2'></i> View Live Website
          </NavLink>
          <button onClick={handleLogout} className='btn btn-outline-danger btn-sm w-100 text-start'>
            <i className='bi bi-box-arrow-right me-2'></i> Logout Admin
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
