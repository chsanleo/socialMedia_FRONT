import axios from 'axios';
import API_URL from './api';

axios.defaults.baseURL = API_URL;

axios.defaults.headers.Authorization = localStorage.getItem('authToken');
