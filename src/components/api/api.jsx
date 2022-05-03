import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = `48dc0fe6086a9431dd528d88acba16d2`;

const fetchFilms = async (url, config) => {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    return error;
  }
};

export function getTrendingFilms(page) {
  return fetchFilms(
    `${BASE_URL}/trending/movie/week?api_key=${KEY}&page=${page}`
  );
}

export const getFilmByID = id => {
  return fetchFilms(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
};

export const getFilmCredits = id => {
  return fetchFilms(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
};
export const getFilmReviews = id => {
  return fetchFilms(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
};

export const getFilmByName = name => {
  return fetchFilms(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=true&query=${name}`
  );
};
export const getFilsByPage = (name, page) => {
  return fetchFilms(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=${page}&include_adult=true&query=${name}`
  );
};

// https://api.themoviedb.org/3/movie/157336?api_key={api_key}?&include_adult=true&query=${name}
