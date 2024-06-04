import axios, {axiosPrivate} from '../services/api';
import {baseURL} from '../utils/constants/api';

export const createOrder = async (order) => {
  const response = await axiosPrivate.post(
    '/api/order/addOrder', order
  );

  return response;
};
