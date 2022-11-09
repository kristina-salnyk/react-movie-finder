import api from './api';
import { REQUEST_URL } from '../../constants';

export const getMovieById = async id => {
  const url = `${REQUEST_URL.MOVIE}/${id}`;

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};
