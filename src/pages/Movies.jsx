import { MoviesList } from '../components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchMoviesByQuery } from '../tmdbAPI';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';

export default function Movies() {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query === '') return;

    async function getMoviesByQuery() {
      try {
        const { results } = await fetchMoviesByQuery(query);
        setMoviesByQuery(results);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesByQuery();
  }, [query]);

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />
      {moviesByQuery.length > 0 && <MoviesList movies={moviesByQuery} />}
    </main>
  );
}
