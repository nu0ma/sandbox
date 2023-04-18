import axios from 'axios';

import { API_URL } from '@/config/config';
import { logger } from '@/utils/logger';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    logger.error(message);

    return Promise.reject(error);
  }
);

export const getData = async <T>(url: string): Promise<T> => {
  try {
    const response = await (await axios.get(API_URL + url)).data;
    return response;
  } catch (error: any) {
    logger.error(error.message);
    return Promise.reject(error);
  }
};
