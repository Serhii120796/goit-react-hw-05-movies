// import { useState, useEffect } from 'react';
import { Layout } from './Layout';
// import { Loader } from './Loader/Loader';
// import { Error } from './Error/Error';
import { fetchMovies } from '../tmdbAPI';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';
// import MovieDetails from '../pages/MovieDetails';
import { Link, Navigation, Header} from './App.styled';

export const App = () => {
  async function getMovies() {
    try {
      const data = await fetchMovies();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getMovies();

  return (
    <Layout>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </Layout>
  );
};
