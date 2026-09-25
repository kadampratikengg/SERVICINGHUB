import React, { useState, useEffect } from 'react';
import { getBlogPosts, saveBlogPost, deleteBlogPost } from '../utils/blogStore';
import { uploadImageToCloudinary } from '../utils/cloudinary';

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [uploading, setUploading] = useState(false);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Form states
  const [form, setForm] = useState({
    id: '',
    title: '',
    author: 'IT Servicing Hub',
    category: 'Software & Web Development',
    excerpt: '',
    content: '',
    image: '',
    readTime: '4 min read',
  });

  useEffect(() => {
    setBlogs(getBlogPosts());
  }, []);

  const refreshBlogs = () => {
    setBlogs(getBlogPosts());
  };

  const handleOpenAdd = () => {
    setForm({
      id: '',
      title: '',
      author: 'IT Servicing Hub',
      category: 'Software & Web Development',
      excerpt: '',
      content: '',
      image: '',
      readTime: '4 min read',
    });
    setEditModalOpen(true);
  };

  const handleOpenEdit = (blog) => {
    setForm({
      id: blog.id,
      title: blog.title || '',
      author: blog.author || 'IT Servicing Hub',
      category: blog.category || 'Software & Web Development',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      image: blog.image || '',
      readTime: blog.readTime || '4 min read',
    });
    setEditModalOpen(true);
  };

  const handleImageFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImageToCloudinary(file);
      setForm((prev) => ({ ...prev, image: url }));
    } catch (err) {
      alert('Failed to process image file');
    } finally {
      setUploading(false);
    }
  };

  const handleOpenPreview = (blog) => {
    setCurrentBlog(blog);
    setPreviewModalOpen(true);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the blog post: "${title}"?`)) {
      deleteBlogPost(id);
      refreshBlogs();
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    saveBlogPost(form);
    refreshBlogs();
    setEditModalOpen(false);
  };

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (b.category && b.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className='d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3'>
        <div>
          <h2 className='fw-bold mb-1'>Blogs Management</h2>
          <p className='text-muted mb-0'>Create, edit, preview, and delete blog posts.</p>
        </div>
        <button onClick={handleOpenAdd} className='btn btn-primary rounded-pill px-4'>
          <i className='bi bi-plus-lg me-2'></i> Add New Blog Post
        </button>
      </div>

      {/* Search Filter */}
      <div className='admin-card p-3 mb-4'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='input-group'>
              <span className='input-group-text bg-body-tertiary border-end-0'>
                <i className='bi bi-search'></i>
              </span>
              <input
                type='text'
                className='form-control border-start-0'
                placeholder='Search by title or category...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='col-md-6 text-md-end mt-2 mt-md-0 text-muted small'>
            Showing {filteredBlogs.length} of {blogs.length} blog posts
          </div>
        </div>
      </div>

      {/* Table Listing */}
      <div className='admin-card'>
        <div className='table-responsive'>
          <table className='table admin-table align-middle'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Date</th>
                <th className='text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan='5' className='text-center py-4 text-muted'>
                    No blog posts found matching your search.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>
                      <div className='fw-bold text-heading'>{blog.title}</div>
                      <small className='text-muted text-truncate d-block max-w-400'>
                        {blog.excerpt || blog.content?.slice(0, 90)}
                      </small>
                    </td>
                    <td>
                      <span className='badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill'>
                        {blog.category || 'General'}
                      </span>
                    </td>
                    <td className='small'>{blog.author || 'IT Servicing Hub'}</td>
                    <td className='small text-muted'>{blog.createdAt || 'N/A'}</td>
                    <td className='text-end'>
                      <div className='action-btn-group justify-content-end'>
                        <button
                          onClick={() => handleOpenPreview(blog)}
                          className='btn btn-outline-info action-btn'
                          title='Preview Post'
                        >
                          <i className='bi bi-eye-fill'></i>
                        </button>
                        <button
                          onClick={() => handleOpenEdit(blog)}
                          className='btn btn-outline-primary action-btn'
                          title='Edit Post'
                        >
                          <i className='bi bi-pencil-fill'></i>
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className='btn btn-outline-danger action-btn'
                          title='Delete Post'
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

      {/* Modal 1: Add / Edit Blog Post */}
      {editModalOpen && (
        <div className='modal show d-block tab-index="-1"' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className='modal-dialog modal-lg modal-dialog-centered'>
            <div className='modal-content bg-body border rounded-4 shadow-lg'>
              <div className='modal-header border-bottom'>
                <h5 className='modal-title fw-bold'>
                  {form.id ? 'Edit Blog Post' : 'Add New Blog Post'}
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setEditModalOpen(false)}
                ></button>
              </div>
              <form onSubmit={handleSave}>
                <div className='modal-body'>
                  <div className='mb-3'>
                    <label className='form-label fw-semibold small'>Post Title</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter blog title...'
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className='row gy-3 mb-3'>
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
                        <option value='General News'>General News</option>
                      </select>
                    </div>

                    <div className='col-md-6'>
                      <label className='form-label fw-semibold small'>Author Name</label>
                      <input
                        type='text'
                        className='form-control'
                        value={form.author}
                        onChange={(e) => setForm({ ...form, author: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Cloudinary Image Upload Section */}
                  <div className='mb-3 p-3 bg-body-tertiary rounded-3 border'>
                    <label className='form-label fw-semibold small d-flex align-items-center justify-content-between mb-2'>
                      <span><i className='bi bi-cloud-arrow-up-fill me-2 text-primary'></i> Blog Cover Image (Cloudinary / File Upload)</span>
                      {uploading && <span className='badge bg-warning text-dark font-monospace'><i className='bi bi-arrow-repeat spin me-1'></i> Processing Upload...</span>}
                    </label>

                    <div className='row gy-2 align-items-center mb-2'>
                      <div className='col-md-6'>
                        <input
                          type='file'
                          className='form-control form-control-sm'
                          accept='image/*'
                          onChange={handleImageFileChange}
                          disabled={uploading}
                        />
                        <small className='text-muted d-block mt-1' style={{ fontSize: '0.75rem' }}>
                          Select image file from computer to upload via Cloudinary.
                        </small>
                      </div>
                      <div className='col-md-6'>
                        <input
                          type='text'
                          className='form-control form-control-sm font-monospace'
                          placeholder='https://res.cloudinary.com/... or image URL'
                          value={form.image}
                          onChange={(e) => setForm({ ...form, image: e.target.value })}
                        />
                        <small className='text-muted d-block mt-1' style={{ fontSize: '0.75rem' }}>
                          Or paste direct Cloudinary / Unsplash image URL.
                        </small>
                      </div>
                    </div>

                    {form.image && (
                      <div className='d-flex align-items-center gap-3 mt-3 pt-2 border-top'>
                        <img
                          src={form.image}
                          alt='Preview'
                          className='rounded-3 object-fit-cover shadow-sm'
                          style={{ width: '80px', height: '55px' }}
                          onError={(e) => (e.target.style.display = 'none')}
                        />
                        <span className='small text-success fw-semibold'>
                          <i className='bi bi-check-circle-fill me-1'></i> Cover Image Ready
                        </span>
                      </div>
                    )}
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-semibold small'>Short Excerpt</label>
                    <textarea
                      rows='2'
                      className='form-control'
                      placeholder='Brief summary for blog list card...'
                      value={form.excerpt}
                      onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    ></textarea>
                  </div>

                  <div className='mb-3'>
                    <label className='form-label fw-semibold small'>Full Content</label>
                    <textarea
                      rows='6'
                      className='form-control'
                      placeholder='Write full blog post content here...'
                      value={form.content}
                      onChange={(e) => setForm({ ...form, content: e.target.value })}
                      required
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
                    <i className='bi bi-check-lg me-1'></i> {form.id ? 'Save Changes' : 'Publish Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Preview Blog Post */}
      {previewModalOpen && currentBlog && (
        <div className='modal show d-block' style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className='modal-dialog modal-lg modal-dialog-centered'>
            <div className='modal-content bg-body border rounded-4 shadow-lg'>
              <div className='modal-header border-bottom'>
                <h5 className='modal-title fw-bold'>Blog Post Preview</h5>
                <button
                  type='button'
                  className='btn-close'
                  onClick={() => setPreviewModalOpen(false)}
                ></button>
              </div>
              <div className='modal-body p-4'>
                <span className='badge bg-primary bg-opacity-10 text-primary mb-2'>
                  {currentBlog.category}
                </span>
                <h3 className='fw-bold mb-2'>{currentBlog.title}</h3>
                <div className='text-muted small mb-4'>
                  By {currentBlog.author || 'Admin'} &bull; Published on {currentBlog.createdAt}
                </div>
                {currentBlog.excerpt && (
                  <div className='p-3 bg-body-tertiary rounded-3 border-start border-primary border-4 mb-4 text-muted fst-italic'>
                    {currentBlog.excerpt}
                  </div>
                )}
                <div className='lh-relaxed text-body' style={{ whiteSpace: 'pre-wrap' }}>
                  {currentBlog.content}
                </div>
              </div>
              <div className='modal-footer border-top'>
                <button
                  type='button'
                  className='btn btn-secondary rounded-pill px-4'
                  onClick={() => setPreviewModalOpen(false)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogs;
