import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'tmdbAPI';
import { CasList, CastItem, InfoWrapper, Name, Character } from './Cast.styled';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';

const defaultImg =
  'https://cdn.pixabay.com/photo/2015/04/18/11/03/profile-728591_1280.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const { cast } = await fetchCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      <CasList>
        {cast.map(({ cast_id, name, profile_path, character }) => (
          <CastItem key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImg
              }
              alt={name}
            />
            <InfoWrapper>
              <Name>{name}</Name>
              <Character>{`Character: ${character}`}</Character>
            </InfoWrapper>
          </CastItem>
        ))}
      </CasList>
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
};
