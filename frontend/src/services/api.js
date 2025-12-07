import axios from "axios";

// Usar variable de entorno para la URL del backend
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const api = axios.create({
  baseURL: BASE_URL
});