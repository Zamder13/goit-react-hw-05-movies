import { getFilmByID } from 'components/api/api';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import image from '../../images/notFound.jpg';

import {
  Wrapper,
  Genres,
  InfoThumb,
  Details,
  ImageThumb,
} from './MovieDetailsPage.styled.jsx';

const MovieDetailsPage = () => {
  const { state } = useLocation();

  const { movieId } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    getFilmByID(movieId).then(({ data }) => setFilm(data));
  }, [movieId]);

  return (
    <>
      <Wrapper>
        <ImageThumb>
          <Link to={state.location} state={state.location?.query}>
            <button type="button" style={{ display: 'block' }}>
              Go back
            </button>
          </Link>

          {film.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title}
            />
          ) : (
            <img src={image} alt={film.title} />
          )}
        </ImageThumb>
        <InfoThumb>
          <h2> {film.original_title}</h2>
          <p>
            <b>User Average: </b> {film.vote_average}
          </p>
          <p>
            <b>Overviev: </b>
            {film.overview}
          </p>
          {film.genres && (
            <Genres>
              <b>Genres:</b>
              {film.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
          )}
          <Details>
            <li>
              <Link to="cast" state={state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={state}>
                Reviews
              </Link>
            </li>
          </Details>
        </InfoThumb>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
