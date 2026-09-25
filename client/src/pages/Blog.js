// client/src/pages/Blog.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/client';
import { getBlogPosts } from '../utils/blogStore';

const CATEGORIES = [
  'All',
  'DevOps & Automation',
  'Cloud Services',
  'IT Security',
  'Software & Web Development',
  'Electronics & Maintenance',
  'General News',
];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get('/blog');
        if (res.ok) {
          const data = await res.json();
          if (data.posts && data.posts.length > 0) {
            setPosts(data.posts);
            return;
          }
        }
      } catch (e) {
        // fallback
      }

      setPosts(getBlogPosts());
    };
    load();
  }, []);

  const filteredPosts = posts.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;

    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.excerpt && p.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (p.category && p.category.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== (searchTerm || selectedCategory !== 'All' ? null : featuredPost?.id));

  return (
    <div className='blog-page bg-body'>
      {/* ── Modern Hero Section ── */}
      <section className='blog-hero py-5 position-relative overflow-hidden border-bottom bg-body-tertiary'>
        <div className='container py-4 text-center position-relative' style={{ zIndex: 2 }}>
          <div className='d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary bg-opacity-10 text-primary small font-monospace fw-bold mb-3 shadow-sm'>
            <i className='bi bi-journal-richtext'></i> IT Servicing Hub Tech Hub
          </div>

          <h1 className='display-5 fw-extrabold mb-3 text-gradient'>
            Technical Articles, Cloud Blueprints &amp; Engineering Guides
          </h1>

          <p className='text-muted mx-auto mb-4 lead' style={{ maxWidth: '720px' }}>
            Explore insights on cloud infrastructure migration, CI/CD DevOps automation, cybersecurity hardening, and full-stack software development.
          </p>

          {/* Search Bar */}
          <div className='mx-auto mb-4' style={{ maxWidth: '560px' }}>
            <div className='input-group input-group-lg shadow-sm rounded-pill overflow-hidden border'>
              <span className='input-group-text bg-body border-0 ps-4'>
                <i className='bi bi-search text-primary fs-5'></i>
              </span>
              <input
                type='text'
                className='form-control border-0 bg-body shadow-none text-body fs-6'
                placeholder='Search articles by keyword, DevOps, Cloud...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  type='button'
                  className='btn btn-link text-muted border-0 pe-4'
                  onClick={() => setSearchTerm('')}
                >
                  <i className='bi bi-x-circle-fill fs-5'></i>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className='d-flex align-items-center justify-content-center flex-wrap gap-2 pt-2'>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type='button'
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm rounded-pill px-3 transition-all ${
                  selectedCategory === cat
                    ? 'btn-primary shadow-sm'
                    : 'btn-outline-secondary border-opacity-25 bg-body text-body'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className='section py-5'>
        <div className='container'>
          {/* ── Featured Article Card (Show on All category & empty search) ── */}
          {selectedCategory === 'All' && !searchTerm && featuredPost && (
            <div className='mb-5'>
              <div className='card border-0 rounded-4 shadow-lg overflow-hidden bg-body-tertiary transition-hover'>
                <div className='row g-0 align-items-center'>
                  <div className='col-lg-7 position-relative overflow-hidden' style={{ minHeight: '340px' }}>
                    <img
                      src={
                        featuredPost.image ||
                        'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop'
                      }
                      alt={featuredPost.title}
                      className='w-100 h-100 object-fit-cover blog-card-img'
                      style={{ minHeight: '340px' }}
                    />
                    <div
                      className='position-absolute top-0 start-0 m-3 badge bg-primary px-3 py-2 rounded-pill shadow-sm fs-6 font-monospace'
                    >
                      <i className='bi bi-star-fill text-warning me-1'></i> Featured Article
                    </div>
                  </div>

                  <div className='col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between'>
                    <div>
                      <div className='d-flex align-items-center gap-2 mb-3'>
                        <span className='badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-1'>
                          {featuredPost.category || 'Engineering'}
                        </span>
                        <small className='text-muted font-monospace'>
                          <i className='bi bi-clock me-1'></i> {featuredPost.readTime || '5 min read'}
                        </small>
                      </div>

                      <h2 className='fw-bold mb-3 fs-3 leading-tight'>
                        <Link to={`/blog/${featuredPost.id}`} className='text-body text-decoration-none hover-primary'>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className='text-muted small mb-4 leading-relaxed'>
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className='d-flex align-items-center justify-content-between pt-3 border-top'>
                      <div className='d-flex align-items-center gap-2'>
                        <div
                          className='rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center fw-bold'
                          style={{ width: '36px', height: '36px', fontSize: '0.85rem' }}
                        >
                          {(featuredPost.author || 'S').charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <span className='d-block small fw-bold text-body'>{featuredPost.author || 'IT Servicing Hub'}</span>
                          <span className='d-block text-muted style-xs font-monospace'>{featuredPost.createdAt || 'Recent'}</span>
                        </div>
                      </div>

                      <Link to={`/blog/${featuredPost.id}`} className='btn btn-primary rounded-pill px-4 shadow-sm'>
                        Read Article <i className='bi bi-arrow-right ms-1'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Heading */}
          <div className='d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom'>
            <h3 className='fw-bold mb-0 fs-4'>
              {selectedCategory !== 'All'
                ? `${selectedCategory} Articles`
                : searchTerm
                ? `Search Results for "${searchTerm}"`
                : 'Latest Technical Insights'}
            </h3>
            <span className='badge bg-secondary bg-opacity-10 text-secondary rounded-pill font-monospace px-3 py-1'>
              {gridPosts.length} {gridPosts.length === 1 ? 'Article' : 'Articles'}
            </span>
          </div>

          {/* ── Articles Grid ── */}
          {gridPosts.length > 0 ? (
            <div className='row gy-4'>
              {gridPosts.map((p) => (
                <div key={p.id} className='col-lg-4 col-md-6'>
                  <div className='card h-100 border rounded-4 shadow-sm bg-body-tertiary overflow-hidden d-flex flex-column justify-content-between blog-grid-card'>
                    <div>
                      {/* Image Thumbnail */}
                      <div className='position-relative overflow-hidden' style={{ height: '200px' }}>
                        <img
                          src={
                            p.image ||
                            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop'
                          }
                          alt={p.title}
                          className='w-100 h-100 object-fit-cover blog-card-img'
                        />
                        <span className='position-absolute top-0 end-0 m-3 badge bg-dark bg-opacity-75 backdrop-blur text-white rounded-pill px-3 py-1 font-monospace small'>
                          {p.category || 'Engineering'}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className='p-4'>
                        <div className='d-flex align-items-center gap-2 text-muted small mb-2 font-monospace'>
                          <span><i className='bi bi-calendar3 me-1'></i>{p.createdAt || 'Recent'}</span>
                          <span>&bull;</span>
                          <span><i className='bi bi-clock me-1'></i>{p.readTime || '3 min read'}</span>
                        </div>

                        <h4 className='fw-bold mb-2 fs-5 leading-snug'>
                          <Link to={`/blog/${p.id}`} className='text-body text-decoration-none hover-primary'>
                            {p.title}
                          </Link>
                        </h4>

                        <p className='text-muted small mb-0 leading-relaxed line-clamp-3'>
                          {p.excerpt || (p.content ? p.content.slice(0, 130) + '...' : '')}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className='px-4 pb-4 pt-0 border-0 d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center gap-2'>
                        <div
                          className='rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center fw-bold'
                          style={{ width: '30px', height: '30px', fontSize: '0.75rem' }}
                        >
                          {(p.author || 'S').charAt(0).toUpperCase()}
                        </div>
                        <span className='small text-muted font-monospace text-truncate max-w-140'>
                          {p.author || 'IT Servicing Hub'}
                        </span>
                      </div>

                      <Link to={`/blog/${p.id}`} className='btn btn-sm btn-outline-primary rounded-pill px-3'>
                        Read <i className='bi bi-arrow-right ms-1'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-5 my-4 bg-body-tertiary rounded-4 border'>
              <div className='service-icon-box mx-auto mb-3' style={{ width: '60px', height: '60px' }}>
                <i className='bi bi-journal-x fs-2 text-muted'></i>
              </div>
              <h5 className='fw-bold mb-2'>No articles found</h5>
              <p className='text-muted small mb-4'>
                Try adjusting your search query or selecting a different category filter.
              </p>
              <button
                type='button'
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className='btn btn-primary rounded-pill px-4'
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ── Tech Community Newsletter Banner ── */}
          <div className='mt-5 p-4 p-md-5 rounded-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 text-center position-relative overflow-hidden shadow-sm'>
            <div className='row justify-content-center align-items-center'>
              <div className='col-lg-8'>
                <h3 className='fw-bold mb-2 text-body'>Subscribe to Engineering Updates</h3>
                <p className='text-muted mb-4 small'>
                  Get weekly architecture guides, DevOps security checklists, &amp; IT cloud infrastructure insights sent directly to your inbox.
                </p>
                <div className='row g-2 justify-content-center'>
                  <div className='col-md-7 col-lg-6'>
                    <input
                      type='email'
                      className='form-control form-control-lg rounded-pill px-4 shadow-sm border-0'
                      placeholder='Enter your corporate email address...'
                    />
                  </div>
                  <div className='col-md-auto'>
                    <button type='button' className='btn btn-primary btn-lg rounded-pill px-4 fw-bold shadow-sm w-100'>
                      Subscribe Now <i className='bi bi-send-fill ms-2'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
