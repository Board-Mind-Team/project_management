import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/', // Cambia esto según la URL de tu backend
});

export default api;
