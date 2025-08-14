import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      navigate("/home");
    }
  };

  return (
    <div
      className="app-container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <h1 style={{ color: "white" }}>Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", borderRadius: "8px", marginBottom: "10px" }}
      />
      <button
        onClick={handleLogin}
        style={{ padding: "10px", borderRadius: "8px" }}
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
