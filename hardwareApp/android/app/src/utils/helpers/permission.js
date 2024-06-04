import {jwtDecode} from 'jwt-decode';
import {getToken} from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import base64url from 'base64url';
import { Buffer } from 'buffer';

export const getUserId = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
    console.log(token);
    
    const decodedString = Buffer.from(token.split('.')[1], 'base64').toString();
    console.log(decodedString);
    return JSON.parse(decodedString).userId;
  } catch (error) {
    console.log(error);
  }
};
// Example function to decode JWT
const decodeJWT = token => {
  try {
    const decodedToken = jwtDecode(token);
    //console.log('Decoded Token:', decodedToken);
    return decodedToken;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};
