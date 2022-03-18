import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL,
  params: {
    api_key: apiKey,
  },
});
