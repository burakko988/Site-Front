import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://plankton-app-ouh3i.ondigitalocean.app/api/',
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

export const fetchEventById = async (eventId: string) => {
  try {
    const response = await apiClient.get(`/publicEvent/events/${eventId}`);
    console.log('Event Data: ', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Network error occurred');
  }
};

export const fetchEventByTitle = async (title: string) => {
  try {
    const response = await apiClient.get(`/publicEvent/title/${title}`);
    console.log('Event Data: ', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Network error occurred');
  }
};

export const fetchEventByCategory = async (category: string) => {
  try {
    const response = await apiClient.get(`/publicEvent/category/${category}`);
    console.log('Event Data: ', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Network error occurred');
  }
};

export const fetchEventByPlace = async (place: string) => {
  try {
    const response = await apiClient.get(`/publicEvent/place/${place}`);
    console.log('Event Data: ', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Network error occurred');
  }
};

export const fetchPreviousEvents = async () => {
  try {
    const response = await apiClient.get('/publicEvent/previous-events');
    console.log('Previous events data: ', response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Network error occurred');
  }
};

export const fetchFilteredEvents = async (query: any) => {
  try {
    const response = await apiClient.get(`/publicEvent/filter-events?search=${query}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data.message || 'Network error occurred');
  }
};
