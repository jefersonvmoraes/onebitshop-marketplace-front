import axios from "axios";

const baseURL = "http://localhost:19000";

const api = axios.create({
  baseURL,
  validateStatus: (status)=> status >= 200 && status <= 500,
});

export default api;