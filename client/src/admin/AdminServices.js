import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServicesData, saveServiceData, resetServicesData } from '../data/servicesData';

const AdminServices = () => {
  const [servicesMap, setServicesMap] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Edit Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState('');
  const [form, setForm] = useState({
    title: '',
    category: '',
    subtitle: '',
    badge: '',
    overviewText: '',
    techStackText: '',
    benefitsText: '',
  });

  useEffect(() => {
    setServicesMap(getServicesData());
  }, []);

  const refreshServices = () => {
    setServicesMap(getServicesData());
  };

  const handleOpenEdit = (slug) => {
    const s = servicesMap[slug];
    if (!s) return;

    setActiveSlug(slug);
    setForm({
      title: s.title || '',
      category: s.category || '',
      subtitle: s.subtitle || '',
      badge: s.badge || '',
      overviewText: Array.isArray(s.overview) ? s.overview.join('\n\n') : s.overview || '',
      techStackText: Array.isArray(s.techStack) ? s.techStack.join(', ') : '',
      benefitsText: Array.isArray(s.benefits) ? s.benefits.join('\n') : '',
    });
    setEditModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!activeSlug) return;

    const updatedOverview = form.overviewText
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    const updatedTechStack = form.techStackText
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const updatedBenefits = form.benefitsText
      .split('\n')
      .map((b) => b.trim())
      .filter(Boolean);

    saveServiceData(activeSlug, {
      title: form.title,
      category: form.category,
      subtitle: form.subtitle,
      badge: form.badge,
      overview: updatedOverview,
      techStack: updatedTechStack,
      benefits: updatedBenefits,
    });

    refreshServices();
    setEditModalOpen(false);
  };

  const handleResetAll = () => {
    if (window.confirm('Reset all service modifications back to default values?')) {
      resetServicesData();
      refreshServices();
    }
  };

  const serviceSlugs = Object.keys(servicesMap);

  const filteredSlugs = serviceSlugs.filter((slug) => {
    const s = servicesMap[slug];
    const matchesSearch =
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slug.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || s.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    'All',
    'Software & Web Development',
    'DevOps & Automation',
    'Cloud Services',
    'IT Security',
    'Electronics & Maintenance',
  ];

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3'>
        <div>
          <h2 className='fw-bold mb-1'>Services Management</h2>
          <p className='text-muted mb-0'>
            View all 32 technical services in table format and modify their descriptions, tech stacks, &amp; parameters.
          </p>
        </div>
        <button onClick={handleResetAll} className='btn btn-outline-secondary rounded-pill btn-sm'>
          <i className='bi bi-arrow-counterclockwise me-1'></i> Reset All to Defaults
        </button>
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
                placeholder='Search services by title or slug...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='d-flex align-items-center gap-2 justify-content-md-end'>
              <span className='small text-muted text-nowrap'>Filter Category:</span>
              <select
                className='form-select form-select-sm w-auto'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className='admin-card'>
        <div className='table-responsive'>
          <table className='table admin-table align-middle'>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Category</th>
                <th>Tech Stack</th>
                <th>Slug</th>
                <th className='text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSlugs.length === 0 ? (
                <tr>
                  <td colSpan='5' className='text-center py-4 text-muted'>
                    No services found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredSlugs.map((slug) => {
                  const s = servicesMap[slug];
                  return (
                    <tr key={slug}>
                      <td>
                        <div className='d-flex align-items-center gap-3'>
                          <div
                            className='service-icon-box flex-shrink-0'
                            style={{ width: '36px', height: '36px', fontSize: '1.1rem' }}
                          >
                            <i className={s.iconClass}></i>
                          </div>
                          <div>
                            <div className='fw-bold text-heading'>{s.title}</div>
                            <small className='text-muted text-truncate d-block max-w-350'>
                              {s.subtitle}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className='badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill'>
                          {s.category}
                        </span>
                      </td>
                      <td>
                        <div className='d-flex flex-wrap gap-1 max-w-250'>
                          {s.techStack ? (
                            s.techStack.slice(0, 3).map((t, idx) => (
                              <span key={idx} className='badge bg-body-tertiary text-body border small font-monospace'>
                                {t}
                              </span>
                            ))
                          ) : (
                            <span className='text-muted small'>Standard</span>
                          )}
                          {s.techStack && s.techStack.length > 3 && (
                            <span className='badge bg-body-tertiary text-muted border small'>
                              +{s.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className='font-monospace small text-muted'>{slug}</td>
                      <td className='text-end'>
                        <div className='action-btn-group justify-content-end'>
                          <Link
                            to={`/services/${slug}`}
                            target='_blank'
                            className='btn btn-outline-info action-btn'
                            title='Preview Live Page'
                          >
                            <i className='bi bi-box-arrow-up-right'></i>
                          </Link>
                          <button
                            onClick={() => handleOpenEdit(slug)}
                            className='btn btn-outline-primary action-btn'
                            title='Edit & Modify Service Data'
                          >
                            <i className='bi bi-pencil-fill'></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal: Edit Service Data */}
      {editModalOpen && (
        <div className='modal show d-block' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className='modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable'>
            <div className='modal-content bg-body border rounded-4 shadow-lg'>
              <div className='modal-header border-bottom'>
                <h5 className='modal-title fw-bold'>
                  <i className='bi bi-pencil-square me-2 text-primary'></i>
                  Modify Service Data: {form.title}
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setEditModalOpen(false)}
                ></button>
              </div>
              <form onSubmit={handleSave}>
                <div className='modal-body p-4'>
                  <div className='row gy-3 mb-3'>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold small'>Service Title</label>
                      <input
                        type='text'
                        className='form-control'
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        required
                      />
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label fw-semibold small'>Category</label>
                      <select
                        className='form-select'
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                      >
                        <option value='Software & Web Development'>Software &amp; Web Development</option>
                        <option value='DevOps & Automation'>DevOps &amp; Automation</option>
                        <option value='Cloud Services'>Cloud Services</option>
                        <option value='IT Security'>IT Security</option>
                        <option value='Electronics & Maintenance'>Electronics &amp; Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className='row gy-3 mb-3'>
                    <div className='col-md-8'>
                      <label className='form-label fw-semibold small'>Subtitle / Lead Caption</label>
                      <input
                        type='text'
                        className='form-control'
                        value={form.subtitle}
                        onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                      />
                    </div>
                    <div className='col-md-4'>
                      <label className='form-label fw-semibold small'>Badge Pill Text</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='e.g. Enterprise'
                        value={form.badge}
                        onChange={(e) => setForm({ ...form, badge: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-semibold small'>
                      Overview Paragraphs (Separate paragraphs with double newlines)
                    </label>
                    <textarea
                      rows='6'
                      className='form-control'
                      value={form.overviewText}
                      onChange={(e) => setForm({ ...form, overviewText: e.target.value })}
                    ></textarea>
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-semibold small'>
                      Tech Stack Tags (Comma separated)
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='React.js, Node.js, AWS, Docker'
                      value={form.techStackText}
                      onChange={(e) => setForm({ ...form, techStackText: e.target.value })}
                    />
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-semibold small'>
                      Business Benefits List (One benefit per line)
                    </label>
                    <textarea
                      rows='4'
                      className='form-control'
                      placeholder='100% SLA Uptime&#10;Sub-50ms query response'
                      value={form.benefitsText}
                      onChange={(e) => setForm({ ...form, benefitsText: e.target.value })}
                    ></textarea>
                  </div>
                </div>

                <div className='modal-footer border-top'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary rounded-pill'
                    onClick={() => setEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type='submit' className='btn btn-primary rounded-pill px-4'>
                    <i className='bi bi-check-lg me-1'></i> Save &amp; Apply to Website
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminServices;
