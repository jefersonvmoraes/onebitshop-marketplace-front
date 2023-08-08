import axios from "axios";

const baseURL = "http://192.168.0.106:19000";

const api = axios.create({
  baseURL,
  validateStatus: (status)=> status >= 200 && status <= 500,
});

export default api;