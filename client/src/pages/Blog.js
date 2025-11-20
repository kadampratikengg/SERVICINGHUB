// client/src/pages/Blog.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

const Blog = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/blog");
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts || []);
        } else {
          // fallback demo posts
          setPosts([
            { id: "d1", title: "DevOps Best Practices", excerpt: "CI/CD and automation" },
            { id: "d2", title: "Why Move to Cloud?", excerpt: "Benefits of cloud" },
          ]);
        }
      } catch (e) {
        setPosts([
          { id: "d1", title: "DevOps Best Practices", excerpt: "CI/CD and automation" },
          { id: "d2", title: "Why Move to Cloud?", excerpt: "Benefits of cloud" },
        ]);
      }
    };
    load();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2>Blog</h2>
            <p>Latest posts</p>
          </div>
          {user && <Link to="/create-post" className="btn btn-primary">Create Post</Link>}
        </div>

        <div className="row gy-4">
          {posts.map((p) => (
            <div key={p.id} className="col-lg-6 mb-3">
              <div className="card h-100 p-3">
                <h4>{p.title}</h4>
                <p className="text-muted">{p.excerpt || p.content?.slice(0, 140)}</p>
                <Link to={`/blog/${p.id}`} className="btn btn-sm btn-outline-primary">Read</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
