import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/notices")
      .then(res => {
        setNotices(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Notices</h1>
      <ul className="space-y-4">
        {notices.map(n => (
          <li key={n._id} className="bg-white shadow-md p-4 rounded">
            <h2 className="text-xl font-semibold">{n.title}</h2>
            <p>{n.message}</p>
            <p className="text-gray-500">{new Date(n.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
