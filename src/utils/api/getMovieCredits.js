import api from './api';
import { REQUEST_URL } from '../../constants';

export const getMovieCredits = async id => {
  const url = `${REQUEST_URL.MOVIE}/${id}/${REQUEST_URL.CREDITS}`;

  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    return null;
  }
};
