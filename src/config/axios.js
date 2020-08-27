import axios from 'axios';
import API_URL from './api';
import { utils } from '../utils/utils';

axios.defaults.baseURL = API_URL;

let token = localStorage.getItem('authToken');
if(!utils.isNullOrEmpty(token)){  axios.defaults.headers.authorization = token; }

