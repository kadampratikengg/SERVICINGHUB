// client/src/pages/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/client";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser } = useAuth();   // Make sure AuthContext supports this
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    // Call backend
    const res = await api.post("/auth/login", { email, password });

    if (!res.ok) {
      setErr("Invalid credentials");
      return;
    }

    const data = await res.json();

    // Save JWT token
    if (data.token) {
      localStorage.setItem("token", data.token);
    }

    // Save user info
    setUser({ email });

    navigate("/blog");
  };

  return (
    <section className="section" style={{ marginTop: "90px" }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <div className="section-title text-center">
          <h2>Login</h2>
        </div>

        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={submit}>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/register" className="text-decoration-none me-3">
            Create Account
          </Link>
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
