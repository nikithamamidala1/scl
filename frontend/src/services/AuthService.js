import axios from "axios";

const API_URL = "/api/auth/";

export const login = async (email, password) => {
  const response = await axios.post(API_URL + "login", { email, password });
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
