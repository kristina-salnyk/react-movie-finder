export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '3db99de6ff3e5f2ef6de763ae547f586';

export const REQUEST_URL = {
  TRENDING: '/trending',
  SEARCH: '/search/movie',
  MOVIE: '/movie',
  GENRES: '/genre/movie/list',
  CREDITS: '/credits',
  REVIEWS: '/reviews',
};

export const REQUEST_CONFIGS = {
  mediaType: 'movie',
  timeWindow: 'day',
  includeAdult: false,
};
