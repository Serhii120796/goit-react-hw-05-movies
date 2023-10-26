import { useState, useEffect } from 'react';
import { fetchMovies } from '../tmdbAPI';
import { MoviesList } from '../components/MoviesList/MoviesList';

export default function Home() {

    const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { results } = await fetchMovies();
          setTrendingMovies(results);
        } catch (error) {
            console.log(error);
        }
    }
    
    getMovies();
}, []);


  return (
    <main>
      <h1>Trending today</h1>
          {(trendingMovies.length > 0)  && <MoviesList movies={ trendingMovies} />}
    </main>
  );
}
