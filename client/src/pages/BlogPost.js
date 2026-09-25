// client/src/pages/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/client';
import { getBlogPosts } from '../utils/blogStore';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get(`/blog/${id}`);
        if (res.ok) {
          const data = await res.json();
          if (data.post) {
            setPost(data.post);
            return;
          }
        }
      } catch (e) {
        // fallback
      }

      const localPosts = getBlogPosts();
      const found = localPosts.find((p) => p.id === id);
      if (found) {
        setPost(found);
      } else {
        setPost({
          title: 'Article Not Found',
          content: 'The requested blog post is no longer available.',
          category: 'Notice',
        });
      }
    };
    load();
  }, [id]);

  if (!post)
    return (
      <section className='section py-5'>
        <div className='container text-center'>Loading article...</div>
      </section>
    );

  return (
    <section className='section py-5'>
      <div className='container' style={{ maxWidth: '800px' }}>
        <nav aria-label='breadcrumb' className='mb-4'>
          <ol className='breadcrumb bg-transparent p-0 mb-0'>
            <li className='breadcrumb-item'>
              <Link to='/' className='text-muted text-decoration-none'>
                Home
              </Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/blog' className='text-muted text-decoration-none'>
                Blog
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {post.title}
            </li>
          </ol>
        </nav>

        <article className='p-4 p-md-5 bg-body-tertiary rounded-4 border shadow-sm'>
          {post.category && (
            <span className='badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-1 rounded-pill mb-3'>
              {post.category}
            </span>
          )}
          <h1 className='fw-bold mb-3 fs-2'>{post.title}</h1>
          <div className='d-flex align-items-center gap-3 text-muted small mb-4 pb-3 border-bottom'>
            <span>
              <i className='bi bi-person me-1'></i> By {post.author || 'IT Servicing Hub'}
            </span>
            <span>&bull;</span>
            <span>
              <i className='bi bi-calendar3 me-1'></i> {post.createdAt || 'Published'}
            </span>
            {post.readTime && (
              <>
                <span>&bull;</span>
                <span>
                  <i className='bi bi-clock me-1'></i> {post.readTime}
                </span>
              </>
            )}
          </div>

          {post.image && (
            <div className='mb-4 rounded-4 overflow-hidden border shadow-sm' style={{ maxHeight: '420px' }}>
              <img src={post.image} alt={post.title} className='w-100 h-100 object-fit-cover' />
            </div>
          )}

          {post.excerpt && (
            <div className='p-3 bg-body rounded-3 border-start border-primary border-4 mb-4 text-muted fst-italic'>
              {post.excerpt}
            </div>
          )}

          <div className='lh-relaxed text-body fs-6' style={{ whiteSpace: 'pre-wrap' }}>
            {post.content || post.excerpt}
          </div>

          <div className='mt-5 pt-4 border-top text-center'>
            <Link to='/blog' className='btn btn-outline-primary rounded-pill px-4'>
              <i className='bi bi-arrow-left me-2'></i> Back to Blog Articles
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
