import axios from 'axios';
import {baseURL} from '../utils/constants/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default axios.create({baseURL: baseURL});

export const axiosPrivate = axios.create({
  baseURL: baseURL,
});

// Request interceptor for the private Axios instance
axiosPrivate.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Contol-Allow-Origin"] = "*";
      
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};
