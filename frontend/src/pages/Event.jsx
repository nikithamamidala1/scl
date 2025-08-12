import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/events")
      .then(res => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">School Events</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map(e => (
          <li key={e._id} className="bg-white shadow-md p-4 rounded">
            <h2 className="text-xl font-semibold">{e.title}</h2>
            <p>{e.description}</p>
            <p className="text-gray-500">{new Date(e.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
