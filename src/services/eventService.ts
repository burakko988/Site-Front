import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchEvents = async () => {
  try {
    const response = await apiClient.get('/publicEvent/summary');
    console.log('data: ', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || 'Network error occurred');
  }
};
