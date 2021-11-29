import axios from "axios";
const url = process.env.REACT_APP_SWAPI;

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;