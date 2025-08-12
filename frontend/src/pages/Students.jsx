import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/students")
      .then(res => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Students</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {students.map(s => (
          <li key={s._id} className="bg-white shadow-md p-4 rounded">
            <h2 className="text-xl font-semibold">{s.userId?.name}</h2>
            <p>Class: {s.class} - Section: {s.section}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
