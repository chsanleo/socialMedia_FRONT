import axios from 'axios';
import API_URL from './api';

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('authToken');
    const newConfig = {
        ...config
    }
    if (token) {
        newConfig.headers = {
            ...newConfig.headers,
            authorization: token
        }
    }
    return newConfig;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});