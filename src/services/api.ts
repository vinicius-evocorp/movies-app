import axios from 'axios';

import { DEFAULT_LOCALE } from '@/i18n';

const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
const apiImagesBaseURL = import.meta.env.VITE_API_IMAGES_BASE_URL;

const apiKey = import.meta.env.VITE_API_KEY;

const language = localStorage.getItem('i18nextLng') || DEFAULT_LOCALE;

export const api = axios.create({ baseURL: apiBaseURL, params: { api_key: apiKey, language } });

export const apiImages = axios.create({ baseURL: apiImagesBaseURL, params: { api_key: apiKey } });
