import { Link } from 'react-router-dom';
import { List } from './Gallery.styled.jsx';
import PropTypes from 'prop-types';
import image from '../../images/notFound.jpg';

const Gallery = ({ films, location, query }) => {
  return (
    <List>
      {films.map(film => (
        <li key={film.id}>
          <Link
            to={`/movies/${film.id}`}
            state={{ location: { ...location, query: query } }}
          >
            {film.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.original_title}
              />
            ) : (
              <img src={image} alt={film.title} />
            )}
            <div>
              <h2>{film.title}</h2>
              <p>
                Rating:{' '}
                <b>{Math.round((Number(film.vote_average) * 100) / 10)}%</b>
              </p>
            </div>
          </Link>
        </li>
      ))}
    </List>
  );
};

Gallery.propTypes = {
  films: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  query: PropTypes.string,
};

export default Gallery;
