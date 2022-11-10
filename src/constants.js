export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '3db99de6ff3e5f2ef6de763ae547f586';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const REQUEST_URL = {
  TRENDING: '/trending',
  SEARCH: '/search/movie',
  MOVIE: '/movie',
  GENRES: '/genre/movie/list',
  CREDITS: '/credits',
  REVIEWS: '/reviews',
};

export const REQUEST_CONFIGS = {
  page: 1,
  mediaType: 'movie',
  timeWindow: 'day',
  includeAdult: false,
};

export const MESSAGE_TYPES = {
  EMPTY_QUERY: 'emptyQuery',
  ERROR: 'error',
  NO_RESULTS: 'noResults',
};
