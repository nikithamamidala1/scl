import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setStatus("Login successful!");
    } catch {
      setStatus("Invalid credentials");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default Login;
