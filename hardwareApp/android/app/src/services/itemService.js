import axios, {axiosPrivate} from '../services/api';
import {baseURL} from '../utils/constants/api';

export const getItemsByCategory = async (category, page) => {
  const response = await axiosPrivate.get(
    '/api/item/getItemsByCategory?category=' +
      category +
      '&page=' +
      page +
      '&pageSize=10',
  );

  return response;
};

export const getItemsByName = async (name, category) => {
  const response = await axiosPrivate.get(
    '/api/item/getItemsByName?name=' +
      name +
      '&category=' +
      category +
      '&page=1&pageSize=100',
  );

  return response;
};
