import api from './api';
import { REQUEST_URL, REQUEST_CONFIGS } from '../../constants';

export const getSearchingMovie = async searchQuery => {
  const config = {
    params: {
      query: searchQuery,
      page: 1,
      include_adult: REQUEST_CONFIGS.includeAdult,
    },
  };

  try {
    const response = await api.get(REQUEST_URL.SEARCH, config);
    return response.data;
  } catch (error) {
    return null;
  }
};
