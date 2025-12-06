import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", form);
    alert("Signup submitted! (Connect backend later)");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(160deg,#7b2ff7,#b295ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    background: "rgba(255,255,255,0.15)",
    padding: "2.5rem",
    borderRadius: 16,
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.3)",
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center",
  },

  title: {
    color: "white",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    fontWeight: 700,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  input: {
    padding: "14px",
    borderRadius: 10,
    border: "none",
    fontSize: 16,
    outline: "none",
    background: "rgba(255,255,255,0.85)",
  },

  button: {
    padding: "14px",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    background: "#5a00d3",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
  },
};
