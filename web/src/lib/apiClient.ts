import aspida from '@aspida/fetch';
import api from 'api/$api';

const fetchConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  throwHttpErrors: true, // throw an error on 4xx/5xx, default is false
};

export const client = api(aspida(fetch, fetchConfig));
