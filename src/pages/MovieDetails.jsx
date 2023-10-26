import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieByID } from '../tmdbAPI';
import { Cast } from '../components/Cast/Cast.jsx';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState("");
  const { movieId } = useParams();


    useEffect(() => {
        if (!movieId) return;

    async function getMovieByID() {
      try {
        const dataMovie = await fetchMovieByID(movieId);
        setMovieDetails(dataMovie);
 
      } catch (error) {
        console.log(error);
      }
    }
    getMovieByID();
    }, [ movieId]);
    
    const { id, poster_path, title, overview, genres } = movieDetails;

  return (
    movieDetails && <main>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <div>
        <h1>{title}</h1>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div>
        <Cast id={ id} />
      </div>
    </main>
  );
}

// консоль двоїться
