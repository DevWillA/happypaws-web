import axios from "axios";

export const api = axios.create({
  baseURL: "/", // usa la raíz del sitio
});

