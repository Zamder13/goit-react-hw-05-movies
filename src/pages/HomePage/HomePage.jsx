import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'components/api/api';
import { useLocation } from 'react-router-dom';
import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton.jsx';
import { Title } from './HomePage.module.styled.jsx';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrendingFilms(page).then(({ data }) =>
      setFilms(films => [...films, ...data?.results])
    );
  }, [page]);

  return (
    <>
      <Title>In trending this week 🔥</Title>
      <Gallery films={films} location={location} />
      <LoadMoreButton onClick={() => setPage(page + 1)}>
        Download more
      </LoadMoreButton>
    </>
  );
};

export default HomePage;
