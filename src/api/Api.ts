import axios from 'axios';
import {drivers} from './endpoints/drivers';

export const BASE_URL = 'http://ergast.com/api';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const Api = {
  drivers,
};
