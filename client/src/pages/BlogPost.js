// client/src/pages/BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/client";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get(`/blog/${id}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data.post);
        } else {
          setPost({ title: "Demo Post", content: "No post found. This is demo content." });
        }
      } catch (e) {
        setPost({ title: "Demo Post", content: "No post found. This is demo content." });
      }
    };
    load();
  }, [id]);

  if (!post) return <section className="section"><div className="container">Loading...</div></section>;

  return (
    <section className="section">
      <div className="container">
        <h2>{post.title}</h2>
        <div className="mt-3">
          <p>{post.content || post.excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
