// client/src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [logoVisible, setLogoVisible] = useState(true);
  const logoPath = "/assets/img/logo.png";

  return (
    <header className="header fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          {logoVisible ? (
            <img
              src={logoPath}
              alt="ServicingHub Logo"
              onError={() => setLogoVisible(false)}
              style={{ maxHeight: 40 }}
            />
          ) : (
            <h1 className="m-0">ServicingHub</h1>
          )}
        </Link>

        <nav className="navmenu d-none d-lg-block">
          <ul className="d-flex align-items-center mb-0">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="d-flex align-items-center">
          {user ? (
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted">{user.username || user.email}</span>
              <button className="btn btn-sm btn-outline-danger" onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
