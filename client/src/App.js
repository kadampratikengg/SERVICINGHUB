// client/src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Register from './pages/Register.js';
import ForgotPassword from './pages/ForgotPassword';

// Admin Portal Components
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AdminBlogs from './admin/AdminBlogs';
import AdminServices from './admin/AdminServices';
import AdminMessages from './admin/AdminMessages';
import AdminContact from './admin/AdminContact';

// Scroll to top helper component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
};

// Layout wrapper for Public Pages with Navbar & Footer
const PublicLayout = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className='app-shell'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:slug' element={<ServiceDetail />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/services.js' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogPost />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          {/* Admin Portal Routes (Separate Directory & Sidebar Layout) */}
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='messages' element={<AdminMessages />} />
            <Route path='blogs' element={<AdminBlogs />} />
            <Route path='services' element={<AdminServices />} />
            <Route path='contact' element={<AdminContact />} />
          </Route>

          {/* Public Website Routes */}
          <Route path='/*' element={<PublicLayout theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
