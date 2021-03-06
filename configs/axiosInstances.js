import axios from 'axios';

export const testApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
  timeout: 1000,
});

export default { testApi };
