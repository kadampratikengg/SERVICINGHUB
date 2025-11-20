import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const db = JSON.parse(localStorage.getItem("users") || "[]");

    const found = db.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      return true;
    }

    return false;
  };

  // FIX: ADD REGISTER FUNCTION
  const register = async (form) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // check if email exists
      if (users.some((u) => u.email === form.email)) {
        return { ok: false, error: "Email already exists" };
      }

      const newUser = {
        username: form.username,
        email: form.email,
        password: form.password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // auto login
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Something went wrong" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
