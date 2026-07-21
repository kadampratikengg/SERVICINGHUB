// client/src/pages/CreatePost.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api/client";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const CreatePost = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [customCategory, setCustomCategory] = useState("");
  const [serviceCategories, setServiceCategories] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    api.get("/services")
      .then((res) => res.json())
      .then((data) => setServiceCategories(data.services || []))
      .catch(() => {});
  }, []);

  if (!user) {
    return (
      <section className="section">
        <div className="container">
          <p>Please <a href="/login">login</a> to create a post.</p>
        </div>
      </section>
    );
  }

  const finalCategory =
    category === "Other" ? customCategory : category;

  const publish = async () => {
    const form = new FormData();
    form.append("title", title);
    form.append("author", author);
    form.append("content", content);
    form.append("category", finalCategory);
    if (image) form.append("image", image);

    const res = await api.post("/blog", form);

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setErr(body.error || "Failed");
      return;
    }

    const data = await res.json();
    navigate(`/blog/${data.post.id}`);
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 700 }}>
        <h2>Create Post</h2>

        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={(e) => e.preventDefault()}>

          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial",
              }}
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>

              {serviceCategories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}

              <option value="Other">Other</option>
            </select>
          </div>

          {category === "Other" && (
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Enter Custom Category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
              />
            </div>
          )}

          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="mb-3">
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder="Write your content..."
            />
          </div>

          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="btn btn-secondary"
          >
            Preview
          </button>
        </form>

        {/* PREVIEW MODAL */}
        {showPreview && (
          <div className="modal fade show d-block"
            style={{ background: "rgba(0,0,0,0.6)" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Preview</h5>
                  <button className="btn-close"
                    onClick={() => setShowPreview(false)}></button>
                </div>

                <div className="modal-body">

                  <h3>{title}</h3>
                  <p className="text-muted">
                    By {author} — <span>{finalCategory}</span>
                  </p>

                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      className="img-fluid rounded mb-3"
                      alt="preview"
                    />
                  )}

                  <div
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary"
                    onClick={() => setShowPreview(false)}>
                    Close
                  </button>

                  <button className="btn btn-primary" onClick={publish}>
                    Publish Now
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

// FIXED QUILL FORMAT
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "underline", "italic"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ font: [] }],
    ["clean"]
  ]
};

const formats = [
  "header",
  "bold",
  "underline",
  "italic",
  "list",
  "bullet",
  "size",
  "font"
];

export default CreatePost;
