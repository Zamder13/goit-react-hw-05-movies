import { useState, useEffect } from 'react';
import { getFilsByPage } from 'components/api/api';
import useDebounce from '../../hooks/useDebounce.jsx';
import { useLocation } from 'react-router-dom';
import { Input } from './MoviesPage.styled.jsx';
import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton.jsx';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const debQuery = useDebounce(query, 400);

  const location = useLocation();
  let backQuery = location.state;

  useEffect(() => {
    if (!backQuery) {
      return;
    } else {
      setQuery(backQuery);
    }
  }, [backQuery]);

  useEffect(() => {
    if (query === '') {
      setFilms([]);
      return;
    }

    if (debQuery) {
      setLoading(true);
      getFilsByPage(debQuery, page)
        .then(({ data }) => {
          if (debQuery !== query) {
            setFilms([]);
            return;
          }

          setFilms(films => [...films, ...data.results]);
        })
        .catch(error => {
          return error;
        })
        .finally(setLoading(false));
    }
  }, [debQuery, loading, page, query]);

  return (
    <>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={({ currentTarget }) => {
          setQuery(currentTarget.value.toLowerCase().trim());
        }}
        value={query}
      />

      {films.length > 1 && (
        <>
          <Gallery films={films} location={location} query={query} />
          <LoadMoreButton onClick={() => setPage(page + 1)}>
            Load more
          </LoadMoreButton>
        </>
      )}
    </>
  );
};

export default MoviesPage;
