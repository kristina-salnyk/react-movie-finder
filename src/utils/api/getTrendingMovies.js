import api from './api';
import { REQUEST_URL, REQUEST_CONFIGS } from '../../constants';

export const getTrendingMovies = async () => {
  const config = {
    params: {
      page: 1,
    },
  };

  const url = `${REQUEST_URL.TRENDING}/${REQUEST_CONFIGS.mediaType}/${REQUEST_CONFIGS.timeWindow}`;

  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    return null;
  }
};
