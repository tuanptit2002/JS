import axios from 'axios';
import { getSession } from '../context/ProvideAuth'
// ----------------------------------------------------------------------

export const axiosShop = axios.create({
  baseURL: 'http://localhost:8200',
  
  headers:{ Authorization: getSession() && `Bearer ${getSession()}` },
  timeout: 0,
});

