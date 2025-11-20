// client/src/pages/ForgotPassword.js
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 500 }}>
        <h2>Forgot Password</h2>

        {!sent ? (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input
              className="form-control mb-3"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-primary w-100">Send Reset Link</button>
          </form>
        ) : (
          <div className="alert alert-success">If email exists, reset link has been sent!</div>
        )}
      </div>
    </section>
  );
};

export default ForgotPassword;
