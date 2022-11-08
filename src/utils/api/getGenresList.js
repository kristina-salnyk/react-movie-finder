import api from './api';
import { REQUEST_URL } from '../../constants';

export const getGenresList = async () => {
  try {
    const response = await api.get(REQUEST_URL.GENRES);
    return response.data;
  } catch (error) {
    return null;
  }
};
