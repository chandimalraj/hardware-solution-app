import axios, {axiosPrivate} from '../services/api';
import {baseURL} from '../utils/constants/api';

export const getPaginatedCustomers = async page => {
  const response = await axiosPrivate.get(
    '/api/customer/getCustomers?page=' + page + '&perPage=10',
  );

  return response;
};

export const getCustomersByName = async name => {
  const response = await axiosPrivate.get(
    '/api/customer/getCustomersByName?name=' + name,
  );

  return response;
};
