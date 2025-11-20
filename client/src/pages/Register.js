import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const res = await register(form);

    if (res.ok) {
      navigate("/blog");
    } else {
      setErr(res.error || "Registration failed");
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "450px" }}>
        <h2>Create Account</h2>

        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={submit}>
          <input
            className="form-control mb-3"
            placeholder="Username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
            required
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button className="btn btn-primary w-100">Register</button>
        </form>

        <div className="mt-3 text-center">
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
