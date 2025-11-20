import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/blog");
    } else {
      setErr("Invalid credentials");
    }
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

        {/* Extra Account Links */}
        <div className="text-center mt-3">
          <Link to="/register" className="text-decoration-none me-3">
            Create Account
          </Link>
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        <p className="mt-3 text-muted text-center">
          Demo login — replace with Node backend authentication.
        </p>
      </div>
    </section>
  );
};

export default Login;
