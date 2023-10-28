import  Layout  from './Layout/Layout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import NotFound from 'pages/NoteFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import {Cast }from './Cast/Cast';
import {Reviews} from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
