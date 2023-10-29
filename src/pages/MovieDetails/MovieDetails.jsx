import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieByID } from '../../tmdbAPI';
import {
  MainData,
  BackLink,
  DataWrapper,
  GenreList,
  AddInfWrapper,
  LinkItem,
} from './MovieDetails.styled';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { BsArrowLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const defaultImg = 'https://i.ytimg.com/vi/G5bAHTYyNNc/sddefault.jpg';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    async function getMovieByID() {
      try {
        setLoading(true);
        setError(false);
        const dataMovie = await fetchMovieByID(movieId);
        setMovieDetails(dataMovie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieByID();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    movieDetails && (
      <main>
        <BackLink to={location.state?.from ?? '/'}>
          <IconContext.Provider value={{ size: '1em' }}>
          <BsArrowLeft />
        </IconContext.Provider>
          Go back
        </BackLink>
        <MainData>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w200${poster_path}`
                : defaultImg
            }
            alt={title}
            width="200"
          />
          <DataWrapper>
            <h1>{title}</h1>
            <p>{`User score: ${Math.round(vote_average * 10)}%`}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <GenreList>
              {genres.map(({ id, name }) => (
                <li key={id}>
                  <p>{name}</p>
                </li>
              ))}
            </GenreList>
          </DataWrapper>
        </MainData>
        <AddInfWrapper>
          <p>Additional information</p>
          <ul>
            <li>
              <LinkItem to="cast">Cast</LinkItem>
            </li>
            <li>
              <LinkItem to="reviews">Reviews</LinkItem>
            </li>
          </ul>
        </AddInfWrapper>
        {loading && <Loader />}
        {error && <Error />}
        <Outlet />
      </main>
    )
  );
}
