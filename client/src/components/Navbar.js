// client/src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ theme, onToggleTheme }) => {
  const { user, logout } = useAuth();
  const [logoVisible, setLogoVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoPath = '/assets/img/logo.png';

  return (
    <header className='header fixed-top'>
      <div className='container header-inner d-flex align-items-center justify-content-between'>
        <Link to='/' className='logo d-flex align-items-center gap-3'>
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

        <nav className='navmenu d-none d-lg-block'>
          <ul className='d-flex align-items-center mb-0'>
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
        </nav>

        <div className='header-actions d-flex align-items-center gap-2'>
          <button
            type='button'
            className='theme-toggle btn btn-sm'
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i
              className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}
            ></i>
            </button>

          {user ? (
            <div className='user-pill d-flex align-items-center gap-2'>
              <span className='user-avatar'>
                {(user.username || user.email || 'S').charAt(0).toUpperCase()}
              </span>
              <span className='d-none d-md-inline user-text'>
                {user.username || user.email}
              </span>
              <button
                className='btn btn-sm btn-outline-danger auth-button'
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
        <button
          type='button'
          className='navbar-toggler btn btn-sm d-lg-none'
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-label='Toggle navigation'
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>
      </div>

      <nav
        className={`navmenu mobile-nav d-lg-none ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className='d-flex flex-column mb-0'>
          {['/', '/about', '/services', '/pricing', '/blog', '/contact'].map(
            (path, idx) => {
              const labels = [
                'Home',
                'About',
                'Services',
                'Pricing',
                'Blog',
                'Contact',
              ];
              return (
                <li key={path}>
                  <Link to={path} onClick={() => setMobileMenuOpen(false)}>
                    {labels[idx]}
                  </Link>
                </li>
              );
            },
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
