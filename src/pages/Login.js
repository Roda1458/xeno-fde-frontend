// src/pages/Login.js
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6b73ff, #000dff)",
      }}
    >
      <div
        style={{
          width: 380,
          padding: 30,
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          textAlign: "center",
          transition: "transform 0.3s",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: 20,
            fontFamily: "Arial, sans-serif",
            color: "#333",
            fontWeight: 700,
          }}
        >
          Sign In
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 6,
            border: "1px solid #ccc",
            outline: "none",
            fontSize: 16,
            transition: "border 0.3s",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #6b73ff")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <button
          onClick={() => onLogin({ email })}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 6,
            border: "none",
            background: "linear-gradient(90deg, #6b73ff, #000dff)",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 16,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Continue
        </button>

        <p style={{ marginTop: 20, color: "#666", fontSize: 14 }}>
          Enter your email to sign in quickly
        </p>
      </div>
    </div>
  );
}
