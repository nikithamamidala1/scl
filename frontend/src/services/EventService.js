import axios from "axios";

const API_URL = "/api/events/";

// Get all events
export const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create event
export const createEvent = async (eventData) => {
  const response = await axios.post(API_URL, eventData);
  return response.data;
};

// Delete event
export const deleteEvent = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
