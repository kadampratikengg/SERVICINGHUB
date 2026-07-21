import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const POSTS_KEY = 'ServiceHub_posts_v1';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem(POSTS_KEY) || '[]');
    const p = posts.find((x) => String(x.id) === String(id));
    setPost(p || null);
  }, [id]);

  if (!post) {
    return (
      <section className='section'>
        <div className='container'>
          <p>
            Post not found. <Link to='/blog'>Back to blog</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className='blog-details section'>
      <div className='container'>
        <Link to='/blog' className='btn btn-link mb-3'>
          ← Back to Blog
        </Link>
        <div className='article card p-4'>
          <h2 className='title'>{post.title}</h2>
          <p className='text-muted'>
            By {post.author} — {new Date(post.date).toLocaleString()}
          </p>
          <div className='content mt-3'>
            {post.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
