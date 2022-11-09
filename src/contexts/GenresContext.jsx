import { createContext, useContext, useEffect, useState } from 'react';
import { getGenresList } from '../utils/api/getGenresList';

const GenresContext = createContext();

export const useGenres = () => useContext(GenresContext);

export const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGenresList();
        setGenres(data.genres);
      } catch (error) {}
    })();
  }, []);

  const getGenresByIds = genreIds => {
    return genreIds
      .map(id => {
        const genre = genres.find(item => item.id === id);
        return genre?.name;
      })
      .filter(item => item)
      .join(', ');
  };

  return (
    <GenresContext.Provider value={{ genres, getGenresByIds }}>
      {children}
    </GenresContext.Provider>
  );
};
