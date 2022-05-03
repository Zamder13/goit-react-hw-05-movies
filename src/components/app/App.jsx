// import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import { createAsyncPage } from 'helpers';

const HomePage = createAsyncPage('HomePage');
const MoviesPage = createAsyncPage('MoviesPage');
const MovieDetailsPage = createAsyncPage('MovieDetailsPage');
const NotFoundPage = createAsyncPage('NotFoundPage');
const Cast = createAsyncPage('Cast');
const Reviews = createAsyncPage('Reviews');

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />}></Route>
            <Route path="movies" element={<MoviesPage />}></Route>
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
