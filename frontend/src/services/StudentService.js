import axios from "axios";

const API_URL = "/api/students/";

// Get all students
export const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get single student
export const getStudentById = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

// Update student
export const updateStudent = async (id, studentData) => {
  const response = await axios.put(API_URL + id, studentData);
  return response.data;
};
