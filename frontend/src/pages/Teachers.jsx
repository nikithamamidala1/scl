import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/teachers")
      .then(res => {
        setTeachers(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Teachers</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teachers.map(t => (
          <li key={t._id} className="bg-white shadow-md p-4 rounded">
            <h2 className="text-xl font-semibold">{t.userId?.name}</h2>
            <p>{t.subject}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teachers;
