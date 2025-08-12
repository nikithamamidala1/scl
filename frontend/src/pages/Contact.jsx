import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      setStatus("Message sent successfully!");
    } catch {
      setStatus("Failed to send message");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} className="w-full p-2 border rounded" rows="4" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default Contact;
