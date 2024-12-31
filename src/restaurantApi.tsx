import axios from 'axios';


// Create an instance of axios
const Api = axios.create({
  baseURL: 'https://athulfood-4.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include token in headers if it exists
Api.interceptors.request.use((config) => {
  const token = localStorage.getItem('restaurantToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export default Api;
