// client/src/pages/CreatePost.js
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/client";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [err, setErr] = useState(null);

  if (!user) {
    return (
      <section className="section">
        <div className="container">
          <p>Please <a href="/login">login</a> to create a post.</p>
        </div>
      </section>
    );
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/blog", { title, content });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErr(body.error || "Failed");
        return;
      }
      const data = await res.json();
      navigate(`/blog/${data.post.id}`);
    } catch (e) {
      setErr("Error creating post");
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h2>Create Post</h2>
        {err && <div className="alert alert-danger">{err}</div>}
        <form onSubmit={submit}>
          <div className="mb-3">
            <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="8" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required></textarea>
          </div>
          <button className="btn btn-primary">Publish</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
