import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminSidebar from './AdminSidebar';
import '../assets/css/admin.css';

const AdminLayout = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return (
    <div className='admin-wrapper'>
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className='admin-main-content'>
        <header className='admin-top-bar'>
          <div className='d-flex align-items-center gap-3'>
            <button
              type='button'
              className='btn btn-sm btn-outline-secondary d-lg-none'
              onClick={() => setSidebarOpen(true)}
              aria-label='Toggle sidebar'
            >
              <i className='bi bi-list fs-5'></i>
            </button>
            <h5 className='mb-0 fw-bold d-none d-sm-block'>IT Servicing Hub Management</h5>
          </div>

          <div className='d-flex align-items-center gap-3'>
            <span className='badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill'>
              <i className='bi bi-person-check-fill me-1'></i> Logged as Admin ({user.username || user.email})
            </span>
          </div>
        </header>

        <main className='admin-content-body'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
