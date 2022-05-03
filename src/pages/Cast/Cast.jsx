import { getFilmCredits } from 'components/api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Wrapper, BadResult } from './Cast.styled.jsx';
import noPhoto from '../../images/noImage.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    getFilmCredits(movieId).then(({ data }) => setActors(data.cast));
  }, [movieId]);

  return (
    <Wrapper>
      <h3>Cast</h3>
      {actors ? (
        <List>
          {actors.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img src={noPhoto} alt={actor.name} />
              )}

              <p>
                {actor.name} - <b>"{actor.character}"</b>
              </p>
            </li>
          ))}
        </List>
      ) : (
        <BadResult>Total secret!</BadResult>
      )}
    </Wrapper>
  );
};

export default Cast;
